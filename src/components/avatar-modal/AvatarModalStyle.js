import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .modal-content {
    width: 400px;
    height: 500px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;
    border-radius: 1rem;
    padding: 1rem;
  }

  .modal-logo {
    width: 150px;
  }
  .upload-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .close-btn {
    align-self: flex-end;
    cursor: pointer;
  }
  .allowed-text {
    color: red;
    font-size: 12px;
  }
  .save-btn-modal {
    margin-top: 1rem;
    color: #ffffff;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    background-image: linear-gradient(to right, #de3d6d 80%, #f5844c 100%);
  }

  .modal-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
  }
  .modal-input {
    max-width: 300px;
    padding: 1rem;
    outline: none;
    border: 1px solid #d9d9d9;
    margin-bottom: 1rem;
  }
  .user-avatar {
    border-radius: 50%;
    width: 70px;
    object-fit: contain;
  }
`;
