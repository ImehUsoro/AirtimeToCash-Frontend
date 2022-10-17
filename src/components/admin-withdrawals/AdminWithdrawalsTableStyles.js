import styled, { css } from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
`;

export const TableDiv = styled.div`
  width: 100%;
  padding: 0px;
  min-height: 461px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
`;

export const ContentArea = styled.div`
  background: #ffffff;
  border-radius: 4px;
  overflow-x: auto;
`;

export const Table = styled.table`
  border-spacing: 0;
  width: 100%;
  /* padding-bottom: 95px; */
`;

export const TR = styled.tr``;

export const THead = styled.thead`
  padding: 0px 0px 8px 32px;
  background: rgba(0, 0, 0, 0.04);
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #012a4a;
`;

export const TBody = styled.tbody`
  TR:hover {
    background: #e5e5e5;
  }
`;

export const TD = styled.td`
  padding: 18px 0px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #012a4a;
  ${(props) =>
    props.status === false &&
    css`
      color: red;
    `}
  ${(props) =>
    props.status === true &&
    css`
      color: green;
    `}
`;

export const TH = styled.th`
  background: rgba(0, 0, 0, 0.04);
  white-space: nowrap;
  padding: 8px 20px 8px 20px;
  color: #012a4a;
  font-family: "Inter";
  font-style: normal;
  font-weight: 550;
  font-size: 14px;
`;
