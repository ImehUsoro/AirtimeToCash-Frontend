import styled from "styled-components";

export const ManageBankAccountFormStyle = styled.div`
  margin-bottom: 2.5rem;
  width: 100%;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  h2 {
    padding: 0;
    margin: 0;
  }

  h5 {
    padding: 0;
    margin: 0;
  }

  .heading-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.75rem;
  }

  .main-dash-heading {
    font-weight: 600;
    font-size: 1.5rem;
    color: #012a4a;
  }

  .secondary-text {
    font-size: 14px;
    color: #de3d6d;
    cursor: pointer;
    font-weight: 400;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .entry-details {
    display: flex;
    flex-direction: column;
  }

  .entry-details input {
    padding: 1rem;
    outline: none;
    border: 1px solid #e5e5e5;
  }

  .entry-details label {
    font-size: 14px;
    margin-bottom: 0.5rem;
    color: #012a4a;
  }

  .add-bank-btn {
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

  button:disabled,
  button[disabled] {
    cursor: not-allowed;
    background-image: linear-gradient(to right, #eb8ba7 80%, #fac2a6 100%);
  }

  @media screen and (max-width: 480px) {
    .heading-container {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      margin-bottom: 3.75rem;
    }
    .main-dash-heading {
      font-weight: 600;
      font-size: 1.3rem;
      color: #012a4a;
    }
  }
`;
