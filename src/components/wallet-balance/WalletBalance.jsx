import React, { useEffect } from "react";
import { useAuth } from "../../context/auth/authState";
import { WalletBalanceStyle } from "./WalletBalanceStyle";

const WalletBalance = () => {
  const { getSingleUser, singleUser, refresh } = useAuth();

  const user = JSON.parse(localStorage.getItem("user"));

  const balance = singleUser.walletBalance
    ? singleUser.walletBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : null;

  useEffect(() => {
    getSingleUser(user.id);
  }, []);

  useEffect(() => {
    getSingleUser(user.id);
  }, [refresh]);

  return (
    <WalletBalanceStyle>
      <p className="balance-text">Wallet balance</p>
      <p className="amount">
        ₦
        {singleUser?.walletBalance === 0
          ? "0.00"
          : balance?.toString().split(".").length === 1
          ? `${balance?.toString()}.00`
          : balance}
      </p>
      <div className="account-active">
        <p className="active-text">Account is active</p>
      </div>
    </WalletBalanceStyle>
  );
};

export default WalletBalance;
