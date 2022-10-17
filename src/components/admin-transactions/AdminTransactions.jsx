import React, { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../context/auth/authState";
import Chart from "../chart/Chart";
import { AdminTransactionsStyles } from "./AdminTransactionsStyle";
import TransactionsTable from "./transaction-table/TransactionsTable";

const AdminTransactions = () => {
  const {
    getAllTransactions,
    getAllWithdrawals,
    refresh,
    setRefresh,
    getUsers,
  } = useAuth();

  useEffect(() => {
    getAllTransactions();
    getAllWithdrawals();
    getUsers();
  }, [refresh]);

  return (
    <AdminTransactionsStyles>
      <h2>Admin Dashboard</h2>
      <Chart />
      <div className="btn-container">
        <button
          className="refresh-btn"
          onClick={() => {
            setRefresh(!refresh);
          }}
        >
          Refresh Data
        </button>
      </div>
      <TransactionsTable />
    </AdminTransactionsStyles>
  );
};

export default AdminTransactions;
