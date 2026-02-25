import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import KycRegistrationPage from "./pages/KycRegistrationPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<KycRegistrationPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
