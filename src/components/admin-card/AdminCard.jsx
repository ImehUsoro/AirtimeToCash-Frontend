import React, { useEffect } from "react";
import { useAuth } from "../../context/auth/authState";
import DonutChart from "../donut-chart/DonutChart";
import { AdminCardStyles } from "./AdminCardStyles";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { TbExchangeOff } from "react-icons/tb";

const AdminCard = ({
  withdrawal,
  pending,
  verifiedUsers,
  unverifiedUsers,
  donutChart,
}) => {
  const {
    getUsers,
    allWithdrawals,
    getAllWithdrawals,
    allTransactions,
    getAllTransactions,
    allUsers,
    sidebarOpen,
  } = useAuth();

  useEffect(() => {
    getAllWithdrawals();
    getAllTransactions();
    getUsers();
  }, []);

  // console.log(allUsers);

  const totalWithdrawals = allWithdrawals.reduce((acc, curr) => {
    if (curr.status) {
      return acc + curr.amount;
    } else {
      return acc;
    }
  }, 0);

  const totalPendingAmount = allTransactions.reduce((acc, curr) => {
    if (curr.status === "pending") {
      return acc + curr.amountToReceive;
    } else {
      return acc;
    }
  }, 0);

  const allVerifiedUsers = allUsers.filter(
    (user) => user.isVerified && user.role === "user"
  ).length;

  const allNonVerifiedUsers = allUsers?.filter(
    (user) => !user.isVerified && user.role === "user"
  ).length;

  return (
    <AdminCardStyles>
      {withdrawal && (
        <div className={sidebarOpen ? "content-expand red" : "content red"}>
          {/* <div className="content-expand red"> */}
          <FaMoneyBillAlt size={"24px"} />
          <div className="info-details">
            <p>
              ₦{" "}
              {totalWithdrawals
                // .toString()
                .toFixed(2)
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p>Amount Withdrawn</p>
          </div>
        </div>
      )}
      {pending && (
        // <div className="content-expand purple">
        <div
          className={sidebarOpen ? "content-expand purple" : "content purple"}
        >
          <TbExchangeOff size={"24px"} fill={"white"} />
          <div className="info-details">
            <p>
              ₦{" "}
              {totalPendingAmount
                // .toString()
                .toFixed(2)
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p>Pending Amount</p>
          </div>
        </div>
      )}
      {verifiedUsers && (
        // <div className="content-expand green">
        <div className={sidebarOpen ? "content-expand green" : "content green"}>
          <BsFillPeopleFill size={"24px"} />
          <div className="info-details">
            <p>{allVerifiedUsers}</p>
            <p>Verified Users</p>
          </div>
        </div>
      )}
      {unverifiedUsers && (
        // <div className="content-expand blue">
        <div className={sidebarOpen ? "content-expand blue" : "content blue"}>
          <MdOutlinePeopleAlt size={"24px"} />
          <div className="info-details">
            <p>{allNonVerifiedUsers}</p>
            <p>Unverified Users</p>
          </div>
        </div>
      )}
      {donutChart && (
        <div className={sidebarOpen ? "donut-expanded" : "donut"}>
          {allTransactions.length > 0 ? (
            <DonutChart />
          ) : (
            <div className="no-data">No Transactions to display</div>
          )}
        </div>
      )}
    </AdminCardStyles>
  );
};

export default AdminCard;

// TbExchangeOff
