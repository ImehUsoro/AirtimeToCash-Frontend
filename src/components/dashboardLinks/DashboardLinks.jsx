import React from "react";
import { useAuth } from "../../context/auth/authState";
import { DashboardLinksStyle } from "./DashboardLinksStyle";

const DashboardLinks = () => {
  const { navLinks, setAddBankState, handleDisplay } = useAuth();

  return (
    <DashboardLinksStyle
      margin={
        navLinks.manageBankAccount ||
        navLinks.transactionHistory ||
        navLinks.withdrawalHistory
          ? true
          : false
      }
    >
      <button
        className={`link ${navLinks.sellAirtime ? "active" : null}`}
        onClick={() => {
          handleDisplay(1, 0, 0, 0, 0);
          setAddBankState(true);
        }}
      >
        Transfer
      </button>
      <button
        className={`link ${navLinks.withdrawBalance ? "active" : null}`}
        onClick={() => {
          handleDisplay(0, 1, 0, 0, 0);
          setAddBankState(true);
        }}
      >
        Withdraw balance
      </button>
      <button
        className={`link ${navLinks.manageBankAccount ? "active" : null}`}
        onClick={() => {
          handleDisplay(0, 0, 1, 0, 0);
          setAddBankState(true);
        }}
      >
        Manage bank account
      </button>
      <button
        className={`link ${navLinks.transactionHistory ? "active" : null}`}
        onClick={() => {
          handleDisplay(0, 0, 0, 1, 0);
          setAddBankState(true);
        }}
      >
        Transaction history
      </button>
      <button
        className={`link ${navLinks.withdrawalHistory ? "active" : null}`}
        onClick={() => {
          handleDisplay(0, 0, 0, 0, 1);
          setAddBankState(true);
        }}
      >
        Withdrawal history
      </button>
    </DashboardLinksStyle>
  );
};

export default DashboardLinks;
