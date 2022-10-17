import styled, { css } from "styled-components";

export const BackDiv = styled.div`
  width: 100%;
  height: 271px;
  background: rgba(222, 61, 109, 0.1);
`;

export const Container = styled.div`
  width: 640px;
  height: 800px;
  margin: -12rem auto 15.75rem auto;
  z-index: 1;
  background-color: white;
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

  button:disabled,
  button[disabled] {
    cursor: not-allowed;
    background-image: linear-gradient(to right, #eb8ba7 80%, #fac2a6 100%);
  }

  p {
    margin: 0;
    padding: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }

  label {
    color: #21334f;
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .form-group input {
    padding: 1rem;
    outline: none;
    border: 1px solid #d9d9d9;
    margin-bottom: 1rem;
  }

  input::placeholder {
    color: #c4c4c4;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 320px;
  }

  .logo {
    margin: 3.75rem 0;
  }

  .header-text {
    font-weight: 700;
    color: #21334f;
    margin-bottom: 2.5rem;
  }

  .input-element {
    display: flex;
    flex-direction: column;
  }

  .form-group {
    align-self: flex-start;
    width: 100%;
  }

  .save-btn {
    margin-top: 1rem;
    color: #ffffff;
    padding: 1rem 5.25rem;
    background-image: linear-gradient(to right, #de3d6d 80%, #f5844c 100%);
  }

  .avatar-upload {
    cursor: pointer;
    background-color: #f7b593;
  }

  @media (max-width: 640px) {
    width: 100%;
  }

  @media (max-width: 340px) {
    .container {
      width: 200px;
    }
    .logo {
      width: 200px;
    }
  }
`;

export const UpdateUserPageStyle = styled.div`
  display: relative;
  background-color: #e5e5e5;
  height: auto;
  border: 1px solid transparent;

  ${(props) =>
    props.modalOn &&
    css`
      overflow: hidden;
      height: 100vh;
    `}

  @media (max-height: 1200px) {
  }
`;

