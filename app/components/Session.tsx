"use client";

import { FC, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type SessionProps = {
  children: ReactNode;
};

const Session: FC<SessionProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Session;
