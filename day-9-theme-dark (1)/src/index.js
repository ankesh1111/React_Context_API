import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AppContextProvider from "./Components/AppContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
