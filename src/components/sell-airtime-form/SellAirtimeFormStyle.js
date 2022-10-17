import styled from "styled-components";

export const SellAirtimeFormStyle = styled.div`
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  button:disabled,
  button[disabled] {
    cursor: not-allowed;
    background-image: linear-gradient(to right, #eb8ba7 80%, #fac2a6 100%);
  }

  .sell-airtime-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 9%;
    background: #ffffff;
    border: 1px solid #d9d9d9;
  }

  .dashboard-text {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 600;
    color: #012a4a;
    margin-bottom: 10%;
  }

  .wallet-balance {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    background: #de3d6d;
    border-radius: 1.5em;
    margin-bottom: 6%;
  }

  #wallet-text {
    font-family: var(--font-family);
    color: #ffffff;
    margin-bottom: 3%;
  }

  #wallet-number {
    font-family: var(--font-family);
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 1%;
  }

  #wallet-div {
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.04);
    border-radius: 100px;
    padding: 1%;
    opacity: 0.8;
  }

  #wallet-div p {
    color: #ffffff;
    font-size: 70%;
  }

  .sell-airtime-container ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 6%;
    list-style: none;
  }

  .sell-airtime-container li {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    color: #012a4a;
    font-size: 90%;
  }

  .sell-airtime-container li::before {
    width: 100%;
  }

  .sell-airtime-container li:hover {
    text-decoration: underline solid #de3d6d 9.4%;
    text-underline-offset: 35%;
    cursor: pointer;
  }

  h4 {
    width: 100%;
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 600;
    color: #012a4a;
    margin-bottom: 6%;
    font-size: 90%;
  }

  form {
    user-select: none;
  }

  form input {
    width: 100%;
    border: 1px solid #d9d9d9;
    padding: 2.3%;
    margin-top: 2%;
    margin-bottom: 3%;
    outline: none;
  }

  form label {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    color: #012a4a;
    font-size: 90%;
  }

  .input-btn {
    width: 35%;
    background: linear-gradient(92.1deg, #de3d6d 55.67%, #f5844c 101.51%);
    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  .solid-input {
    background: rgba(0, 0, 0, 0.04);
    border: none;
  }

  ::placeholder {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    color: #c4c4c4;
  }

  ::-webkit-input-placeholder {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    color: #c4c4c4;
  }

  .sell-airtime-btn {
    background: none;
    color: #ffffff;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    padding: 3% 11%;
    font-size: 12px;
    font-weight: 600;
    align-self: start;
    background-image: linear-gradient(to right, #de3d6d 80%, #f5844c 100%);
  }

  #destination {
    margin-bottom: 0;
  }

  .send-message {
    color: #4285f4;
    font-size: 14px;
    font-weight: 400;
    margin-top: 1.4%;
    margin-bottom: 6.98%;
  }
  .ussd-input-container {
    display: flex;
    align-items: center;
    /* border: 1px solid #d9d9d9; */
    padding: 2.3%;
    margin-top: 2%;
    margin-bottom: 3%;
    background: #f5f5f5;
  }
  .ussd-input-container input {
    background: #f5f5f5;
    border: none;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
    outline: none;
  }

  .copy-to-clipboard {
    position: relative;
    cursor: pointer;
    /* color: #de3d6d; */
    color: #f5844c;
  }
  .copy-to-clipboard:active {
    opacity: 0.6;
  }
  .copy-modal {
    position: absolute;
    top: -40px;
    left: -30px;
    background-color: #d9d9d9;
    /* background-color: green; */
    padding: 5px 10px;
    border-radius: 10px;
    color: green;
    /* color: #d9d9d9; */
  }
`;
