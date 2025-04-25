import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import { RouterComponent } from "./router/app-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterComponent />
  </StrictMode>
);
