import styled from "styled-components";

export const SuccessModalStyle = styled.div`
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
    width: 510px;
    height: 410px;
    background-color: #ffffff;
    box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-content img {
    margin: 46px auto 40px auto;
  }
  .main-txt {
    color: #21334f;
    font-size: 24px;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .second-text {
    font-size: 14px;
    text-align: center;
    max-width: 200px;
    margin: 0 auto;
    line-height: 20px;
    color: #21334f;
    margin-bottom: 30px;
  }

  .done-btn {
    background-color: #e200100d;
    margin: 0 auto;
    padding: 13.5px 152px;
    color: #de3d6d;
  }

  @media screen and (max-width: 560px) {
    .modal-content {
      width: 80%;
    }
  }

  @media screen and (max-width: 440px) {
    .done-btn {
      background-color: #e200100d;
      margin: 0 auto;
      padding: 13.5px 90px;
      color: #de3d6d;
    }
  }

  @media screen and (max-width: 380px) {
    .main-txt {
      font-size: 16px;
    }
    .second-text {
      font-size: 12px;
    }
  }
`;
