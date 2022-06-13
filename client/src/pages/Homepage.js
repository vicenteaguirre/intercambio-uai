import React, { Fragment } from "react";
import HeroSection from "../components/HeroSection";
import TestimonioSection from "../components/TestimonioSection";
import Footer from "../components/Footer";
import LinkForm from "../components/LinkForm";


const Homepage = () => {
  return (
    <Fragment>
        <HeroSection/>
        <TestimonioSection/>
        <LinkForm/>
        <Footer/>
    </Fragment>
  );
};

export default Homepage;

