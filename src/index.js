import React from "react";

import { createRoot } from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "@mui/material";

createRoot(document.getElementById("root")).render(<App />);
