import { useNavigate } from "react-router";
import "../styles/DashboardPage.scss";

const statusColors: Record<string, string> = {
  Pending: "warning",
  Rejected: "error",
  Verified: "success",
  "NOT STARTED": "neutral",
};

const onboardingStatus: string = "NOT STARTED";
const kycStatus: string = "NOT STARTED";

const Dashboard = () => {
  const navigate = useNavigate();
  const userInfo: string | null = localStorage.getItem("user_info");
  const username: string = userInfo ? JSON.parse(userInfo).username : "User";
  const userId: string = userInfo ? JSON.parse(userInfo).userId : null;

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
            <span className={`badge ${statusColors[onboardingStatus]}`}>
              {onboardingStatus}
            </span>
          </div>

          <div className="status-item">
            <span>KYC Status:</span>
            <span className={`badge ${statusColors[kycStatus]}`}>
              {kycStatus}
            </span>
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
            disabled={!userId}>
            Verify KYC
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
