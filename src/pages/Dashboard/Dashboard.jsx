import React from "react";
import DashBoardContent from "../../components/dashboard-content/DashBoardContent";
import LoadingModal from "../../components/loading-modal/LoadingModal";
import NavBar from "../../components/navbar/NavBar";
import { useAuth } from "../../context/auth/authState";
import { BackDiv } from "../UpdateUser/UpdateUserStyles";
import { Container, DashboardStyle } from "./DashboardStyles";

const Dashboard = () => {
  const { modal, loading, setLoading } =
    useAuth();

  return (
    <DashboardStyle
      modalOn={modal ? true : false}
    >
      <NavBar dashboard />
      <BackDiv />
      <Container>
        <DashBoardContent />
      </Container>
      {loading && <LoadingModal />}
    </DashboardStyle>
  );
};

export default Dashboard;
