import React, { useEffect, useRef } from "react";
import { SuccessModalStyle } from "./SuccessModalStyle";
import logo from "../../assets/bank-success.png";
import { useAuth } from "../../context/auth/authState";

const SuccessModal = () => {
  const { setSuccessModal, setAddBankState } = useAuth();

  const wrapperRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSuccessModal(false);
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
    <SuccessModalStyle>
      <div className="modal-content" ref={wrapperRef}>
        <img src={logo} alt="success" />
        <h2 className="main-txt">Account Successfully Added</h2>
        <p className="second-text">
          Your bank account has been added successfully
        </p>
        <button
          className="done-btn"
          onClick={(e) => {
            e.preventDefault();
            setSuccessModal(false);
            setAddBankState(false);
          }}
        >
          Done
        </button>
      </div>
    </SuccessModalStyle>
  );
};

export default SuccessModal;
