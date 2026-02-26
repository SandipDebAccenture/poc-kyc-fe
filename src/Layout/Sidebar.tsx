import React from "react";
import { NavLink, useNavigate } from "react-router";
import "../styles/Layout.scss";

const sidebarLinks = [
  { name: "Dashboard", path: "/" },
  { name: "KYC Registration", path: "/kyc-registration" },
  { name: "KYC Verification", path: "/kyc-verify" },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const userInfo: string | null = localStorage.getItem("user_info");
  const userId: string = userInfo ? JSON.parse(userInfo).userId : null;

  const isKycVerifyDisabled = !userId;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    <aside className="app-sidebar">
      <nav className="sidebar-nav">
        <ul>
          {sidebarLinks.map((link) => {
            const isDisabled =
              link.path === "/kyc-verify" && isKycVerifyDisabled;

            return (
              <li key={`sidebar-link-${link.path}`}>
                {isDisabled ? (
                  <span
                    className="nav-link-disabled"
                    title="Complete KYC Registration first">
                    {link.name}
                  </span>
                ) : (
                  <NavLink to={link.path} end>
                    {link.name}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
        <button className="btn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
