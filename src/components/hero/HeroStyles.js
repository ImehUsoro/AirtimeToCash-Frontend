import styled from "styled-components";

export const HeroStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: rgba(245, 132, 76, 0.05);
  padding-left: 10%;
  padding-top: 4%;
  .banner-text {
    width: 40%;
    margin-top: 7%;
    margin-bottom: 9%;
  }
  .banner-image {
    /* position: relative; */
    width: 43%;
    margin-right: 5%;
    margin-top: 5%;
  }
  .banner-image img {
    /* position: absolute; */
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .banner-text h1 {
    width: 100%;
    font-weight: 600;
    font-size: 3.6em;
    font-family: var(--font-family);
    font-style: normal;
    line-height: 1.2em;
    margin-bottom: 7%;
    background: linear-gradient(89.39deg, #de3d6d 18.77%, #f5844c 91.68%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    z-index: -1;
  }
  .banner-text p {
    color: #03435f;
    width: 100%;
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    margin-bottom: 8%;
    line-height: 1.5em;
    z-index: -2;
  }
  .banner-btn {
    background: linear-gradient(107.45deg, #de3d6d 47.58%, #f5844c 104.23%);
    border-radius: 4px;
    padding: 2.5% 9%;
    font-size: 1em;
    border: none;
    color: #fff;
    font-family: var(--font-family);
    z-index: -2;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    .banner-image {
      width: 49%;
      margin-top: 7%;
      margin-bottom: 13%;
    }
  }

  @media screen and (max-width: 880px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-left: 0;
    padding: 10% 10% 0 10%;
    .banner-text {
      width: 100%;
    }
    .banner-text h1 {
      font-size: 5em;
    }
    .banner-text p {
      font-size: 2em;
      width: 80%;
      margin: auto;
      margin-bottom: 3em;
    }
    .banner-btn {
      padding: 4% 15%;
      font-size: 1.5em;
    }

    .banner-image {
      width: 100%;
      height: 30em;
    }
  }

  @media screen and (max-width: 440px) {
    .banner-image {
      width: 100%;
      height: 20em;
    }
  }

  @media screen and (max-width: 414px) {
    .banner-text h1 {
      font-size: 3em;
      margin-bottom: 1em;
    }
    .banner-text p {
      font-size: 1em;
      width: 80%;
      margin: auto;
      margin-bottom: 3em;
    }
  }
  @media screen and (max-width: 280px) {
    .banner-image {
      width: 100%;
      height: 12em;
    }

    .banner-text h1 {
      font-size: 2.2em;
      margin-bottom: 1em;
    }
    .banner-text p {
      font-size: 1em;
      width: 80%;
      margin: auto;
      margin-bottom: 2em;
    }
    .banner-btn {
      padding: 4% 15%;
      font-size: 1em;
    }
  }
`;
