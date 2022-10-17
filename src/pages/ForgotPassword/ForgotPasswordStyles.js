import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ForgetPasswordPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #e5e5e5;
`;

export const ForgotPasswordForm = styled.div`
  background-color: #ffffff;
  width: 860px;
  height: 527px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

  h1,
  p,
  h2 {
    margin: 0;
  }

  input {
    outline: none;
  }
  .forgot-section {
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 25.8125rem;
  }
  .main-text {
    font-weight: 700;
    font-size: 36px;
    margin: 0;
    color: #21334f;
  }

  .forgot-section-subtext {
    font-size: 16px;
    font-weight: 400;
    margin-top: 1.5rem;
    text-align: center;
    line-height: 1.21rem;
    color: #c4c4c4;
  }

  .form-section {
    margin-top: 1.5rem;
  }

  .form-section form {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .form-section form label {
    color: #03435f;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .form-section form input {
    width: 15rem;
    padding: 0.75rem 1rem;
    border: 1px solid #03435f;
    border-radius: 0.375rem;
    color: #03435f;
  }

  .form-section form input::placeholder {
    color: #c4c4c4;
    opacity: 80%;
    font-weight: 300;
  }

  .main-text-verified {
    font-weight: 700;
    font-size: 36px;
    margin-top: 2rem;
    color: #03435f;
  }

  .text-container {
    max-width: 25rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .text-container .first {
    margin-top: 1.3125rem;
    margin-bottom: 1rem;
    color: #21334f;
  }

  .second {
    font-weight: 700;
    color: #012a4a;
  }
  .second .red-text {
    color: #df3e6e;
    cursor: pointer;
    user-select: none;
  }

  .logo-and-text {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
  }

  .text-container .second {
    font-size: 700;
  }

  .reset-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .reset-form {
    /* width: 600px; */
    /* height: 200px; */
  }
  .reset-form div {
    display: flex;
    flex-direction: column;
    /* gap: 5rem; */
  }

  .reset-btn {
    margin-top: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    padding: 1rem 1.5rem;
    border-radius: 0.375rem;
    background-image: linear-gradient(to right, #de3d6d 80%, #f5844c 100%);
    text-align: center;
  }

  .reset-btn:hover {
    opacity: 0.8;
  }

  .reset-btn:active {
    opacity: 0.6;
  }

  @media (max-width: 860px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 300px;

    .main-text {
      font-weight: 700;
      font-size: 26px;
    }
    .main-text-verified {
      font-size: 26px;
    }
  }

  @media (max-width: 300px) {
    width: 250px;
    padding: 0 2rem;

    .main-text {
      font-weight: 700;
      font-size: 20px;
    }
    .main-text-verified {
      font-size: 20px;
    }
  }
`;

export const HeaderLink = styled(Link)`
  margin-top: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  padding: 1rem 1.5rem;
  border-radius: 0.375rem;
  background-image: linear-gradient(to right, #de3d6d 80%, #f5844c 100%);
  text-align: center;

  ${(props) =>
    props.secondary &&
    css`
      margin-top: 3.125rem;
      align-self: center;
      font-weight: 500;
      padding: 1rem 1.5rem;
      background-image: none;
      background-color: #0000000f;
      color: #000000;
    `};

  ${(props) =>
    props.verify &&
    css`
      border-radius: 0px;
      padding: 1rem 3.1875rem;
      margin: 0;
    `};
`;
