import React, { useEffect, useState } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GrClose, GrTransaction } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { SideBarStyle } from "../Layout/LayoutStyles";
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  //  const [isMobile, setIsMobile] = useState(false)
  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  const menuItem = [
    {
      path: "/admin/",
      name: "Overview",
      icon: <MdOutlineDashboardCustomize />,
    },
    {
      path: "/admin/transactions",
      name: "Transactions",
      icon: <GrTransaction />,
    },
  ];
  return (
    <SideBarStyle>
      {/* SIDE BAR */}
      <div className="container">
        <div style={{ width: isOpen ? "402px" : "50px" }} className="sidebar">
          <div className="top_section">
            <div className="bars">
              {!isOpen && <FaBars onClick={toggle} />}
              {isOpen && <GrClose onClick={toggle} />}
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
              end
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </SideBarStyle>
  );
};
export default Layout;
