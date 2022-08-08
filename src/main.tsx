import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.scss";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
