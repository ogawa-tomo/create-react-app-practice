import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoginStateProvider } from "./components/providers/LoginStateProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <LoginStateProvider>
      <App />
    </LoginStateProvider>
  </React.StrictMode>,
);
