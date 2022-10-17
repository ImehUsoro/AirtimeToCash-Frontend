import styled from "styled-components";

export const TransactionStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-height: 300px;
  overflow: auto;
  padding: 1rem;

  .no-transactions {
    margin: auto;
    color: #012a4a;
    font-weight: 600;
  }
`;
