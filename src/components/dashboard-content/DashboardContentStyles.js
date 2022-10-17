import styled from "styled-components";

export const DashboardContentStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    padding: 0;
    margin: 0;
  }

  .heading-wrapper {
    display: flex;
    align-items: center;
    gap: 140px;
    align-self: start;
    margin-bottom: 3.75rem;
  }

  .main {
    font-weight: 600;
    font-size: 32px;
    color: #012a4a;
  }
  .main-text {
    font-weight: 600;
    font-size: 32px;
    color: #012a4a;
    margin-bottom: 3.75rem;
  }

  .arrow {
    cursor: pointer;
  }

  @media screen and (max-width: 640px) {
    .main {
      font-size: 24px;
    }
    .heading-wrapper {
      gap: 100px;
    }
  }
  @media screen and (max-width: 490px) {
    .main {
      font-size: 20px;
    }
    .heading-wrapper {
      gap: 60px;
    }
  }
  @media screen and (max-width: 404px) {
    .main-text {
      font-size: 24px;
      margin-bottom: 2.5rem;
    }
  }
  @media screen and (max-width: 386px) {
    .heading-wrapper {
      gap: 40px;
    }
  }
  @media screen and (max-width: 360px) {
    .heading-wrapper {
      gap: 20px;
    }
  }

  @media screen and (max-width: 330px) {
    .heading-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto;
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 304px) {
    .main-text {
      font-size: 22px;
    }
  }
`;
