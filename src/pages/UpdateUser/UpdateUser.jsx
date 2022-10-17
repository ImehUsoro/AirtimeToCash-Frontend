import React, { useEffect, useRef } from "react";
import NavBar from "../../components/navbar/NavBar";
import { BackDiv, Container, UpdateUserPageStyle } from "./UpdateUserStyles";
import logo from "../../assets/updateLogo.svg";
import { useState } from "react";
import { useAuth } from "../../context/auth/authState";
import AvatarModal from "../../components/avatar-modal/AvatarModal";

const UpdateUser = () => {
  const { user, updateUserInfo, modal, setModal, disabled, setDisabled } =
    useAuth();
  const [userInfo, setUserInfo] = useState(user);

  const wrapperRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setModal(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserInfo(userInfo);
  };

  useEffect(() => {
    if (
      userInfo.firstName &&
      userInfo.lastName &&
      userInfo.email &&
      userInfo.phoneNumber &&
      userInfo.username
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userInfo]);
  return (
    <UpdateUserPageStyle modalOn={modal ? true : false}>
      <NavBar dashboard updateUser />
      <BackDiv />
      <Container>
        <div className="container">
          <img src={logo} alt="logo" className="logo" />

          <h2 className="header-text">Basic Information</h2>

          <form action="" className="form-group" onSubmit={handleSubmit}>
            <div className="input-element">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={userInfo.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input-element">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="input-element">
              <label htmlFor="">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={userInfo.username}
                onChange={handleChange}
              />
            </div>
            <div className="input-element">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={userInfo.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="input-element">
              <label htmlFor="">Avatar</label>
              <input
                type="button"
                placeholder="Email"
                value={"Upload Photo"}
                className="avatar-upload"
                onClick={() => {
                  setModal(true);
                }}
              />
            </div>

            <button type="submit" className="save-btn" disabled={disabled}>
              Save
            </button>
          </form>
        </div>
        {modal && <AvatarModal />}
      </Container>
    </UpdateUserPageStyle>
  );
};

export default UpdateUser;
