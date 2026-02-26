import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import KycRegistrationPage from "./pages/KycRegistrationPage";
import KycVerifyPage from "./pages/KycVerifyPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="kyc-registration" element={<KycRegistrationPage />} />
          <Route path="kyc-verify" element={<KycVerifyPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
