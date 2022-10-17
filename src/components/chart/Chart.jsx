import React from "react";
import { useEffect } from "react";
import { useAuth } from "../../context/auth/authState";
import AdminCard from "../admin-card/AdminCard";
import { ChartStyles } from "./ChartStyles";

const Chart = () => {
  const { getAllTransactions, sidebarOpen, getUsers } = useAuth();

  useEffect(() => {
    getAllTransactions();
    getUsers();
  }, []);

  return (
    <ChartStyles>
      <div className={sidebarOpen? "chart-expanded" : "chart"}>
        {/* <div className="chart"> */}
        <AdminCard withdrawal />
        <AdminCard pending />
        <AdminCard verifiedUsers />
        <AdminCard unverifiedUsers />
      </div>
      <div className="donut-container">
        <AdminCard donutChart />
      </div>
    </ChartStyles>
  );
};

export default Chart;
