import React from "react";
import AboutUs from "../../components/about-us/AboutUs";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import NavBar from "../../components/navbar/NavBar";
import { LandingPageStyles } from "./LandingPageStyles";

const LandingPage = () => {
  return (
    <LandingPageStyles>
      <NavBar landingPage />
      <Hero />
      <AboutUs />
      <Footer />
    </LandingPageStyles>
  );
};

export default LandingPage;
