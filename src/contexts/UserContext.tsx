import React from 'react';
import { UserContextI, UserContextProps } from '../interfaces/';
import { app } from '../config/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { User } from 'firebase/auth';


const initialUserContext: UserContextI = {
  user: null,
  updateUser: (updatedUser: User | null) => { }
};

export const UserContext = React.createContext<UserContextI>(initialUserContext);


export const UserProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = React.useState<User | null>(initialUserContext.user);

  React.useEffect(() => {
    console.log('api get_logged_user')
  }, []);

  React.useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      setUser(user)
    });
  }, []);

  const updateUser = (updatedUser: User | null) => {
    setUser(updatedUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
