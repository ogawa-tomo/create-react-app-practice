import React, { FC, useContext } from "react";
import { LogginFlagContext } from "./providers/LogginFlagProvider";
import "./LogginButton.css";

export const LogginButton: FC = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LogginFlagContext);

  return (
    <div className="button">
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "ログアウト" : "ログイン"}
      </button>
    </div>
  );
};
