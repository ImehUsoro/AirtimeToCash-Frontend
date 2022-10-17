import React from "react";
import { AboutUsStyles } from "./AboutUsStyles";
import Login from "../../assets/Login.svg";
import Dashboard from "../../assets/Dashboard.svg";
import Spinning from "../../assets/Spinning.svg";
import Card from "../card/Card";
import CroppedTouchedPhone from "../../assets/CroppedTouchPhone.png";
import CarouselComponent from "../carousel/CarouselComponent";
import { Link } from "react-router-dom";
import CardText from "../../assets/CardText.svg";
import { CarouselStyles } from "./CarouselStyles";
import { useAuth } from "../../context/auth/authState";

const AboutUs = () => {
  const { user } = useAuth();

  return (
    <>
      <AboutUsStyles id="about-us">
        <div className="dir-one">
          <div className="border-div"></div>
          <div className="text-content">
            <h2>Change Surplus Airtime to Real Cash</h2>
            <p>In three simple steps, change airtime to cash</p>
          </div>
        </div>

        <div className="box-container">
          <Card
            image={Login}
            title="Login or Register"
            text="Get started immediately to experience hassle-free airtime to cash exchange."
            id="box-1"
            className="group-box"
          />
          <Card
            image={Dashboard}
            title="Deposit From Dashboard"
            text="Deposit surplus airtime by simply making a transfer from your device to your app wallet."
            id="box-2"
            className="group-box"
          />
          <Card
            image={Spinning}
            title="Convert"
            text="Enjoy the ease and convenience of converting your airtime to cash with prospective buyers."
            id="box-3"
            className="group-box"
          />
        </div>

        <div className="best-platform-section">
          <div className="first-section">
            <h3>The best platform for your convenient airtime exchange</h3>
            <p>
              Airtime to cash provides a platform for conducting seamless
              monetary exchange for excess airtime. We understand the hassle of
              finding buyers and have provided a perfect solution to this
              problem. Get started to experience the Magic!
            </p>

            <Link to={user ? "/user/dashboard" : "user/signup"}>
              <button>{user ? "Welcome Back" : "Get Started"}</button>
            </Link>
          </div>

          <div className="second-section">
            <img
              src={CroppedTouchedPhone}
              className="picture"
              alt="Hand Iphone"
            />
            <img src={CardText} className="card-text" alt="Success frame" />
          </div>
        </div>

        <div className="testimonial">
          <h3>Hear what our customers are saying</h3>
          <p>
            Read amazing testimonials from satisfied users all over the world.
          </p>
        </div>
      </AboutUsStyles>
      <CarouselStyles>
        <CarouselComponent />
      </CarouselStyles>
    </>
  );
};

export default AboutUs;
