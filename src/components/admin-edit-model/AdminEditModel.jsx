import React from "react";
import { useAuth } from "../../context/auth/authState";
import {
  AdminEditModelStyles,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
} from "./AdminEditModelStyles";

const AdminEditModel = ({ title, children, closeModal, setFormData }) => {
  const { setCurrentTransaction } = useAuth();
  return (
    <AdminEditModelStyles>
      <ModalContent>
        <ModalHeader>
          <p>{title}</p>
          <CloseButton
            onClick={(e) => {
              setFormData({});
              closeModal(e);
              setCurrentTransaction(null);
            }}
          >
            &times;
          </CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </AdminEditModelStyles>
  );
};

export default AdminEditModel;
