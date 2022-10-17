import styled from "styled-components";

export const WalletBalanceStyle = styled.div`
  background-color: #de3d6d;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 22.5px 0;
  align-items: center;
  border-radius: 24px;
  margin-bottom: 2rem;

  p {
    margin: 0;
    padding: 0;
  }

  .balance-text {
    color: #ffffff;
    margin-bottom: 16px;
  }

  .amount {
    font-weight: 700;
    font-size: 32px;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }

  .account-active {
    padding: 8px 10px 8px 8px;
    border: 1px solid #cf3c66;
    border-radius: 100px;
    color: #ffffff;
    background-color: #d53e69;
  }
  .active-text {
    font-size: 10px;
  }

  @media screen and (max-width: 360px) {
    .amount {
      font-size: 20px;
    }
    .balance-text {
      font-size: 12px;
    }
    .active-text {
      font-size: 8px;
    }
  }
`;
