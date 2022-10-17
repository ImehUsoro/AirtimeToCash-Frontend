import styled, { css } from "styled-components";

export const DashboardStyle = styled.div`
  background-color: #ffffff;
  border: 1px solid transparent;

  ${(props) =>
    props.modalOn &&
    css`
      overflow: hidden;
      height: 100vh;
    `}
  ${(props) =>
    props.freeze &&
    css`
      overflow: hidden;
      scroll-behavior: unset;
      height: min-content;
    `}
`;

export const Container = styled.div`
  border: 1px solid #d9d9d9;
  width: 57%;
  /* height: 1106px; */
  padding: 5%;
  margin: -12rem auto 15.75rem auto;
  z-index: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 1380px) {
    width: 60%;
  }

  @media screen and (max-width: 1297px) {
    width: 65%;
  }
  @media screen and (max-width: 1179px) {
    width: 70%;
  }

  @media screen and (max-width: 1081px) {
    width: 75%;
  }

  @media screen and (max-width: 998px) {
    width: 80%;
  }

  @media screen and (max-width: 927px) {
    width: 85%;
  }
  @media screen and (max-width: 865px) {
    width: 65%;
  }
`;
