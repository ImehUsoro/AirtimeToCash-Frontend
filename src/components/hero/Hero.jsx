import React from "react";
import { HeroStyles } from "./HeroStyles";
import CroppedImageDone from "../../assets/CroppedImageDone.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/authState";

const Hero = () => {
  const { user } = useAuth();

  return (
    <HeroStyles>
      <div className="banner-text">
        <h1>Surplus Airtime? Don’t worry we got you covered</h1>
        <p>
          Convert your airtime to cash in seconds. Easy transaction, seamless
          cashout in less than five seconds.
        </p>

        <Link
          to={
            user?.role === "user"
              ? "/user/dashboard"
              : user?.role === "admin"
              ? "admin/dashboard"
              : "/user/signup"
          }
        >
          <button className="banner-btn">
            {user ? "Welcome Back" : "Get Started"}
          </button>
        </Link>
      </div>
      <div className="banner-image">
        <img src={CroppedImageDone} alt="advert" />
      </div>
    </HeroStyles>
  );
};

export default Hero;
