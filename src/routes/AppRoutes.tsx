import { Routes, Route } from "react-router";
import ProtectedRoute from "../routes/ProtectedRoutes";
import PublicRoute from "../routes/PublicRoutes";
import Layout from "../Layout/Layout";
import AuthPage from "../pages/AuthPage";
import DashboardPage from "../pages/DashboardPage";
import KycRegistrationPage from "../pages/KycRegistrationPage";
import KycVerifyPage from "../pages/KycVerifyPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
        <Route index element={<DashboardPage />} />
        <Route path="kyc-registration" element={<KycRegistrationPage />} />
        <Route path="kyc-verify" element={<KycVerifyPage />} />
      </Route>

      {/* Public Route */}
      <Route
        path="/auth"
        element={
          <PublicRoute>
            <AuthPage />
          </PublicRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
