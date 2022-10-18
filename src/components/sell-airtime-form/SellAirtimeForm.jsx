import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useAuth } from "../../context/auth/authState";
import { serviceProviderOptions } from "../../utils/serviceProviders";
import ConfirmRemoveModal from "../confirm-remove-modal/ConfirmRemoveModal";
import { SellAirtimeFormStyle } from "./SellAirtimeFormStyle";
import { TbCopy } from "react-icons/tb";
import { CopyToClipboard } from "react-copy-to-clipboard";

const SellAirtimeForm = () => {
  const { confirmRemoveModal, setConfirmRemoveModal, disabled, setDisabled } =
    useAuth();

  const [formData, setFormData] = useState({});
  const [copiedModal, setCopiedModal] = useState(false);
  const [secCopiedModal, setSecCopiedModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (selectedOptions) => {
    setFormData({
      ...formData,
      network: selectedOptions.value,
      destinationPhoneNumber:
        selectedOptions.value === "MTN"
          ? process.env.REACT_APP_MTN_NUMBER
          : selectedOptions.value === "AIRTEL"
          ? process.env.REACT_APP_AIRTEL_NUMBER
          : process.env.REACT_APP_9MOBILE_NUMBER,
    });
  };

  useEffect(() => {
    if (formData.network && formData.phoneNumber && formData.amountToSell) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      padding: "0.4rem",
      fontSize: "14px",
      fontFamily: "Inter",
      margin: "8px 0 14px 0",
      borderRadius: "0",
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
  return (
    <SellAirtimeFormStyle>
      <h4>Sell Airtime</h4>
      <form>
        <label htmlFor="network">Network</label>
        <Select
          options={serviceProviderOptions}
          styles={selectStyles}
          placeholder="Select"
          components={{ IndicatorSeparator: () => null }}
          onChange={handleSelectChange}
        />

        <label htmlFor="phone-number">Phone Number</label>
        <input
          type="phone"
          id="phone-number"
          placeholder="Phone Number"
          name="phoneNumber"
          onChange={handleChange}
        />

        <label htmlFor="amount-sell">Amount to Sell</label>
        <input
          type="number"
          required
          id="amount-sell"
          placeholder="NGN"
          name="amountToSell"
          onChange={handleChange}
        />

        <label htmlFor="pin">PIN</label>
        <input
          type="text"
          id="amount-sell"
          placeholder="PIN"
          name="pin"
          onChange={handleChange}
        />

        <label htmlFor="ussd">USSD</label>
        <div className="ussd-input-container">
          <input
            type="text"
            // id="ussd"
            // className="solid-input"
            // onChange={handleTextToCopy}

            placeholder="Fill the form and your ussd will be generated here"
            readOnly
            name="ussd"
            defaultValue={
              formData.network === "MTN"
                ? `*600*${process.env.REACT_APP_MTN_NUMBER}*${
                    formData?.amountToSell ? formData?.amountToSell : "Amount"
                  }*${formData?.pin ? formData?.pin : "PIN"}#`
                : formData.network === "AIRTEL"
                ? `*432*${process.env.REACT_APP_AIRTEL_NUMBER}*${
                    formData.amountToSell ? formData?.amountToSell : "Amount"
                  }#`
                : formData.network === "9MOBILE"
                ? `*223*${formData?.pin ? formData?.pin : "PIN"}*${
                    formData?.amountToSell ? formData?.amountToSell : "Amount"
                  }*${process.env.REACT_APP_9MOBILE_NUMBER}#`
                : undefined
            }
          />
          {formData.network === "AIRTEL"
            ? formData.network &&
              formData.amountToSell && (
                <CopyToClipboard
                  text={
                    formData.network === "MTN"
                      ? `*600*${process.env.REACT_APP_MTN_NUMBER}*${
                          formData?.amountToSell
                            ? formData?.amountToSell
                            : "Amount"
                        }*${formData?.pin ? formData?.pin : "PIN"}#`
                      : formData.network === "AIRTEL"
                      ? `*432*${process.env.REACT_APP_AIRTEL_NUMBER}*${
                          formData.amountToSell
                            ? formData?.amountToSell
                            : "Amount"
                        }#`
                      : formData.network === "9MOBILE"
                      ? `*223*${formData?.pin ? formData?.pin : "PIN"}*${
                          formData?.amountToSell
                            ? formData?.amountToSell
                            : "Amount"
                        }*${process.env.REACT_APP_9MOBILE_NUMBER}#`
                      : undefined
                  }
                  onCopy={() => {
                    setCopiedModal(true);
                    setTimeout(() => {
                      setCopiedModal(false);
                    }, 200);
                    clearTimeout();
                  }}
                >
                  <div className="copy-to-clipboard">
                    <TbCopy size={"24px"} />
                    {copiedModal && <p className="copy-modal">copied</p>}
                  </div>
                </CopyToClipboard>
              )
            : formData.network &&
              formData.amountToSell &&
              formData.pin && (
                <CopyToClipboard
                  text={
                    formData.network === "MTN"
                      ? `*600*${process.env.REACT_APP_MTN_NUMBER}*${
                          formData?.amountToSell
                            ? formData?.amountToSell
                            : "Amount"
                        }*${formData?.pin ? formData?.pin : "PIN"}#`
                      : formData.network === "AIRTEL"
                      ? `*432*${process.env.REACT_APP_AIRTEL_NUMBER}*${
                          formData.amountToSell
                            ? formData?.amountToSell
                            : "Amount"
                        }#`
                      : formData.network === "9MOBILE"
                      ? `*223*${formData?.pin ? formData?.pin : "PIN"}*${
                          formData?.amountToSell
                            ? formData?.amountToSell
                            : "Amount"
                        }*${process.env.REACT_APP_9MOBILE_NUMBER}#`
                      : undefined
                  }
                  onCopy={() => {
                    setCopiedModal(true);
                    setTimeout(() => {
                      setCopiedModal(false);
                    }, 200);
                    clearTimeout();
                  }}
                >
                  <div className="copy-to-clipboard">
                    <TbCopy size={"24px"} />
                    {copiedModal && <p className="copy-modal">copied</p>}
                  </div>
                </CopyToClipboard>
              )}
        </div>

        <label htmlFor="amount-receive">Amount to Receive</label>
        <input
          type="text"
          id="amount-receive"
          className="solid-input"
          placeholder="NGN"
          readOnly
          onChange={handleChange}
          name="amountToReceive"
          defaultValue={
            formData.amountToSell &&
            Number((formData?.amountToSell * 0.7).toFixed(2))
          }
        />

        <label htmlFor="destination">Destination Phone Number</label>
        <div className="ussd-input-container">
          <input
            type="text"
            id="destination"
            className="solid-input"
            placeholder="Destination phone number"
            readOnly
            name="destinationPhoneNumber"
            defaultValue={
              formData.network === "MTN"
                ? process.env.REACT_APP_MTN_NUMBER
                : formData.network === "AIRTEL"
                ? process.env.REACT_APP_AIRTEL_NUMBER
                : formData.network === "9MOBILE"
                ? process.env.REACT_APP_9MOBILE_NUMBER
                : undefined
            }
          />
          {formData.network && (
            <CopyToClipboard
              text={
                formData.network === "MTN"
                  ? process.env.REACT_APP_MTN_NUMBER
                  : formData.network === "AIRTEL"
                  ? process.env.REACT_APP_AIRTEL_NUMBER
                  : process.env.REACT_APP_9MOBILE_NUMBER
              }
              onCopy={() => {
                setSecCopiedModal(true);
                setTimeout(() => {
                  setSecCopiedModal(false);
                }, 300);
                clearTimeout();
              }}
            >
              <div className="copy-to-clipboard">
                <TbCopy size={"24px"} />
                {secCopiedModal && <p className="copy-modal">copied</p>}
              </div>
            </CopyToClipboard>
          )}
        </div>

        <h5 className="send-message">
          After transferring the airtime, click on the "Send” button below
        </h5>

        <button
          type="submit"
          className="sell-airtime-btn"
          disabled={disabled}
          onClick={(e) => {
            e.preventDefault();
            setConfirmRemoveModal(true);
          }}
        >
          Send
        </button>
      </form>
      {confirmRemoveModal && (
        <ConfirmRemoveModal transfer transferFormData={formData} />
      )}
    </SellAirtimeFormStyle>
  );
};

export default SellAirtimeForm;
