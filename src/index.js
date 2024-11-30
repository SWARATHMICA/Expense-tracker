import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./index.css";
import App from "./App";

// Select the root element
const rootElement = document.getElementById("root");

// Create a root and render the application
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
