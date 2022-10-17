import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth/authState";
import { AdminFormStyles } from "./AdminFormStyles";

const AdminForm = () => {
  const { registerAdmin, disabled, setDisabled } = useAuth();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
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
  }, [formData]);

  return (
    <AdminFormStyles>
      <p>Add admin</p>

      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="first-name"
          placeholder="Enter first name"
          name="firstName"
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="last-name"
          placeholder="Enter last name"
          name="lastName"
          onChange={handleChange}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="role"
          placeholder="Enter username"
          name="username"
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />

        <label htmlFor="email">Phone Number</label>
        <input
          type="text"
          id="email"
          placeholder="Enter phone number"
          name="phoneNumber"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <button
          disabled={disabled}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            registerAdmin(formData);
          }}
        >
          Add
        </button>
      </form>
    </AdminFormStyles>
  );
};

export default AdminForm;
