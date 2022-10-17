import React from "react";
import { useAuth } from "../../context/auth/authState";
import { ButtonStyle } from "./ButtonStyle";

const Button = () => {
  const { navLinks, setNavLinks } = useAuth();

  return (
    <ButtonStyle>
      {navLinks.sellAirtime
        ? "Sell Airtime"
        : navLinks.withdrawBalance
        ? "Withdraw"
        : navLinks.manageBankAccount
        ? "Add Bank"
        : null}
    </ButtonStyle>
  );
};

export default Button;
