import { useEffect, useState } from "react";
// import PaginationSecond from "../../pagination/paginationSecond";

import {
  Center,
  ContentArea,
  TableDiv,
  Table,
  TR,
  THead,
  TBody,
  TD,
  TH,
} from "../AdminTableStyles";
import Pagination from "../../../pagination/pagination";

import ProcessedTableData from "./ProcessedTableData";
import { useAuth } from "../../../../context/auth/authState";

const ProcessedTable = () => {
  const { getAllTransactions, allTransactions } = useAuth();

  const filteredData = allTransactions
    .filter((transaction) => transaction.status !== "pending")
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

  const [pageNumber, setPageNumber] = useState(0);
  const ListPerPage = 8;
  const PageVisited = pageNumber * ListPerPage;

  // const filteredData = ProcessedTableData;

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <>
      <TableDiv>
        <ContentArea className="center-area">
          <Table>
            <THead>
              <TR>
                <TH>Date</TH>
                <TH>Phone Number</TH>
                <TH>Amount Sent</TH>
                <TH>Amount to Receive</TH>
                <TH>Network</TH>
                <TH>Processed By</TH>
                <TH>Status</TH>
              </TR>
            </THead>
            <TBody>
              {filteredData
                .slice(PageVisited, PageVisited + ListPerPage)
                .map((transaction) => (
                  <TR key={transaction.id}>
                    <TD>{transaction.createdAt.slice(2, 10)}</TD>
                    <TD>{transaction.phoneNumber}</TD>
                    <TD>{transaction.amountToSell}</TD>
                    <TD>{transaction.amountToReceive.toFixed(2)}</TD>
                    <TD>{transaction.network}</TD>
                    <TD>{transaction.editedBy}</TD>
                    <TD status={transaction.status}>{transaction.status}</TD>
                  </TR>
                ))}
            </TBody>
          </Table>
        </ContentArea>
      </TableDiv>
      <Center>
        <Pagination
          fetcheddata={filteredData}
          itemsPerPage={8}
          setPageNumber={setPageNumber}
          filtered
        />
      </Center>
    </>
  );
};
export default ProcessedTable;
