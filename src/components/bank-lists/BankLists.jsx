import React, { useEffect } from "react";
import { useAuth } from "../../context/auth/authState";
import Bank from "../bank/Bank";
import { BankListStyle } from "./BankListsStyle";

const BankLists = () => {
  const {
    setAddBankState,
    singleUserBanks,
    getSingleUserBanks,
  } = useAuth();

  useEffect(() => {
    getSingleUserBanks();
  }, []);

  return (
    <BankListStyle>
      {singleUserBanks === "" ? null : singleUserBanks.length > 0 ? (
        <div className="bank-lists-container">
          {singleUserBanks?.map((bank) => (
            <Bank bank={bank} key={bank.id} />
          ))}
        </div>
      ) : (
        <h4
          className="
        no-banks"
        >
          Oops! You have no bank account. Click on the button below to add a
          bank
        </h4>
      )}

      <button
        className="add-btn"
        onClick={(e) => {
          e.preventDefault();
          setAddBankState(true);
        }}
      >
        Add New Bank
      </button>

    </BankListStyle>
  );
};

export default BankLists;
