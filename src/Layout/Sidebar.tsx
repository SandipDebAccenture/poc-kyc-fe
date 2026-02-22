import React from "react";
import { NavLink } from "react-router";
import "./Layout.scss";

const Sidebar: React.FC = () => {
  return (
    <aside className="app-sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
