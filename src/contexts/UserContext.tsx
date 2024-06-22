import React from 'react';
import { Chart, IUser, Sensor, UserContextI, UserContextProps } from '../interfaces/';
import { app } from '../config/firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { User } from 'firebase/auth';


const initialUserContext: UserContextI = {
  user: null,
  sensors: [],
  charts: [],
  logout: () => { },
  getChart: () => { return null },
  getChartData: () => { return []; },
  createChart: async (newChart: Chart) => { return newChart },
  createSensor: async (newSensor: Sensor) => { return newSensor },
};

export const UserContext = React.createContext<UserContextI>(initialUserContext);


export const UserProvider = ({ children }: UserContextProps) => {
  const [firebaseUser, setFirebaseUser] = React.useState<User | null>(null);
  const [user, setUser] = React.useState<IUser | null>(initialUserContext.user);
  const [charts, setCharts] = React.useState<Chart[]>(initialUserContext.charts);
  const [sensors, setSensors] = React.useState<Sensor[]>(initialUserContext.sensors);


  React.useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user)
    });
  }, []);

  React.useEffect(() => {
    if (!firebaseUser) {
      setUser(null);
      //TODO: logout api
      return;
    }
    firebaseUser.getIdToken().then((token) => {
      fetch('/api/login', {
        headers: {
          'Content-Type': 'application/json'
        }, method: 'POST', body: JSON.stringify({ accessToken: token })
      }).then((response) => {
        return response.json();
      }).then((loggedUser) => {
        setUser(loggedUser)
        fetch('/api/user/info')
      });

    });
  }, [firebaseUser]);


  React.useEffect(() => {
    if (!user) {
      setSensors([]);
      setCharts([]);
      return;
    }
    fetch('/api/charts').then((response) => response.json()).then((charts) => setCharts(charts));
    fetch('/api/sensors').then((response) => response.json()).then((sensors) => setSensors(sensors));

  }, [user]);

  const logout = () => {
    signOut(getAuth(app))
  };

  const getChart = (id: number) => {
    const chart = charts.find((chart) => chart.id == id);
    return chart || null;
  };

  const getChartData = async (chart: Chart, date: string) => {
    const groupBy = 'minutes';
    return fetch(`/api/sensors/${chart.sensorId}/date/${date}/${chart.search_function_name}/${groupBy}/index/${chart.index}`).then((r) => r.json());
  };

  const create = async (input: string, newObj: any) => {
    return fetch(input, {
      headers: {
        'Content-Type': 'application/json',
      }, method: 'POST', body: JSON.stringify(newObj)
    }).then(async (r) => {
      if (r.status !== 200) {
        throw Error((await r.json()).message)
      }
      return r.json()
    })
  };

  const createChart = async (newChart: Chart) => {
    return create('/api/charts', newChart).then((chart: Chart) => {
      setCharts([...charts, chart]);
      return chart;
    })
  }
    ;
  const createSensor = async (newChart: Sensor) => {
    return create('/api/sensors', newChart).then((sensor: Sensor) => {
      setSensors([...sensors, sensor]);
      return sensor;
    })
  };


  return (
    <UserContext.Provider value={{ user, logout, sensors, charts, getChart, getChartData, createChart, createSensor }}>
      {children}
    </UserContext.Provider>
  );
};
