import styled from "styled-components";

export const ChartStyles = styled.div`
  display: flex;
  gap: 6%;
  width: 100%;
  margin-bottom: 5%;

  .chart {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .chart-expanded {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .donut-container {
  }

  @media screen and (max-width: 1230px) {
    justify-content: center;

    .donut-container {
      display: none;
    }
  }
`;
