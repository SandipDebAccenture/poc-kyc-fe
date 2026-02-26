import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiClient } from "../lib/axios";
import toast from "react-hot-toast";
import "../styles/DashboardPage.scss";

const statusColors: Record<string, string> = {
  Pending: "warning",
  Rejected: "error",
  Verified: "success",
  "NOT STARTED": "neutral",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [onboardingStatus, setOnboardingStatus] =
    useState<string>("NOT STARTED");
  const [kycStatus, setKycStatus] = useState<string>("NOT STARTED");

  const userInfo: string | null = localStorage.getItem("user_info");
  const onboardingInfo: string | null = localStorage.getItem("onboarding_info");
  const username: string = userInfo ? JSON.parse(userInfo).username : "User";
  const userId: string = userInfo ? JSON.parse(userInfo).userId : null;
  const customerId: number | null = onboardingInfo
    ? JSON.parse(onboardingInfo).customerId
    : null;

  const isKycVerifyDisabled = !userId && !customerId;

  useEffect(() => {
    if (!customerId) return;

    const fetchStatus = async () => {
      setLoading(true);
      try {
        const [onboardingRes, kycRes] = await Promise.all([
          apiClient.get(`/api/onboarding/status/${customerId}`),
          apiClient.get(`/api/kyc/status/${customerId}`),
        ]);

        setOnboardingStatus(onboardingRes.data.status || "NOT STARTED");
        setKycStatus(kycRes.data.status || "NOT STARTED");
      } catch (err) {
        toast.error("Failed to fetch status. Please try again later.", {
          duration: 3000,
        });
        console.error("Status fetch error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, [customerId]);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="dashboard">
      <div className="dashboard__card">
        <div className="dashboard__header">
          Welcome, <span>{username}</span>
        </div>

        <div className="dashboard__status">
          <div className="status-item">
            <span>Onboarding Status:</span>
            {loading ? (
              <span className="loading">Loading...</span>
            ) : (
              <span className={`badge ${statusColors[onboardingStatus]}`}>
                {onboardingStatus}
              </span>
            )}
          </div>

          <div className="status-item">
            <span>KYC Status:</span>
            {loading ? (
              <span className="loading">Loading...</span>
            ) : (
              <span className={`badge ${statusColors[kycStatus]}`}>
                {kycStatus}
              </span>
            )}
          </div>
        </div>

        <div className="dashboard__actions">
          <button
            className="btn primary"
            onClick={() => handleNavigate("/kyc-registration")}>
            Complete Onboarding
          </button>

          <button
            className="btn secondary"
            onClick={() => handleNavigate("/kyc-verify")}
            disabled={isKycVerifyDisabled}>
            Verify KYC
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
