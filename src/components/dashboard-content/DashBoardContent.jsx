import React from "react";
import { useAuth } from "../../context/auth/authState";
import DashboardLinks from "../dashboardLinks/DashboardLinks";
import ManageBankAccountForm from "../manage-bank-account-form/ManageBankAccountForm";
import SellAirtimeForm from "../sell-airtime-form/SellAirtimeForm";
import Transactions from "../transactions/Transactions";
import WalletBalance from "../wallet-balance/WalletBalance";
import WithdrawBalanceForm from "../withdraw-balance-form/WithdrawBalanceForm";
import { DashboardContentStyle } from "./DashboardContentStyles";
import { BiArrowBack } from "react-icons/bi";
import AvatarModal from "../avatar-modal/AvatarModal";
import WithdrawalBalance from "../withdrawal-balance/WithdrawalBalance";

const DashBoardContent = () => {
  const { navLinks, addBankState, setAddBankState, modal } = useAuth();

  return (
    <DashboardContentStyle arrow={!addBankState ? true : false}>
      {!addBankState ? (
        <div className="heading-wrapper">
          <div className="arrow" onClick={() => setAddBankState(true)}>
            <BiArrowBack size={"24px"} />
          </div>
          <h1 className="main">
            {navLinks.sellAirtime || navLinks.withdrawBalance
              ? "Dashboard"
              : navLinks.manageBankAccount
              ? "Manage Accounts"
              : "Transactions"}
          </h1>
        </div>
      ) : (
        <h1 className="main-text">
          {navLinks.sellAirtime || navLinks.withdrawBalance
            ? "Dashboard"
            : navLinks.manageBankAccount
            ? "Manage Accounts"
            : "Transactions"}
        </h1>
      )}

      {navLinks.sellAirtime || navLinks.withdrawBalance ? (
        <WalletBalance />
      ) : null}

      <DashboardLinks />
      {navLinks.sellAirtime ? (
        <SellAirtimeForm />
      ) : navLinks.withdrawBalance ? (
        <WithdrawBalanceForm />
      ) : navLinks.manageBankAccount ? (
        <ManageBankAccountForm />
      ) : navLinks.transactionHistory ? (
        <Transactions />
      ) : (
        <WithdrawalBalance />
      )}

      {modal && <AvatarModal />}
    </DashboardContentStyle>
  );
};

export default DashBoardContent;

// BiArrowBack
