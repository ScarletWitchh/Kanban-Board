import { ReactNode } from "react";

export interface CardProps {
  userImage?: string;
  title: string;
  about: ReactNode;
  status: ReactNode;
}
