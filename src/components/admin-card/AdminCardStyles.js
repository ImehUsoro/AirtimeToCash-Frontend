import styled, { css } from "styled-components";

export const AdminCardStyles = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  }

  .content {
    padding: 1rem;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    border-radius: 0.5rem;
    color: #fff;
  }

  .content-expand {
    padding: 1rem;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    border-radius: 0.5rem;
    color: #fff;
    /* border: 3px solid red; */
  }

  .donut {
    height: 370px;
  }
  .donut-expanded {
    height: 408px;
  }

  .no-data {
    min-width: 540px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #bebebe;
    font-weight: 600;
    font-size: 1.5rem;
  }

  .info-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-items: center;
    align-items: center;
    font-size: 14px;
    width: 150px;
  }

  .red {
    background-color: blue;
  }

  .purple {
    background-color: #e68c36;
  }

  .green {
    background-color: #09d99f;
  }

  .blue {
    background-color: #3f51b5;
  }

  @media screen and (max-width: 500px) {
    .content-expand {
      width: 250px;
    }
  }
  @media screen and (max-width: 360px) {
    .content-expand {
      padding: 0.5rem;
      flex-direction: column;
      gap: 0.5rem;
      width: 200px;
    }
    .info-details {
      gap: 0.5rem;
    }
  }

  @media screen and (max-width: 310px) {
    .content-expand {
      width: 150px;
    }
  }
`;
