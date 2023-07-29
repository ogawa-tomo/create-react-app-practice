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

const LoginStateContext = createContext<LoginDataType>({} as LoginDataType);

export const LoginStateProvider: FC<Props> = (props) => {
  const { children } = props;

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <LoginStateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginStateContext.Provider>
  );
};

export const useLoginState = () => useContext(LoginStateContext);
