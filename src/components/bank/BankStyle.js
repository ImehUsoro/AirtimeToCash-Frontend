import styled from "styled-components";

export const BankStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .bank-text {
    font-size: 14px;
    color: #012a4a;
  }
  .bank-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .remove-btn {
    align-self: center;
    padding: 10px;
    background-color: #0000000d;
    border-radius: 100px;
    font-size: 14px;
    color: #012a4a;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .bank-info {
      text-align: center;
    }
  }
`;
