import React, { FC } from "react";
import { useLogginFlag } from "./providers/LogginFlagProvider";
import "./LogginButton.css";

export const LogginButton: FC = () => {
  const { isLoggedIn, setIsLoggedIn } = useLogginFlag();

  return (
    <div className="button">
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "ログアウト" : "ログイン"}
      </button>
    </div>
  );
};
