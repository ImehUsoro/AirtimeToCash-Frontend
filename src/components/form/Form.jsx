import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth/authState";
import logo from "../../assets/Logo.svg";
import { BiArrowBack } from "react-icons/bi";
import { ForgotLink, SignUpLink } from "../../pages/SignUpPage/SignUpStyles";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

const Form = ({ loginPage, signup }) => {
  const [formData, setFormData] = useState({});
  const { register, login, disabled, setDisabled, loading, setLoading } =
    useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    setDisabled(true);

    if (loginPage) {
      login(formData);
    } else {
      register(formData);
    }
  };

  useEffect(() => {
    if (loginPage) {
      if (formData.userInfo && formData.password) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    } else {
      if (
        formData.firstName &&
        formData.lastName &&
        formData.username &&
        formData.email &&
        formData.password &&
        formData.confirmPassword
      ) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [formData]);

  return (
    <div className="container">
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={() => navigate("/")}
      />
      {!loginPage && (
        <div className="go-back">
          <BiArrowBack color={"#03435F"} />
          <button onClick={() => navigate("/")}>Go back</button>
        </div>
      )}

      <h2 className="create-text">
        {loginPage ? "Login" : "Create an account"}
      </h2>

      <form action="" className="form-group" onSubmit={handleSubmit}>
        {!loginPage && (
          <>
            <div>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                placeholder="User Name"
                name="username"
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        <div>
          <label htmlFor="email">
            {loginPage ? "Email or Username" : "Email"}
          </label>
          <input
            type={loginPage ? "text" : "email"}
            placeholder={loginPage ? "Email or Username" : "Email"}
            name={loginPage ? "userInfo" : "email"}
            onChange={handleChange}
            required
          />
        </div>

        {!loginPage && (
          <>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="phone"
                placeholder="Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        {!loginPage && (
          <>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        {loginPage && (
          <ForgotLink to={"/user/forgot-password"}>Forgot Password?</ForgotLink>
        )}

        <button type="submit" className="sign-up-btn" disabled={disabled}>
          {loginPage ? "Sign In" : "Sign Up"}
          {/* <Loader /> */}
        </button>
        <div className="loading">
          <PulseLoader color="#bf1567" size={10} loading={loading} />
        </div>
        {signup && (
          <p className="sign-in-text">
            Already have an account?{" "}
            <SignUpLink to={"/user/login"}>Sign in</SignUpLink>
          </p>
        )}
        {loginPage && (
          <p className="sign-in-text">
            Don't have an account?{" "}
            <SignUpLink to={"/user/signup"}>Sign up</SignUpLink>
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
