/* istanbul ignore file */

import { Route, Routes, Navigate } from "react-router-dom";
import AppPage from "@/pages/app/app";

export function AppRoutes() {
  return (
    <Routes>
      <Route key="not-found" path="*" element={<div>404</div>} />
      <Route key="default" path="/?" element={<Navigate to="/app" replace />} />
      <Route key="home" path="/app" element={<AppPage />} />
    </Routes>
  );
}
