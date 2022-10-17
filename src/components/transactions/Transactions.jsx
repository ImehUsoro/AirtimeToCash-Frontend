import React, { useEffect } from "react";
import { useAuth } from "../../context/auth/authState";
import Transaction from "../transaction/Transaction";
import { TransactionStyles } from "./TransactionsStyle";

const Transactions = () => {
  const { userTransactions, getUserTransactions } = useAuth();

  const filteredData = userTransactions?.sort((a, b) =>
    b.updatedAt.localeCompare(a.updatedAt)
  );

  useEffect(() => {
    getUserTransactions();
  }, []);

  return (
    <TransactionStyles>
      {filteredData?.length > 0 ? (
        filteredData.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))
      ) : (
        <p className="no-transactions">No transactions available to display</p>
      )}
    </TransactionStyles>
  );
};

export default Transactions;
