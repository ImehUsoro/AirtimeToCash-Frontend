import styled from "styled-components";

export const AdminTransactionsStyles = styled.div`
  width: 100%;

  .btn-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .refresh-btn {
    color: #bebebe;
    border: none;
    padding: 0.5rem 1rem;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    border-radius: 4px;
    margin-bottom: 2rem;
    /* margin: auto auto 1rem auto; */
  }

  .refresh-btn:hover {
    background-color: #de3d6d;
    color: #fff;
  }

  .refresh-btn:active {
    opacity: 0.6;
  }
`;
