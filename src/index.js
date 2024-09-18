import React from "react";
import { createRoot } from "react-dom/client";
import { init } from "zipyai";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

if (process.env.REACT_APP_ZIPY_KEY) {
  init(process.env.REACT_APP_ZIPY_KEY);
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



reportWebVitals();
