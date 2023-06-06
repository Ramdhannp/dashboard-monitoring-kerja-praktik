import "../css/sidebar.css";
import { useState, useEffect } from "react";
import { SidebarData } from "../Data/SidebarData";

function Sidebar() {
  const [isContainerActive, setIsContainerActive] = useState(true);

  const openSidebar = () => {
    setIsContainerActive(!isContainerActive);
    document.documentElement.classList.toggle("aside-mobile-expanded");
  };

  let title = [];

  SidebarData.forEach((val) => {
    if (window.location.pathname === val.link) {
      title.push(val.title);
    }
  });
  useEffect(() => {
    document.title = title;
  });

  return (
    <div>
      <div id="navbar-main" class="navbar fixed-top">
        <div class="navbar-brand">
          <div onClick={openSidebar} className="mobile-aside-button">
            <i
              className={`${
                isContainerActive ? "bx bx-menu" : "bx bx-menu-alt-right"
              }`}
              id="btn"
            ></i>
          </div>
          <div>
            <h3>{title}</h3>
          </div>
          <div class="navbar-brand is-right"></div>
        </div>
      </div>

      <div className="aside is-placed-left is-expanded">
        <div className="logo-details">
          <i className="">
            <img alt="" />
          </i>
          <div className="logo_name">
            Monitoring <br /> Kerja Praktik
          </div>
        </div>
        <ul className="nav-list">
          {SidebarData.map((val, key) => (
            <li
              key={key}
              className="side-name"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {val.icon}
              <span className="links_name">{val.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
