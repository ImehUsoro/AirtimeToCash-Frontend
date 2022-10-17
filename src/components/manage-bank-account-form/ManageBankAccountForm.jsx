import { useAuth } from "../../context/auth/authState";
import AddBankForm from "../add-bank-form/AddBankForm";
import BankLists from "../bank-lists/BankLists";
import SuccessModal from "../success-modal/SuccessModal";
import { ManageBankAccountFormStyle } from "./ManageBankAccountFormStyle";

const ManageBankAccountForm = () => {
  const { successModal, addBankState, setAddBankState } = useAuth();

  return (
    <ManageBankAccountFormStyle>
      
      <div className="heading-container">
        <h2 className="main-dash-heading">Bank Account</h2>
        <h5 className="secondary-text" onClick={() => setAddBankState(false)}>
          View Bank account
        </h5>
      </div>
      {addBankState ? <AddBankForm /> : <BankLists />}

      {successModal && <SuccessModal />}
    </ManageBankAccountFormStyle>
  );
};

export default ManageBankAccountForm;
