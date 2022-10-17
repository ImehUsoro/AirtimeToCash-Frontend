import React from "react";
import { useAuth } from "../../context/auth/authState";
import { ConfirmRemoveModalStyle } from "./ConfirmRemoveModalStyles";
import Frowny from "../../assets/frowny.png";

const ConfirmRemoveModal = ({
  bank,
  transfer,
  transferFormData,
  withdrawFormData,
  withdrawalPage,
  viewAccounts,
}) => {
  const {
    setConfirmRemoveModal,
    removeBank,
    bankToRemove,
    transferAirtime,
    withdraw,
    disabled,
    setDisabled,
    setLoading,
  } = useAuth();

  const handleRemove = (e) => {
    e.preventDefault();
    removeBank(bankToRemove.id);
    setConfirmRemoveModal(false);
  };

  return (
    <ConfirmRemoveModalStyle>
      <div className="confirm-remove-modal-container">
        <h3 className="confirm-text">
          {transfer
            ? "Are you sure you have made this transfer?"
            : withdrawalPage
            ? "Are you sure you want to make this withdrawal?"
            : "Are you sure you want to delete this bank?"}
        </h3>
        <img src={Frowny} alt="emoji" />
        {viewAccounts ? (
          <h4 className="remove-bank-info">
            {bankToRemove.bankName} - {bankToRemove.accountNumber}
          </h4>
        ) : null}

        <div className="actions">
          <button
            className="no"
            onClick={() => {
              setConfirmRemoveModal(false);
            }}
          >
            NO
          </button>
          <button
            className="yes"
            disabled={disabled}
            onClick={(e) => {
              setConfirmRemoveModal(false);
              setDisabled(true);
              setLoading(true);
              if (transfer) {
                transferAirtime(transferFormData);
              } else if (withdrawalPage) {
                withdraw(withdrawFormData);
              } else {
                handleRemove(e);
              }
            }}
          >
            YES
          </button>
        </div>
      </div>
    </ConfirmRemoveModalStyle>
  );
};

export default ConfirmRemoveModal;
