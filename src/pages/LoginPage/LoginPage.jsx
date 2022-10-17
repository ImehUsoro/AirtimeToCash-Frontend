import React from "react";
import {
  FormContainerStyle,
  RegistrationPage,
} from "../SignUpPage/SignUpStyles";

import Form from "../../components/form/Form";

const LoginPage = () => {
  return (
    <RegistrationPage>
      <FormContainerStyle login>
        <Form loginPage />
      </FormContainerStyle>
    </RegistrationPage>
  );
};

export default LoginPage;
