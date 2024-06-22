import { ReactNode } from "react";

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  profile_pic: string;
  uid: string;
}

export interface Chart {
  id: number;
  sensorId: number;
  userId: number;
  name: string;
  index: string;
  type: string;
  search_function_name: string;
}

export interface Sensor {
  id: number;
  name: string;
  user_id: number;
}

export interface UserContextI {
  user: IUser | null;
  charts: Chart[];
  sensors: Sensor[];
  loaded: boolean;
  logout: () => void;
  getChart: (id: number) => Chart | null;
  getChartData: (chart: Chart, date: string) => any;
  createChart: (newChart: Chart) => Promise<Chart>;
  createSensor: (newSensor: Sensor) => Promise<Sensor>;
}

export interface UserContextProps {
  children: ReactNode;
}



