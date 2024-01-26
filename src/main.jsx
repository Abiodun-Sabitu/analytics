import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// Supports weights 200-800
import "@fontsource-variable/plus-jakarta-sans";
import theme from "./utils/theme.js";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
