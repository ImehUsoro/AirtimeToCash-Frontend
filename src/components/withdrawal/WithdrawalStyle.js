import styled from "styled-components";

export const WithdrawalStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);

  p,
  span {
    margin: 0;
    padding: 0;
  }

  .info {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #21334f;
  }
  .today {
    font-weight: 600;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 14px;
  }

  .received {
    color: #34a853;
    padding: 5.5px 13.5px;
    background-color: #34a8531a;
    border-radius: 100px;
    align-self: flex-end;
  }
  .pending {
    color: #df466d;
    padding: 5.5px 13.5px;
    background-color: #34a8531a;
    border-radius: 100px;
    align-self: flex-end;
  }

  .failed {
    color: red;
    padding: 5.5px 13.5px;
    background-color: #34a8531a;
    border-radius: 100px;
    align-self: flex-end;
  }

  .amount {
    justify-self: end;
    align-self: flex-end;
    color: #03435f;
    padding-right: 0.5rem;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    .amount {
      align-self: center;
      padding-right: 0;
    }
    .info {
      align-items: center;
      justify-content: center;
    }
  }
`;
