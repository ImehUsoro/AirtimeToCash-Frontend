import React from "react";
import { AdminDashboardStyle } from "./AdminDashboardStyle";
import Admin from "../../components/admin/Admin";
import NavBar from "../../components/navbar/NavBar";

const AdminDashboard = () => {
  return (
    <AdminDashboardStyle>
      <NavBar dashboard adminDashboard />
      <Admin />
    </AdminDashboardStyle>
  );
};

export default AdminDashboard;
