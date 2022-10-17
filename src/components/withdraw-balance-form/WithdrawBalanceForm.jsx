import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useAuth } from "../../context/auth/authState";
import ConfirmRemoveModal from "../confirm-remove-modal/ConfirmRemoveModal";

import { WithdrawBalanceFormStyle } from "./WithdrawBalanceFormStyle";

const WithdrawBalanceForm = () => {
  const { disabled, setDisabled } = useAuth();

  const {
    getSingleUserBanks,
    singleUserBanks,
    setConfirmRemoveModal,
    confirmRemoveModal,
  } = useAuth();
  const [formData, setFormData] = useState({});

  const options = singleUserBanks?.map((bank) => {
    return {
      value: bank.bankName,
      label: `${bank.bankName} - ${bank.accountNumber}`,
      bank: bank,
    };
  });

  const handleBankChange = (selectedOption) => {
    setFormData({
      ...formData,
      accountName: selectedOption.bank.accountName,
      accountNumber: selectedOption.bank.accountNumber,
      bankName: selectedOption.bank.bankName,
      bankCode: selectedOption.bank.bankCode,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getSingleUserBanks();
  }, []);

  useEffect(() => {
    if (formData.accountName && formData.amount && formData.password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      marginBottom: "14px",
      marginTop: "8px",
      padding: "0.4rem",
      fontSize: "14px",
      fontFamily: "Inter",
    }),
    dropdownIndicator: (provided, state) => {
      return {
        ...provided,
        padding: "0px",
        paddingLeft: "0px",
        paddingTop: "0px",
        paddingRight: "30px",
        paddingDown: "0px",
        color: "black",
        cursor: "pointer",
      };
    },
  };
  return (
    <WithdrawBalanceFormStyle>
      <h4>Withdraw</h4>

      <form>
        <label htmlFor="account-name">Select Account</label>
        <Select
          options={options}
          styles={colorStyles}
          placeholder="Select"
          onChange={handleBankChange}
          components={{ IndicatorSeparator: () => null }}
        />
        <label htmlFor="account-name">Account Name</label>
        <input
          type="text"
          id="account-name"
          className="solid-input"
          readOnly
          placeholder="Account Name"
          defaultValue={formData.accountName}
        />

        <label htmlFor="account-number">Account Number</label>
        <input
          type="text"
          id="account-number"
          readOnly
          className="solid-input"
          placeholder="Account Number"
          defaultValue={formData.accountNumber}
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="NGN"
          name="amount"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />

        <button
          type="submit"
          className="withdraw-btn"
          onClick={(e) => {
            e.preventDefault();
            setConfirmRemoveModal(true);
          }}
          disabled={disabled}
        >
          Withdraw
        </button>
      </form>
      {confirmRemoveModal && (
        <ConfirmRemoveModal withdrawalPage withdrawFormData={formData} />
      )}
    </WithdrawBalanceFormStyle>
  );
};

export default WithdrawBalanceForm;
