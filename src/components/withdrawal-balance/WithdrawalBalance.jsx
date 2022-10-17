import React, { useEffect } from "react";
import { useAuth } from "../../context/auth/authState";
import Withdrawal from "../withdrawal/Withdrawal";
import { WithdrawalBalanceStyle } from "./WithdrawalBalanceStyle";

const WithdrawalBalance = () => {
  const { userWithdrawals, getUserWithdrawals } = useAuth();

  useEffect(() => {
    getUserWithdrawals();
  }, []);

  return (
    <WithdrawalBalanceStyle>
      {userWithdrawals?.length > 0 ? (
        userWithdrawals.map((withdrawal) => (
          <Withdrawal withdrawal={withdrawal} key={withdrawal.id} />
        ))
      ) : (
        <p className="no-withdrawals">No withdrawals available to display</p>
      )}
    </WithdrawalBalanceStyle>
  );
};

export default WithdrawalBalance;
