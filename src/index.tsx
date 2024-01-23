import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode, Suspense } from "react";
import { kcContext } from "./KcApp/kcContext";
import { ThemeProvider, agronodTheme } from "@agronod/mui-components";
import { App } from "App";
import KcApp from "KcApp/KcApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense>
      <ThemeProvider options={agronodTheme}>
        {kcContext === undefined ? <App /> : <KcApp kcContext={kcContext} />}
      </ThemeProvider>
    </Suspense>
  </StrictMode>
);
