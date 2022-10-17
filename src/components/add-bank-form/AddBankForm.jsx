import { useAuth } from "../../context/auth/authState";
import Select from "react-select";
import { useState } from "react";
import { useEffect } from "react";
const AddBankForm = () => {
  const { addBank, disabled, setDisabled } = useAuth();
  const [bankInfo, setBankInfo] = useState({});
  const [banks, setBanks] = useState([]);
  // const [display, setDisplay] = useState(false);

  const fetchBanks = async () => {
    const res = await fetch("https://api.paystack.co/bank");
    const data = await res.json();
    let newData = data.data.map((bank) => {
      return {
        label: bank.name,
        value: bank.name,
        bankCode: bank.code,
      };
    });
    setBanks(newData);
  };

  useEffect(() => {
    fetchBanks();
  }, []);

  useEffect(() => {
    if (bankInfo.bankName && bankInfo.accountNumber && bankInfo.accountName) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [bankInfo]);

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      padding: "0.4rem",
      fontSize: "14px",
      fontFamily: "Inter",
      "& select": {
        font: "Inter",
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      // fontWeight: "400",
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

  const handleChange = (e) => {
    setBankInfo({ ...bankInfo, [e.target.name]: e.target.value });
  };
  const handleBankChange = (selectedOption) => {
    setBankInfo({
      ...bankInfo,
      bankName: selectedOption.value,
      bankCode: selectedOption.bankCode,
    });
  };

  return (
    <form className="form-group">
      <div className="entry-details">
        <label htmlFor="">Bank Name</label>
        <Select
          options={banks}
          onChange={handleBankChange}
          styles={selectStyles}
          placeholder="Select Bank"
          components={{ IndicatorSeparator: () => null }}
        />
      </div>
      <div className="entry-details">
        <label htmlFor="accountName">Account Name</label>
        <input
          type="text"
          name="accountName"
          placeholder="Account Name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="entry-details">
        <label htmlFor="accountNumber">Account Number</label>
        <input
          type="text"
          placeholder="Account Number"
          name="accountNumber"
          onChange={handleChange}
          required
        />
      </div>
      <button
        className="add-bank-btn"
        disabled={disabled}
        onClick={(e) => {
          e.preventDefault();
          setDisabled(true);
          addBank(bankInfo);
        }}
      >
        Add Bank
      </button>
    </form>
  );
};

export default AddBankForm;
