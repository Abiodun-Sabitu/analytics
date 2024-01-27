import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
// Supports weights 200-800
import "@fontsource-variable/plus-jakarta-sans";
import theme from "./utils/theme.js";
import ApplicationRoutes from "./routes.jsx";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ApplicationRoutes />
    </ChakraProvider>
  </React.StrictMode>
);
