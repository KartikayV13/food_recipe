import React from "react";
import "../Styles/Sidebar.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ links, close }) => {
  const location = useLocation();

  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => (
        <Link
          to={link.path}
          className={
            location.pathname === link.path
              ? "sidebar-link active"
              : "sidebar-link"
          }
          key={link.name}
        >
          <span className="sidebar-icons"> {link.icon} </span>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
