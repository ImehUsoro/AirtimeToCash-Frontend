import styled from "styled-components";

export const BankListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  h4 {
    font-weight: 400;
  }
  .add-btn {
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
  }
  .no-banks {
    color: #012a4a;
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
  }

  .bank-lists-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-height: 300px;
    overflow-y: scroll;
    padding-bottom: 0.5rem;
  }
`;
