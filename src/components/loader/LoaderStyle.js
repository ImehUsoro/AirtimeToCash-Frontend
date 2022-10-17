import styled from "styled-components";

export const LoaderStyle = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black; */


  span {
    display: inline-block;
    background-color: purple;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    margin: 0 4px; // adjust margin to your liking
    transform: translate3d(0);
    animation: bounce 0.6s infinite alternate;
    /* align-self: flex-start; */
  }
  span:nth-child(2) {
    background-color: palevioletred; // changes the color of the second circle
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    background-color: palevioletred; // changes the color of the third circle
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    to {
      width: 6px;
      height: 6px;
      transform: translate3d(0, -16px, 0); // moves the dot below
    }
  }
`;
