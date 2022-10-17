import styled, { css } from "styled-components";

export const AdminStyles = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4.5rem;
  overflow: scroll;
  min-height: 100vh;
  z-index: -1;

  .side-nav {
    width: 23%;
    transition: width 0.2s;
    padding: 5% 2%;
    background: #ffffff;
    min-height: 100vh;
    user-select: none;
    position: relative;
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05));
  }

  .side-nav-close {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3%;
    width: 80px;
    background: #ffffff;
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05));
    padding: 6% 0;
  }

  .overview-close {
    color: #fff;
    padding: 5% 10%;
    margin-bottom: 2%;
    cursor: pointer;
  }

  .transaction-close {
    padding: 5% 10%;
    cursor: pointer;
  }

  .withdrawals-close {
    cursor: pointer;
  }

  .admin-table {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3%;
    width: 100%;
    padding-left: 8%;
    padding-right: 10%;
    position: relative;
    user-select: none;
    /* border: 1x solid red; */
  }

  .admin-table h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 100%;
    color: #012a4a;
    margin-bottom: 4%;
    text-align: center;
  }

  #overview {
    color: #000;
    display: flex;
    align-items: center;
    padding: 5% 10%;
    gap: 10%;
    transition: all 0.5s;
    margin-bottom: 2%;
    cursor: pointer;
  }

  #transaction {
    display: flex;
    align-items: center;
    color: #000;
    padding: 5% 10%;
    gap: 10%;
    margin-bottom: 2%;
    transition: all 0.5s;
    cursor: pointer;
  }

  #withdrawals {
    display: flex;
    align-items: center;
    color: #000;
    padding: 5% 10%;
    gap: 10%;
    transition: all 0.5s;
    cursor: pointer;
  }

  .overview-close {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10%;
    transition: all 0.5s;
  }

  .transaction-close {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10%;
    transition: all 0.5s;
  }

  .withdrawals-close {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10%;
    transition: all 0.5s;
  }

  @media screen and (max-width: 768px) {
    .side-nav {
      display: none;
    }

    .side-nav-close {
      display: block;
      padding: 15% 7%;
    }
  }

  @media screen and (max-width: 509px) {
    .side-nav-close {
      display: block;
      padding: 5% 4%;
    }
  }

  @media screen and (max-width: 383px) {
    .side-nav-close {
      display: block;
      padding: 5% 5%;
    }

    .admin-table h2 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 352px) {
    .transaction-close {
      margin-top: 30%;
      height: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export const TransDropDownStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5%;
  width: 50%;
  position: relative;
  left: 70px;
  transition: all 8s;
  margin-bottom: 6%;

  .droplist {
    display: flex;
    align-items: center;
    color: #000;
    padding: 5% 10%;
    gap: 10%;
    margin-bottom: 4%;
    transition: all 0.5s;
    border: 1.5px solid transparent;
    cursor: pointer;
  }

  .droplist:hover {
    border: 1.5px solid grey;
    border-radius: 5px;
    outline: none;
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05));
  }
`;

export const TransDropDownCloseStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70%;
  width: 30%;
  transition: all 8s;
  margin-bottom: 6%;

  .droplist-close {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    padding: 5% 10%;
    transition: all 0.5s;
    outline: none;
    border: 1.5px solid transparent;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .droplist-close:hover {
    border: 1.5px solid grey;
    border-radius: 5px;
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05));
  }

  @media screen and (max-width: 768px) {
  }
`;

export const AdminTableStyles = styled.div`
  width: 100%;
`;

export const SidebarButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  left: 8px;
  top: 18px;
  box-shadow: 0 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FormStyles = styled.form`
  button,
  input[type="submit"],
  input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  padding: 5% 9%;
  display: flex;
  flex-direction: column;

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #012a4a;
  }

  #amount-receive {
    background: rgba(0, 0, 0, 0.05);
    border: none;
  }

  input {
    width: 100%;
    padding: 3%;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    margin-top: 1%;
    margin-bottom: 6%;
    outline: none;
  }
  .otp {
    margin-bottom: 2%;
  }

  button {
  }

  .confirm-btn {
    width: 40%;
    background: linear-gradient(92.1deg, #de3d6d 55.67%, #f5844c 101.51%);
    border: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: #ffffff;
    padding: 3%;
    cursor: pointer;
    align-self: center;
  }

  .resend-otp {
    font-size: 12px;
    margin-bottom: 4%;
    color: #4285f4;
  }

  .resend-btn {
    text-decoration: underline;
    color: red;
  }

  .resend-btn:active {
    opacity: 0.6;
  }

  ::placeholder {
    color: #012a4a;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  }
`;
