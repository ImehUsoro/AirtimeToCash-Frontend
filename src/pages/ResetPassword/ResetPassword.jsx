import React, { useState } from "react";
import {
  ResetContent,
  ResetPasswordPage,
  RestFormContainer,
} from "./ResetPasswordStyle";
import logo from "../../assets/newLogo.svg";
import { useAuth } from "../../context/auth/authState";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [formData, setFormData] = useState("");
  const { resetPassword } = useAuth();
  const { id } = useParams();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(formData, id);
  };

  return (
    <ResetPasswordPage>
      <RestFormContainer>
        <ResetContent>
          <div className="logo-and-text">
            <img src={logo} alt="Airtime2CashLogo" />
            <p>
              Airtime<span>2Cash</span>
            </p>
          </div>
          <h2 className="reset-password">Reset Password</h2>

          <form action="" onSubmit={handleSubmit}>
            <div className="inputs-container">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="inputs-container">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="reset-password-btn">
              Reset Password
            </button>
          </form>
        </ResetContent>
      </RestFormContainer>
    </ResetPasswordPage>
  );
};

export default ResetPassword;
