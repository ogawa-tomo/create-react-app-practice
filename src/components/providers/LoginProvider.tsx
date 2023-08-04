import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type LoginDataType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
};

const LoginContext = createContext<LoginDataType>({} as LoginDataType);

export const LoginProvider: FC<Props> = (props) => {
  const { children } = props;

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
