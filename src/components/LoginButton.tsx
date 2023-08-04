import React, { FC } from "react";
import { useLogin } from "./providers/LoginProvider";
import "./LoginButton.css";

export const LoginButton: FC = () => {
  const { isLoggedIn, setIsLoggedIn } = useLogin();

  return (
    <div className="button">
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "ログアウト" : "ログイン"}
      </button>
    </div>
  );
};
