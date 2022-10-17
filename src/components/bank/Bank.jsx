import React from "react";
import { useAuth } from "../../context/auth/authState";
import ConfirmRemoveModal from "../confirm-remove-modal/ConfirmRemoveModal";
import { BankStyle } from "./BankStyle";

const Bank = ({ bank }) => {
  const {
    setBankToRemove,
    confirmRemoveModal,
    setConfirmRemoveModal,
    setDisabled,
  } = useAuth();

  return (
    <BankStyle>
      <div className="bank-info">
        <p className="bank-text">{bank.bankName}</p>
        <p className="bank-text">{bank.accountNumber}</p>
        <p className="bank-text">{bank.accountName}</p>
      </div>
      <button
        className="remove-btn"
        onClick={() => {
          setDisabled(false);
          setBankToRemove(bank);
          setConfirmRemoveModal(true);
        }}
      >
        Remove
      </button>
      {confirmRemoveModal && <ConfirmRemoveModal bank={bank} viewAccounts />}
    </BankStyle>
  );
};

export default Bank;
