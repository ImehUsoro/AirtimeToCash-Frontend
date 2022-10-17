import styled from "styled-components";

export const WithdrawBalanceFormStyle = styled.div`
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

  .select-wrapper {
    height: 50px;
    overflow-y: visible;
  }
  .select {
    width: 100%;
    min-height: 50px;
    padding: 10px;
    margin-bottom: 15px;
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

  form input {
    width: 100%;
    border: 1px solid #d9d9d9;
    padding: 3%;
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

  .solid-input {
    background: rgba(0, 0, 0, 0.04);
    border: none;
  }

  .withdraw-btn {
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
    margin-top: 1.5rem;
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

  #destination {
    margin-bottom: 6%;
  }
`;
