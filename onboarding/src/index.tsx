import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Creating a root to render the application
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// Rendering the App component wrapped in React Strict Mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
