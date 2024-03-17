/* istanbul ignore file */

import { Route, Routes, Navigate } from "react-router-dom";
import AppPage from "@/pages/app/app";
import NotFoundPage from "@/pages/not-found/not-found";

export function AppRoutes() {
  return (
    <Routes>
      <Route key="not-found" path="*" element={<NotFoundPage />} />
      <Route key="default" path="/?" element={<Navigate to="/app" replace />} />
      <Route key="home" path="/app" element={<AppPage />} />
    </Routes>
  );
}
