import React, { useEffect, useRef } from "react";
import { useAuth } from "../../context/auth/authState";

import { FaTimes } from "react-icons/fa";
import logo from "../../assets/updateLogo.svg";
import { ModalStyle } from "./AvatarModalStyle";

const AvatarModal = () => {
  const { user, updateUserAvatar, setModal } = useAuth();

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

  const handleAvatarChange = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];

    const url =
      "https://api.cloudinary.com/v1_1/airtime-to-cash-podg/image/upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "buoutynp");
    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.secure_url !== "") {
          return data.secure_url;
        }
      })
      .then((res) => {
        updateUserAvatar(res, user);
        setModal(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <ModalStyle>
      <div className="modal-content" ref={wrapperRef}>
        <div
          className="close-btn"
          onClick={() => {
            setModal(false);
          }}
        >
          <FaTimes />
        </div>
        <img src={logo} alt="logo" className="modal-logo" />
        <img src={user.avatar} alt="" className="user-avatar" />
        <div className="upload-section">
          <h3>Upload a Photo</h3>
          <form
            onSubmit={handleUpload}
            name="file_upload[]"
            className="modal-form"
          >
            <input
              type="file"
              name=""
              id=""
              className="modal-input"
              onChange={handleAvatarChange}
            />
            <p className="allowed-text">
              *Allowed formats: jpeg, jpg, png and svg*{" "}
            </p>
            <button type="submit" className="save-btn-modal">
              Add Photo
            </button>
          </form>
        </div>
      </div>
    </ModalStyle>
  );
};

export default AvatarModal;
