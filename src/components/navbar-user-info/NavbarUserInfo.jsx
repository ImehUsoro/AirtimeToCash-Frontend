import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/auth/authState";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiLoginCircleLine,
} from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NavbarUserInfo = ({
  landingPage,
  updateUser,
  adminDashboard,
  setAdminPage,
}) => {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const { user, setModal, logout } = useAuth();
  const navigate = useNavigate();

  const wrapperRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropMenu(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef);

  return (
    <div className="user-info-container">
      <img
        src={user?.avatar}
        alt=""
        className="user-avatar"
        onClick={() => setModal(true)}
      />
      <span className="name">{user?.firstName}</span>
      <div className="drop">
        {showDropMenu ? (
          <RiArrowDropUpLine
            size={"24px"}
            onClick={() => setShowDropMenu(false)}
            className="drop-icon"
          />
        ) : (
          <RiArrowDropDownLine
            size={"24px"}
            onClick={() => setShowDropMenu(true)}
            className="drop-icon"
          />
        )}
        {showDropMenu && (
          <div className="drop-menu" ref={wrapperRef}>
            {!updateUser && !adminDashboard && !setAdminPage && (
              <div
                className="drop-item"
                onClick={() => navigate("/user/dashboard/update-user")}
              >
                <BsPerson size={"24px"} />
                <p>Account</p>
              </div>
            )}
            {(landingPage || updateUser) && (
              <div
                className="drop-item"
                onClick={() => {
                  if (user?.role === "admin") {
                    navigate("/admin/dashboard");
                  } else {
                    navigate("/user/dashboard");
                  }
                }}
              >
                <MdOutlineSpaceDashboard size={"24px"} />
                <p>Dashboard</p>
              </div>
            )}
            {adminDashboard && (
              <div
                className="drop-item"
                onClick={() => navigate("/user/setadmin")}
              >
                <MdOutlineSpaceDashboard size={"24px"} />
                <p>Create Admin</p>
              </div>
            )}
            {setAdminPage && (
              <div
                className="drop-item"
                onClick={() => navigate("/admin/dashboard")}
              >
                <MdOutlineSpaceDashboard size={"24px"} />
                <p>Admin Dashboard</p>
              </div>
            )}
            <div className="drop-item" onClick={() => logout()}>
              <RiLoginCircleLine size={"24px"} />
              <p>Logout</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarUserInfo;
