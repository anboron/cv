import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import "overlayscrollbars/overlayscrollbars.css";
import "@/assets/styles/global.css";
import { AppRoutes } from "@/routes";
import ColorProvider from "@/components/color-provider";
import "./i18n.ts";

function Application() {
  return (
    <ColorProvider>
      <BrowserRouter>
        <div>
          <AppRoutes />
        </div>
      </BrowserRouter>
    </ColorProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
);
