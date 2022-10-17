import styled, { css } from "styled-components";

export const DashboardLinksStyle = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 36px;
  width: 100%;
  justify-content: space-between;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .link {
    font-size: 14px;
    color: #012a4a;
    border: 1px solid transparent;
    padding-bottom: 8px;
  }

  .active {
    border-bottom: 1px solid #de3d6d;
  }
  ${(props) =>
    props.margin &&
    css`
      margin-bottom: 60px;
    `};

  @media screen and (max-width: 865px) {
    flex-direction: column;

    .active {
      border-bottom: none;
      text-decoration: underline solid #de3d6d;
      text-underline-offset: 60%;
    }
  }
`;
