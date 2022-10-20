import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import themes from "./themes/themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
