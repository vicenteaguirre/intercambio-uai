import React, { Fragment } from "react";
import HeroSection from "../components/HeroSection";
import TestimonioSection from "../components/TestimonioSection";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <Fragment>
        <HeroSection/>
        <TestimonioSection/>
        <Footer/>
    </Fragment>
  );
};

export default Homepage;

