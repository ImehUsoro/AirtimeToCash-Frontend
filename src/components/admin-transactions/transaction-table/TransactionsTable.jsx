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
} from "../../admin/admin-table/AdminTableStyles";
import Pagination from "../../pagination/pagination";
import { useAuth } from "../../../context/auth/authState";
import dummydata from "../../admin/AdminData";

const TransactionsTable = () => {
  const { getAllTransactions, allTransactions } = useAuth();

  const filteredData = allTransactions.sort((a, b) =>
    b.updatedAt.localeCompare(a.updatedAt)
  );

  const [pageNumber, setPageNumber] = useState(0);
  const ListPerPage = 8;
  const PageVisited = pageNumber * ListPerPage;

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <>
      <TableDiv>
        <ContentArea>
          <Table>
            <THead>
              <TR>
                <TH>Email</TH>
                <TH>Phone Number</TH>
                <TH>Amount Sent</TH>
                <TH>Amount to Receive</TH>
                <TH>Network</TH>
                <TH>Status</TH>
              </TR>
            </THead>
            <TBody>
              {filteredData
                .slice(PageVisited, PageVisited + ListPerPage)
                .map((transaction) => (
                  <TR key={transaction.id}>
                    <TD>{transaction.User.email}</TD>
                    <TD>{transaction.User.phoneNumber}</TD>
                    <TD>{transaction.amountToSell}</TD>
                    <TD>{transaction.amountToReceive.toFixed(2)}</TD>
                    <TD>{transaction.network}</TD>
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
export default TransactionsTable;
