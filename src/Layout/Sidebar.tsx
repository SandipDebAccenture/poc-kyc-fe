import React from "react";
import { NavLink } from "react-router";
import "../styles/Layout.scss";

const sidebarLinks = [
  { name: "Dashboard", path: "/" },
  { name: "KYC Registration", path: "/kyc-registration" },
  { name: "KYC Verification", path: "/kyc-verify" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="app-sidebar">
      <nav>
        <ul>
          {sidebarLinks.map((link) => (
            <li key={`sidebar-link-${link.path}`}>
              <NavLink to={link.path} end>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
