import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./authState";

const ProtectedAdminRoute = ({ children }) => {
  let { user } = useAuth();
  let location = useLocation();
  if (user.role === "user") {
    return <Navigate to="/user/login" state={{ from: location }} />;
  }
  return children;
};

export default ProtectedAdminRoute;
