import React from "react";
import { WithdrawalStyles } from "./WithdrawalStyle";
import TimeAgo from "timeago-react";

const Withdrawal = ({ withdrawal }) => {
  const date = new Date(withdrawal.createdAt);
  const processedDate = date.toLocaleDateString();
  return (
    <WithdrawalStyles>
      <div className="info">
        <div className="info">
          <p>
            <span className="today">
              <TimeAgo datetime={date} locale="us" />,{" "}
            </span>
            {`${withdrawal.createdAt.slice(11, 16)}${
              Number(withdrawal.createdAt.slice(11, 13)) > 12 ? "PM" : "AM"
            }`}
          </p>
          <p>Withdraw Funds</p>
          <p>{processedDate}</p>
        </div>
      </div>
      <div className="details">
        <p className={withdrawal.status ? "received" : "failed"}>
          {withdrawal.status ? "Received" : "Failed"}
        </p>
        <p className="amount">N{withdrawal.amount}</p>
      </div>
    </WithdrawalStyles>
  );
};

export default Withdrawal;
