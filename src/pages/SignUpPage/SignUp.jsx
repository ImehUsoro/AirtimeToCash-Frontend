import { FormContainerStyle, RegistrationPage } from "./SignUpStyles";
import "react-toastify/dist/ReactToastify.css";
import Form from "../../components/form/Form";

function SignUp() {
  return (
    <RegistrationPage signup>
      <FormContainerStyle>
        <Form signup />
      </FormContainerStyle>
    </RegistrationPage>
  );
}

export default SignUp;
