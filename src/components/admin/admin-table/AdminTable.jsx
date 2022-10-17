import { useEffect, useState } from "react";
import Pagination from "../../pagination/pagination";
import Dropdown from "../../DropAction/Dropdown";

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
} from "./AdminTableStyles";
import { useAuth } from "../../../context/auth/authState";

const BasicTable = ({ toogleModal }) => {
  const {
    getAllTransactions,
    allTransactions,
    setCurrentTransaction,
    currentTransaction,
  } = useAuth();

  // console.log({ atClick: currentTransaction });

  const [pageNumber, setPageNumber] = useState(0);
  let ListPerPage = 6;
  const PageVisited = pageNumber * ListPerPage;

  const handleResize = () => {
    if (window.innerWidth < 1280) {
      ListPerPage = 4;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const filteredData = allTransactions
    .filter((transaction) => transaction.status === "pending")
    .reverse();

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
                <TH>Action</TH>
              </TR>
            </THead>
            <TBody>
              {filteredData
                .slice(PageVisited, PageVisited + ListPerPage)
                .map((transaction) => (
                  <TR key={transaction.id}>
                    <TD>{transaction.User.email}</TD>
                    <TD>{transaction.phoneNumber}</TD>
                    <TD>{transaction.amountToSell}</TD>
                    <TD>{transaction.amountToReceive}</TD>
                    <TD>{transaction.network}</TD>
                    <TD>
                      <Dropdown
                        transaction={transaction}
                        toogleModal={toogleModal}
                        onClick={() => setCurrentTransaction(transaction)}
                      />
                    </TD>
                  </TR>
                ))}
            </TBody>
          </Table>
        </ContentArea>
      </TableDiv>
      <Center>
        <Pagination
          fetcheddata={filteredData}
          itemsPerPage={ListPerPage}
          setPageNumber={setPageNumber}
        />
      </Center>
    </>
  );
};
export default BasicTable;

