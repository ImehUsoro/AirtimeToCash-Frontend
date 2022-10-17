import styled from "styled-components";

export const ConfirmRemoveModalStyle = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  button:disabled,
  button[disabled] {
    cursor: not-allowed;
    background-color: #cccccc;
  }

  .confirm-remove-modal-container {
    width: 40%;
    min-width: 250px;
    /* height: 175px; */
    background-color: #ffffff;
    box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 5px;
  }

  .confirm-text {
    text-align: center;
  }
  .actions {
    display: flex;
    gap: 20px;
  }

  .actions .yes {
    background-color: #008000;
    padding: 0.5rem 1.5rem;
    color: #fff;
    border-radius: 5px;
  }

  .remove-bank-info {
    /* margin: 1rem 2rem; */
    text-align: center;
  }
  .actions .no {
    background-color: #e20010;
    padding: 0.5rem 1.5rem;
    color: #fff;
    border-radius: 5px;
  }
`;
