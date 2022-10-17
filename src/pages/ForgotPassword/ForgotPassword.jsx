import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth/authState";

import {
  ForgetPasswordPage,
  ForgotPasswordForm,
  HeaderLink,
} from "./ForgotPasswordStyles";

const ForgotPassword = () => {
  const [formData, setFormData] = useState("");
  const { forgotPassword } = useAuth();
  const location = useLocation();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    forgotPassword(location, formData);
  };

  return (
    <ForgetPasswordPage>
      <ForgotPasswordForm>
        <div className="forgot-section">
          <h1 className="main-text">Forgot Password</h1>
          <p className="forgot-section-subtext">
            Enter the email associated with your account and we'll send an email
            with instruction to reset your password
          </p>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your Email"
            />
            <button type="submit" className="reset-btn">
              Reset password
            </button>
            <HeaderLink secondary={"true"} to={"/user/login"}>
              <button className="back-btn">Back to Login</button>
            </HeaderLink>
          </form>
        </div>
      </ForgotPasswordForm>
    </ForgetPasswordPage>
  );
};

export default ForgotPassword;
