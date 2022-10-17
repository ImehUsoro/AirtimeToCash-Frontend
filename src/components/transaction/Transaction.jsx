import React from "react";
import { TransactionStyles } from "./TransactionStyle";
// import ReactTimeAgo from "react-time-ago";
import TimeAgo from "timeago-react";

const Transaction = ({ transaction }) => {
  const date = new Date(transaction.createdAt);
  const processedDate = date.toLocaleDateString();

  return (
    <TransactionStyles>
      <div className="info">
        <p>
          <span className="today">
            <TimeAgo datetime={date} locale="us" />,{" "}
          </span>
          {`${transaction.createdAt.slice(11, 16)}${
            Number(transaction.createdAt.slice(11, 13)) > 12 ? "PM" : "AM"
          }`}
        </p>
        <p>{`${transaction.network} Transferred Airtime`}</p>
        <p>{processedDate}</p>
      </div>
      <div className="details">
        <p className={transaction.status === "sent" ? "received" : "pending"}>
          {transaction.status === "pending"
            ? "Pending"
            : transaction.status === "sent"
            ? "Received"
            : "Failed"}
        </p>
        <p className="amount">N{transaction.amountToSell}</p>
      </div>
    </TransactionStyles>
  );
};

export default Transaction;