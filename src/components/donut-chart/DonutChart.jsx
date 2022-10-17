import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useAuth } from "../../context/auth/authState";
import apexchart from "apexcharts";

const DonutChart = () => {
  const { allTransactions, sidebarOpen } = useAuth();

  const pendingTransactions = allTransactions?.filter(
    (transaction) => transaction.status === "pending"
  ).length;

  const confirmedTransactions = allTransactions?.filter(
    (transaction) => transaction.status === "sent"
  ).length;
  const cancelledTransactions = allTransactions?.filter(
    (transaction) => transaction.status === "cancelled"
  ).length;
  const [options, setOptions] = useState({
    chart: {
      id: "donut",
    },
    noData: {
      text: "no data",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "#F09830",
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
      },
    },
    labels: [
      "Pending Transactions",
      "Confirmed Transactions",
      "Cancelled Transactions",
    ],
    colors: ["#F09830", "#0CF713", "#F01A15"],
    fill: {
      colors: ["#F09830", "#0CF713", "#F01A15"],
    },
  });
  const [series, setSeries] = useState([
    pendingTransactions,
    confirmedTransactions,
    cancelledTransactions,
  ]);

  useEffect(() => {
    apexchart.exec("donut", "updateSeries", [
      pendingTransactions,
      confirmedTransactions,
      cancelledTransactions,
    ]);
  }, [allTransactions]);

  return (

    <Chart
      options={options}
      series={series}
      type="donut"
      width={sidebarOpen ? "680" : "550"}
      height="400"
    />

  );
};

export default DonutChart;
