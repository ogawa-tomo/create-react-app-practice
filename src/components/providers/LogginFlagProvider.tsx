import React, { createContext, FC, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

type LoggedIn = {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
};

export const LogginFlagContext = createContext<LoggedIn>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const LogginFlagProvider: FC<Props> = (props) => {
  const { children } = props;

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <LogginFlagContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LogginFlagContext.Provider>
  );
};
