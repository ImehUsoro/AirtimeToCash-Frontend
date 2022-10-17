import AuthContext from "./authContext";
import React, { useReducer, useState } from "react";
import AuthReducer from "./AuthReducer";
import { apiDelete, apiGet, apiPatch, apiPost } from "../../utils/api/axios";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

const AuthState = (props) => {
  const [modal, setModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [singleUser, setSingleUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bankToRemove, setBankToRemove] = useState(null);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [addBankState, setAddBankState] = useState(true);
  const [successModal, setSuccessModal] = useState(false);
  const [singleUserBanks, setSingleUserBanks] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  const [allWithdrawals, setAllWithdrawals] = useState([]);
  const [userWithdrawals, setUserWithdrawals] = useState([]);
  const [userTransactions, setUserTransactions] = useState([]);
  const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
  // const navigate = useNavigate();

  const handleDisplay = (prop1, prop2, prop3, prop4, prop5) => {
    setNavLinks({
      sellAirtime: prop1,
      withdrawBalance: prop2,
      manageBankAccount: prop3,
      transactionHistory: prop4,
      withdrawalHistory: prop5,
    });
  };

  const [navLinks, setNavLinks] = useState({
    sellAirtime: true,
    withdrawBalance: false,
    manageBankAccount: false,
    transactionHistory: false,
  });

  const initialState = {
    token: localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user")),
    isAuthenticated: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const register = async (formData) => {
    try {
      const registerData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      await apiPost("/users/register", registerData)
        .then((res) => {
          toast.success(res.data.message);
          setDisabled(false);
          setLoading(false);
          setTimeout(() => {
            window.location.href = "/user/email-sent";
          }, 2000);
          clearTimeout();
        })
        .catch((err) => {
          setDisabled(false);
          setLoading(false);
          toast.error(err.response.data.error);
        });
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const registerAdmin = async (formData) => {
    try {
      const registerData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      await apiPost("/users/createAdmin", registerData)
        .then((res) => {
          toast.success(res.data.message);
          setDisabled(false);
          setTimeout(() => {
            window.location.href = "/user/email-sent";
          }, 2000);
          clearTimeout();
        })
        .catch((err) => {
          setDisabled(false);
          toast.error(err.response.data.error);
        });
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const login = async (formData) => {
    try {
      const loginData = {
        userInfo: formData.userInfo,
        password: formData.password,
      };
      await apiPost("/users/login", loginData)
        .then((res) => {
          toast.success(res.data.message);
          setLoading(false);
          setDisabled(false);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem(
            "user",
            JSON.stringify({
              email: res.data.User.email,
              id: res.data.User.id,
              firstName: res.data.User.firstName,
              lastName: res.data.User.lastName,
              phoneNumber: res.data.User.phoneNumber,
              username: res.data.User.username,
              avatar: res.data.User.avatar,
              role: res.data.User.role,
              walletBalance: res.data.User.walletBalance,
            })
          );
          setTimeout(() => {
            if (res.data.User.role === "user") {
              window.location.href = "/user/dashboard";
              // navigate("/user/dashboard");
            } else {
              window.location.href = "/admin/dashboard";
            }
          }, 2000);
          clearTimeout();
        })
        .catch((err) => {
          setDisabled(false);
          setLoading(false);
          toast.error(err.response.data.error);
        });
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  const logout = () => {
    localStorage.clear();
    window.location.href = "/user/login";
  };

  const forgotPassword = async (
    location,
    formData = JSON.parse(localStorage.getItem("email"))
  ) => {
    try {
      const form = {
        email: formData.email,
      };
      await apiPost("/users/forgotpassword", form)
        .then((res) => {
          toast.success(res.data.message);
          localStorage.setItem("email", JSON.stringify(formData));
          if (location.pathname !== "/user/email-sent") {
            setTimeout(() => {
              window.location.href = "/user/email-sent";
            }, 2000);
            clearTimeout();
          }
        })
        .catch((err) => {
          toast.error(err.response.data.error);
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const resetPassword = async (formData, id) => {
    try {
      const form = {
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };
      await apiPatch(`/users/change-password/${id}`, form)
        .then((res) => {
          toast.success(res.data.message);
          setTimeout(() => {
            window.location.href = "/user/login";
          }, 2000);
          clearTimeout();
        })
        .catch((err) => {
          toast.error(err.response.data.error);
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserInfo = async (formData) => {
    try {
      await apiPatch(`/users/update/${formData.id}`, formData)
        .then((res) => {
          toast.success(res.data.message);
          localStorage.setItem("user", JSON.stringify(formData));
          setTimeout(() => {
            window.location.href = "/user/dashboard";
          }, 2000);
          clearTimeout();
        })
        .catch((err) => {
          toast.error(err.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const updateUserAvatar = async (avatar, user) => {
    try {
      const form = {
        avatar,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        username: user.username,
        id: user.id,
      };
      await apiPatch(`/users/update/${user.id}`, form)
        .then((res) => {
          toast.success(res.data.message);
          localStorage.setItem("user", JSON.stringify(form));
          setTimeout(() => {
            window.location.href = "/user/dashboard/update-user";
          }, 2000);
          clearTimeout();
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addBank = async (bankData) => {
    try {
      if (!bankData.bankName) {
        return toast.error("Please select a bank");
      }
      await apiPost("/api/add-bank/", bankData)
        .then((res) => {
          setSuccessModal(true);
        })
        .then(() => setDisabled(false))
        .catch((err) => {
          toast.error(err.response.data.error);
        })
        .then(() => {
          setDisabled(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleUserBanks = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await apiGet(`/users/single-user/${user.id}`)
        .then((res) => {
          setSingleUserBanks(res.data.user.banks);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const removeBank = async (id) => {
    try {
      await apiDelete(`/api/delete-bank/${id}`)
        .then((res) => {
          toast.success(res.data.message);
          setDisabled(false);
          setLoading(false);
        })
        .then(() => {
          const user = JSON.parse(localStorage.getItem("user"));
          apiGet(`/users/single-user/${user.id}`)
            .then((res) => {
              setSingleUserBanks(res.data.user.banks);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          toast.error(err.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const transferAirtime = async (formData) => {
    try {
      const newData = {
        network: formData.network,
        phoneNumber: formData.phoneNumber,
        amountToSell: formData.amountToSell,
        destinationPhoneNumber: formData.destinationPhoneNumber,
      };
      await apiPost("/api/add-transaction", newData)
        .then((res) => {
          toast.success(res.data.message);
          setLoading(false);
          handleDisplay(0, 0, 0, 1, 0);
          setDisabled(false);
        })
        // .then(() => {
        //   setDisabled(false);
        // })
        .catch((err) => {
          toast.error(err.response.data.error);
          setDisabled(false);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const withdraw = async (formData) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const newData = {
        bankName: formData.bankName,
        accountNumber: formData.accountNumber,
        amount: formData.amount,
        email: user.email,
        password: formData.password,
        bankCode: formData.bankCode,
      };

      await apiPost("/api/withdraw", newData)
        .then((res) => {
          toast.success(res.data.message);
          setLoading(false);
          setConfirmRemoveModal(false);
          handleDisplay(0, 0, 0, 0, 1);
          setRefresh(!refresh);
          setDisabled(false);
        })
        .then(() => {
          const user = JSON.parse(localStorage.getItem("user"));
          apiGet(`/users/single-user/${user.id}`).then((res) => {
            localStorage.setItem(
              "user",
              JSON.stringify({
                email: res.data.user.email,
                id: res.data.user.id,
                firstName: res.data.user.firstName,
                lastName: res.data.user.lastName,
                phoneNumber: res.data.user.phoneNumber,
                username: res.data.user.username,
                avatar: res.data.user.avatar,
                walletBalance: res.data.user.walletBalance,
              })
            );
            setRefresh(true);
          });
        })
        .catch((error) => {
          toast.error(error.response.data.error);
          setConfirmRemoveModal(false);
          setLoading(false);
          handleDisplay(0, 0, 0, 0, 1);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTransactions = async () => {
    try {
      await apiGet(`/api/getTransactions`)
        .then((res) => {
          setAllTransactions([...res.data.record].reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const getUserTransactions = async () => {
    try {
      await apiGet(`/api/getUserTransactions`)
        .then((res) => {
          setUserTransactions([...res.data.record].reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllWithdrawals = async () => {
    try {
      await apiGet(`/api/getAllWithdrawals`)
        .then((res) => {
          setAllWithdrawals([...res.data.withdrawals.rows].reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserWithdrawals = async () => {
    try {
      await apiGet(`/api/getUserWithdrawals`)
        .then((res) => {
          setUserWithdrawals([...res.data.withdrawals.rows].reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const sendOTP = async () => {
    try {
      await apiPatch(`/users/getOTP`)
        .then((res) => {
          toast.success(res.data.message);
          setDisabled(false);
        })
        .catch((err) => {
          toast.error(err.response.data.error);
          setDisabled(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const confirmUserTransaction = async (formData) => {
    try {
      const newData = {
        amountTransferred: Number(formData.amountToTransfer),
        email: formData.email,
        transactionID: formData.transactionID,
        otp: +formData.otp,
      };
      await apiPatch(`/users/creditWallet`, newData)
        .then((res) => {
          toast.success(res.data.message);
        })
        .then(async () => {
          await apiGet(`/api/getTransactions`)
            .then((res) => {
              setAllTransactions([...res.data.record].reverse());
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  const cancelUserTransaction = async (id) => {
    try {
      await apiPatch(`/api/cancelTransaction/${id}`)
        .then((res) => {
          toast.success(res.data.message);
        })
        .then(async () => {
          await apiGet(`/api/getTransactions`)
            .then((res) => {
              setAllTransactions([...res.data.record].reverse());
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  const getSingleUser = async (id) => {
    try {
      await apiGet(`/users/single-user/${id}`)
        .then((res) => {
          setSingleUser(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      await apiGet(`/users/getAllUsers`).then((res) => {
        setAllUsers(res.data.users.rows);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        modal,
        logout,
        addBank,
        loading,
        sidebarOpen,
        setSidebarOpen,
        refresh,
        sendOTP,
        getUsers,
        navLinks,
        withdraw,
        setModal,
        disabled,
        register,
        setLoading,
        removeBank,
        setRefresh,
        singleUser,
        setNavLinks,
        setDisabled,
        successModal,
        addBankState,
        bankToRemove,
        resetPassword,
        registerAdmin,
        handleDisplay,
        getSingleUser,
        setSingleUser,
        forgotPassword,
        updateUserInfo,
        allWithdrawals,
        userWithdrawals,
        setAddBankState,
        transferAirtime,
        setBankToRemove,
        allTransactions,
        setSuccessModal,
        singleUserBanks,
        userTransactions,
        updateUserAvatar,
        allUsers,
        setAllUsers,
        setAllWithdrawals,
        getUserWithdrawals,
        setAllTransactions,
        confirmRemoveModal,
        currentTransaction,
        getUserTransactions,
        cancelUserTransaction,
        setCurrentTransaction,
        confirmUserTransaction,
        getAllWithdrawals,
        setUserWithdrawals,
        setSingleUserBanks,
        getAllTransactions,
        getSingleUserBanks,
        setUserTransactions,
        setConfirmRemoveModal,
        user: state.user,
        token: localStorage.getItem("token"),
        isAuthenticated: state.isAuthenticated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === "undefined") {
    throw new Error("useAuth must be used within the auth provider");
  }
  return context;
};
export default AuthState;
