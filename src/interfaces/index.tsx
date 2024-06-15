import { ReactNode } from "react";
import { User } from "firebase/auth";

export interface UserContextI {
  user: User | null;
  updateUser: (updateUser: User | null) => void;
}

export interface UserContextProps {
  children: ReactNode;
}



