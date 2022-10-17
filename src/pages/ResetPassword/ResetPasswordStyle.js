import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResetPasswordPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #e5e5e5;
`;

export const RestFormContainer = styled.div`
  height: 527px;
  width: 860px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 860px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 330px;
  }

  @media (max-width: 330px) {
    width: 250px;
  }
`;

export const ResetContent = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

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

  .logo-and-text {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
  }

  h2 {
    margin: 0;
    align-self: flex-start;
    margin-bottom: 2.5rem;
    color: #21334f;
    font-size: 1.125rem;
    font-weight: 700;
    color: #21334f;
  }

  label {
    font-size: 0.75rem;
    color: #21334f;
    margin-bottom: 0.5rem;
  }

  input {
    outline: none;
    padding: 1rem;
    font-size: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #d9d9d9;
  }

  .logo-and-text p {
    color: #de3d6d;
    font-weight: 700;
  }

  .logo-and-text span {
    color: #f5844c;
    font-weight: 700;
  }

  form {
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  .inputs-container {
    display: flex;
    flex-direction: column;
  }
  .reset-password-btn {
    margin-top: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    padding: 1rem 1.5rem;
    background-image: linear-gradient(to right, #de3d6d 80%, #f5844c 100%);
    text-align: center;
    margin-top: 1.5rem;
    justify-self: center;
  }

  @media (max-width: 330px) {
    width: 200px;
  }
`;

export const HeaderLink = styled(Link)`
  margin-top: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  padding: 1rem 1.5rem;
  background-image: linear-gradient(to right, #de3d6d 80%, #f5844c 100%);
  text-align: center;
  margin-top: 1.5rem;
  justify-self: center;
`;
