import React, { useState, useEffect } from "react";
import {
  AdminStyles,
  AdminTableStyles,
  SidebarButton,
  FormStyles,
  TransDropDownCloseStyles,
  TransDropDownStyles,
} from "./AdminStyles";
import OverviewIcon from "../../assets/OverviewIcon.svg";
import OverviewIconBlack from "../../assets/OverviewIconBlack.svg";
import TransactionsIcon from "../../assets/TransactionsIcon.svg";
import BasicTable from "./admin-table/AdminTable";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import AdminTransactions from "../admin-transactions/AdminTransactions";
import AdminEditModel from "../admin-edit-model/AdminEditModel";
import { useAuth } from "../../context/auth/authState";
import AdminWithdrawals from "../admin-withdrawals/AdminWithdrawals";
import { TbExchangeOff, TbExchange } from "react-icons/tb";
import ProcessedTable from "./admin-table/processed-table/ProcessedTable";
import {
  PendingTransactionsStyle,
  ProcessedTransactionsStyle,
} from "./admin-table/AdminTableStyles";

const Admin = () => {
  const { sidebarOpen, setSidebarOpen } = useAuth();
  const [adminOverview, setAdminOverview] = useState(true);
  const [adminTransactions, setAdminTransactions] = useState(false);
  const [adminPending, setAdminPending] = useState(false);
  const [adminWithdrawals, setAdminWithdrawals] = useState(false);
  const [adminProcessed, setAdminProcessed] = useState(false);
  const [transDropdown, setTransDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const {
    confirmUserTransaction,
    currentTransaction,
    sendOTP,
    setCurrentTransaction,
  } = useAuth();
  const [formData, setFormData] = useState({});

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (currentTransaction) {
      setFormData({
        email: currentTransaction.User.email,
        transactionID: currentTransaction.id,
        amountToTransfer: currentTransaction.amountToSell,
      });
    }
  }, [currentTransaction]);

  // console.log(formData);

  // console.log({ atModal: currentTransaction });

  const handleChange = (e) => {
    if (e.target.name === "otp") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setCurrentTransaction((prev) => {
        return {
          ...prev,
          [e.target.name]: +e.target.value,
          amountToReceive: +e.target.value * 0.7,
        };
      });
      setFormData((prev) => {
        return {
          ...prev,
          amountToTransfer: +e.target.value,
        };
      });
    }
  };
  // console.log(currentTransaction);

  const handleTransDropdown = () => {
    setTransDropdown(!transDropdown);
  };

  const handleActive = () => {
    if (
      adminPending ||
      (adminProcessed && !adminOverview && !adminWithdrawals)
    ) {
      setAdminTransactions(!adminTransactions);
    }
  };

  const handleTransDropdownFalse = () => {
    setTransDropdown(false);
  };

  const toogleModal = () => {
    setShowModal(!showModal);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const switchOverview = () => {
    setAdminOverview(true);
    setAdminPending(false);
    setAdminProcessed(false);
    setAdminWithdrawals(false);
    handleTransDropdownFalse();
    setAdminTransactions(false);
  };

  const switchPending = () => {
    setAdminPending(true);
    setAdminOverview(false);
    setAdminProcessed(false);
    setAdminWithdrawals(false);
  };

  const switchProcessed = () => {
    setAdminProcessed(true);
    setAdminOverview(false);
    setAdminPending(false);
    setAdminWithdrawals(false);
  };

  const switchWithdrawals = () => {
    setAdminWithdrawals(true);
    setAdminOverview(false);
    setAdminPending(false);
    setAdminProcessed(false);
    handleTransDropdownFalse();
    setAdminTransactions(false);
  };

  return (
    <AdminStyles>
      <div className="side-nav" style={{ display: sidebarOpen ? "none" : "" }}>
        <div
          id="overview"
          onClick={switchOverview}
          style={{
            background: adminOverview ? "#DE3D6D" : "none",
            color: adminOverview ? "#fff" : "#000",
          }}
        >
          {adminOverview ? (
            <img src={OverviewIcon} alt="Overview Icon" />
          ) : (
            <img src={OverviewIconBlack} alt="Overview Icon" />
          )}
          <p>Overview</p>
        </div>
        <div
          id="transaction"
          onClick={() => {
            handleTransDropdown();
            handleActive();
          }}
          style={{ borderBottom: adminTransactions ? "2px solid red" : "none" }}
        >
          <img src={TransactionsIcon} alt="Transaction Icon" />
          <p>Transactions</p>
        </div>
        {transDropdown && (
          <TransDropDownStyles>
            <div
              className="droplist"
              onClick={switchPending}
              style={{
                background: adminPending ? "#DE3D6D" : "none",
                color: adminPending ? "#fff" : "#000",
              }}
            >
              <TbExchangeOff />
              <p>Pending</p>
            </div>
            <div
              className="droplist"
              onClick={switchProcessed}
              style={{
                background: adminProcessed ? "#DE3D6D" : "none",
                color: adminProcessed ? "#fff" : "#000",
              }}
            >
              <TbExchange />
              <p>Processed</p>
            </div>
          </TransDropDownStyles>
        )}
        <div
          id="withdrawals"
          onClick={switchWithdrawals}
          style={{
            background: adminWithdrawals ? "#DE3D6D" : "none",
            color: adminWithdrawals ? "#fff" : "#000",
          }}
        >
          <FaRegMoneyBillAlt size={25} />

          <p>Withdrawals</p>
        </div>
      </div>

      {sidebarOpen && (
        <div className="side-nav-close">
          <div
            className="overview-close"
            onClick={switchOverview}
            style={{
              background: adminOverview ? "#DE3D6D" : "none",
              color: adminOverview ? "#fff" : "#000",
            }}
          >
            {adminOverview ? (
              <img src={OverviewIcon} alt="Overview Icon" />
            ) : (
              <img src={OverviewIconBlack} alt="Overview Icon" />
            )}
          </div>
          <div
            className="transaction-close"
            onClick={() => {
              handleTransDropdown();
              handleActive();
            }}
            style={{
              borderBottom: adminTransactions ? "2px solid red" : "none",
            }}
          >
            <img src={TransactionsIcon} alt="Transaction Icon" />
          </div>
          {transDropdown && (
            <TransDropDownCloseStyles>
              <div
                className="droplist-close"
                onClick={switchPending}
                style={{
                  background: adminPending ? "#DE3D6D" : "none",
                  color: adminPending ? "#fff" : "#000",
                }}
              >
                <TbExchangeOff />
              </div>
              <div
                className="droplist-close"
                onClick={switchProcessed}
                style={{
                  background: adminProcessed ? "#DE3D6D" : "none",
                  color: adminProcessed ? "#fff" : "#000",
                }}
              >
                <TbExchange />
              </div>
            </TransDropDownCloseStyles>
          )}
          <div
            className="withdrawals-close"
            onClick={switchWithdrawals}
            style={{
              background: adminWithdrawals ? "#DE3D6D" : "none",
              color: adminWithdrawals ? "#fff" : "#000",
            }}
          >
            <FaRegMoneyBillAlt size={25} />
          </div>
        </div>
      )}

      <div
        className="admin-table"
        style={{
          width: sidebarOpen ? "calc(100% - 80px)" : "77%",
          paddingRight: sidebarOpen ? "10%" : "10%",
        }}
      >
        <SidebarButton onClick={toggleSidebar}>
          {sidebarOpen ? <HiOutlineArrowRight /> : <HiOutlineArrowLeft />}
        </SidebarButton>
        {adminOverview ? (
          <AdminTableStyles>
            <AdminTransactions />
          </AdminTableStyles>
        ) : adminPending ? (
          <PendingTransactionsStyle>
            <h2>Pending Transactions</h2>
            <BasicTable toogleModal={toogleModal} />
          </PendingTransactionsStyle>
        ) : adminProcessed ? (
          <ProcessedTransactionsStyle>
            <h2>Processed Transactions</h2>
            <ProcessedTable />
          </ProcessedTransactionsStyle>
        ) : (
          <AdminWithdrawals />
        )}
      </div>
      {showModal && (
        <AdminEditModel
          title="Enter an amount"
          closeModal={toogleModal}
          setFormData={setFormData}
        >
          <FormStyles>
            <label htmlFor="amount-sent">Amount sent</label>
            <input
              type="number"
              id="amount-sent"
              placeholder="Amount sent"
              name="amountToSell"
              onChange={handleChange}
              defaultValue={currentTransaction.amountToSell}
            />

            <label htmlFor="amount-receive">Amount receive</label>
            <input
              type="number"
              id="amount-receive"
              placeholder="Amount receive"
              defaultValue={(currentTransaction.amountToSell * 0.7).toFixed(2)}
              key={currentTransaction.amountToSell}
              readOnly
              name="amountToReceive"
              onChange={handleChange}
            />

            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              className="otp"
              placeholder="OTP"
              name="otp"
              onChange={handleChange}
            />
            <p className="resend-otp">
              Didn't receive any otp? Click{" "}
              <button
                className="resend-btn"
                onClick={(e) => {
                  e.preventDefault();
                  sendOTP();
                }}
              >
                here
              </button>{" "}
              to get another one
            </p>

            <button
              className="confirm-btn"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                confirmUserTransaction(formData);
                toogleModal();
                setFormData({});
                setCurrentTransaction(null);
              }}
            >
              Confirm
            </button>
          </FormStyles>
        </AdminEditModel>
      )}
    </AdminStyles>
  );
};

export default Admin;
