import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./config/customTheme";
import "./styles.css";
import Contacts from "./pages/Contacts/Contacts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={customTheme}>
    <Contacts />
  </ThemeProvider>
);
