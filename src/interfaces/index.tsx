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
  sensor_id: number;
  user_id: number;
  name: string;
  index: string;
  type: string;
  search_function_name: number;
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
  logout: () => void;
}

export interface UserContextProps {
  children: ReactNode;
}



