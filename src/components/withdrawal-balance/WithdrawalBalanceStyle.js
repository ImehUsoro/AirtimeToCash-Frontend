import styled from "styled-components";

export const WithdrawalBalanceStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-height: 300px;
  overflow: auto;
  padding: 1rem;

  .no-withdrawals {
    margin: auto;
    color: #012a4a;
    font-weight: 600;
  }
`;
