import React from "react";
import { LoadingModalStyle } from "./LoadingModalStyle";
import BounceLoader from "react-spinners/BounceLoader";
import { useAuth } from "../../context/auth/authState";

const LoadingModal = () => {
  const { loading } = useAuth();
  return (
    <LoadingModalStyle>
      <BounceLoader
        color={"#bf1567"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoadingModalStyle>
  );
};

export default LoadingModal;
