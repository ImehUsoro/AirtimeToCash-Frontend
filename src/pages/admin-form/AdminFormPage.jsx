import React from "react";
import AdminForm from "../../components/admin-form/AdminForm";
import { FormWrapperStyles } from "./AdminFormPageStyles";
import NavBar from "../../components/navbar/NavBar";
import { AdminFormPageStyles } from "./AdminFormPageStyles";

const AdminFormPage = () => {
  return (
    <AdminFormPageStyles>
      <NavBar dashboard setAdminPage />
      <FormWrapperStyles>
        <AdminForm />
      </FormWrapperStyles>
    </AdminFormPageStyles>
  );
};

export default AdminFormPage;
