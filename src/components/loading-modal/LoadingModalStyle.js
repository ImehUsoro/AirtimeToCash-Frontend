import styled from "styled-components";

export const LoadingModalStyle = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
