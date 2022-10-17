import { useEffect, useState } from "react";

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
} from "./AdminWithdrawalsTableStyles";
import Pagination from "../pagination/pagination";
import { useAuth } from "../../context/auth/authState";

const WithdrawalsTable = () => {
  const { allWithdrawals, getAllWithdrawals } = useAuth();

  const [pageNumber, setPageNumber] = useState(0);
  const ListPerPage = 8;
  const PageVisited = pageNumber * ListPerPage;

  useEffect(() => {
    getAllWithdrawals();
  }, []);

  return (
    <>
      <TableDiv>
        <ContentArea>
          <Table>
            <THead>
              <TR>
                <TH>Date</TH>
                <TH>Email</TH>
                <TH>Phone Number</TH>
                <TH>Status</TH>
                <TH>Amount</TH>
              </TR>
            </THead>
            <TBody>
              {allWithdrawals
                .slice(PageVisited, PageVisited + ListPerPage)
                .map((withdrawal) => (
                  <TR key={withdrawal.id}>
                    <TD>{withdrawal.createdAt.slice(0, 10)}</TD>
                    <TD>{withdrawal.User.email}</TD>
                    <TD>{withdrawal.User.phoneNumber}</TD>
                    <TD status={withdrawal.status}>
                      {withdrawal.status ? "Received" : "Failed"}
                    </TD>
                    <TD>{withdrawal.amount}</TD>
                  </TR>
                ))}
            </TBody>
          </Table>
        </ContentArea>
      </TableDiv>
      <Center>
        <Pagination
          fetcheddata={allWithdrawals}
          itemsPerPage={8}
          setPageNumber={setPageNumber}
          filtered
        />
      </Center>
    </>
  );
};
export default WithdrawalsTable;
