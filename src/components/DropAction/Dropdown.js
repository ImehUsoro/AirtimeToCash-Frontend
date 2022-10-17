import { useState } from "react";
import styled from "styled-components";
import Menu from "../../assets/Menu.svg";
import { useAuth } from "../../context/auth/authState";

import { EditStyles, CancelStyles } from "./DropdownStyles";

const DropDownContainer = styled("div")`
  position: relative;
  cursor: pointer;

  img:hover {
    width: 25%;
    opacity: 0.5;
    transition: all 0.1s ease;
  }
`;
const ActionModalUpdate = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  width: 215px;
  height: 100px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px -2px rgba(33, 33, 33, 0.1),
    0px 2px 4px -2px rgba(33, 33, 33, 0.06);
  z-index: 900;
  margin-left: -119px;
  position: absolute;
  li {
    list-style: none;
    padding: 6%;
    padding-left: 10%;
    font-family: "Inter";
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: left;
    /* line-height: 20px; */
    /* color: #212121; */
  }
  li:hover {
    background: #e5e5e5;
  }
`;
const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const Dropdown = ({ toogleModal, transaction }) => {
  const { setCurrentTransaction, cancelUserTransaction, sendOTP } = useAuth();

  const [show, setShow] = useState(false);
  //Handle clicks
  const hideNotification = () => {
    setShow(false);
  };
  return (
    <DropDownContainer onClick={() => setShow(!show)}>
      {
        <img
          src={Menu}
          alt="img"
          style={{ marginTop: "-10px", color: "#000000" }}
        ></img>
      }
      {show && (
        <>
          <ActionModalUpdate>
            <EditStyles
              onClick={() => {
                setCurrentTransaction(transaction);
                sendOTP();
                toogleModal();
              }}
            >
              Edit
            </EditStyles>
            <CancelStyles
              onClick={() => {
                // setCurrentTransaction(transaction);
                cancelUserTransaction(transaction.id);
              }}
            >
              Cancel
            </CancelStyles>
          </ActionModalUpdate>
          <OverlayModal onClick={hideNotification} />
        </>
      )}
    </DropDownContainer>
  );
};
export default Dropdown;

// currentTransation, setCurrentTransation
