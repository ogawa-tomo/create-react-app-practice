import React, { FC } from "react";
import { useLoginState } from "./providers/LoginStateProvider";
import "./LoginButton.css";

export const LoginButton: FC = () => {
  const { isLoggedIn, setIsLoggedIn } = useLoginState();

  return (
    <div className="button">
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "ログアウト" : "ログイン"}
      </button>
    </div>
  );
};
