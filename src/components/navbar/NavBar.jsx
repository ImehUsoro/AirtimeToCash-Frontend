import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import React, { useEffect, useRef, useState } from "react";
import { NavBarStyles } from "./NavbarStyles";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/authState";
import NavbarUserInfo from "../navbar-user-info/NavbarUserInfo";

const NavBar = ({
  dashboard,
  landingPage,
  updateUser,
  adminDashboard,
  setAdminPage,
}) => {
  const { user } = useAuth();
  const [showDropMenu, setShowDropMenu] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const falseHandler = () => {
    setToggleMenu(false);
  };

  const trueHandler = () => {
    setToggleMenu(true);
  };

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
    <NavBarStyles>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} alt="Airime to Cash Logo" />
          </Link>
        </div>
        {!dashboard && (
          <div className="navbar-links">
            <p>
              <span className="home-text">Home</span>
            </p>
            <p>
              <a href="#about-us">About Us</a>
            </p>
            <p>Products</p>
            <p>Contact Us</p>

            {user ? (
              <NavbarUserInfo landingPage={landingPage} />
            ) : (
              <Link to="/user/login">
                <button className="login-button">Login</button>
              </Link>
            )}
          </div>
        )}
        <div className="navbar-menu">
          {!dashboard ? (
            toggleMenu ? (
              <RiCloseLine color="#DE3D6D" size={27} onClick={falseHandler} />
            ) : (
              <RiMenu3Line color="#DE3D6D" size={27} onClick={trueHandler} />
            )
          ) : null}

          {!dashboard
            ? toggleMenu && (
                <div className="navbar-menu-container">
                  <div className="navbar-menu-container-links">
                    <p>
                      <a href="#home">Home</a>
                    </p>
                    <p>
                      <a href="#about-us">About Us</a>
                    </p>
                    <p>
                      <a href="#products">Products</a>
                    </p>
                    <p>
                      <a href="#contact-us">Contact Us</a>
                    </p>
                    <div className="navbar-menu-container-button">
                      <Link to="/user/login">
                        <button type="button">Login</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            : null}
        </div>
        {dashboard && (
          <NavbarUserInfo
            updateUser={updateUser}
            adminDashboard={adminDashboard}
            setAdminPage={setAdminPage}
          />
        )}
      </div>
    </NavBarStyles>
  );
};

export default NavBar;

// MdOutlineSpaceDashboard
