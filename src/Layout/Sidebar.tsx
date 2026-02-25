import React from "react";
import { NavLink } from "react-router";
import "../styles/Layout.scss";

const Sidebar: React.FC = () => {
  return (
    <aside className="app-sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              KYC Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
