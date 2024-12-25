import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import "./index.css";
import App from "./App.tsx";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  //fontFamily: '"Courier New", Courier, monospace',
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} forceColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>
);
