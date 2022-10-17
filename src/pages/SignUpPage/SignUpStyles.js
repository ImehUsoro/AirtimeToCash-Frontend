import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const RegistrationPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;

  ${(props) =>
    props.signup &&
    css`
      height: auto;
    `}
  ${(props) =>
    props.forgotPassword &&
    css`
      height: 100vh;
    `}
`;

export const FormContainerStyle = styled.div`
  background-color: #ffffff;
  margin-top: 10%;
  margin-bottom: 10%;
  width: 745px;
  height: 1128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ${(props) =>
    props.login &&
    css`
      height: 626px;
      padding-bottom: 5rem;
    `}

  ${(props) =>
    props.forgotPassword &&
    css`
      height: 527px;
    `}

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

  button:disabled,
  button[disabled] {
    cursor: not-allowed;
    background-image: linear-gradient(to right, #eb8ba7 80%, #fac2a6 100%);
  }

  img {
    margin-top: 80px;
    background-color: white;
  }
  h2 {
    padding: 0;
    margin: 0;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 320px;
  }
  .logo {
    width: 151px;
    cursor: pointer;
  }

  .go-back {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: 40px;
    align-self: flex-start;
    background-color: #0000000d;
    padding: 0.5rem;
    border-radius: 50px;
    color: #21334f;
  }

  .go-back button {
    font-size: 12px;
  }

  .create-text {
    color: #21334f;
    font-weight: 700;
    font-size: 18px;
    margin-top: 40px;
    align-self: flex-start;
  }

  form {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .form-group div {
    display: flex;
    flex-direction: column;
  }

  input {
    outline: none;
    align-self: stretch;
    padding: 1rem;
    border: 1px solid #d9d9d9;
  }
  input::placeholder {
    color: #c4c4c4;
  }

  label {
    font-size: 12px;
    color: #21334f;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .sign-up-btn {
    padding: 1rem;
    color: #ffffff;
    background-image: linear-gradient(to right, #de3d6d 80%, #f5844c 100%);
    font-size: 12px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    margin-top: 24px;
  }

  .sign-up-btn:hover {
    opacity: 0.8;
  }
  .sign-up-btn:active {
    opacity: 0.6;
  }

  .sign-in-text {
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: #21334f;
    margin-top: 40px;
  }
  .loading {
    margin-top: 3%;
    align-self: center;
    /* border: 16px solid #f3f3f3; */
  }

  @media (max-width: 745px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 450px;
  }
  @media (max-width: 450px) {
    width: 340px;
  }
  @media (max-width: 340px) {
    width: 280px;

    .container {
      width: 250px;
    }
  }
`;

export const SignUpLink = styled(Link)`
  text-decoration: none;
  color: #de3d6d;
`;

export const ForgotLink = styled(Link)`
  text-decoration: none;
  color: #4285f4;
  margin-top: 0.5rem;
`;
