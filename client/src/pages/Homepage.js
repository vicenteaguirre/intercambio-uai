import React, { Fragment } from "react";
import HeroSection from "../components/HeroSection";
import TestimonioUAI from "../components/TestimonioSection/TestimonioUAI";
import TestimonioInternacional from "../components/TestimonioSection/TestimonioInternacional";
import Footer from "../components/Footer";
import LinkForm from "../components/LinkForm";


const Homepage = () => {
  return (
    <Fragment>
        <HeroSection/>
        <TestimonioUAI/>
        <TestimonioInternacional/>
        <LinkForm/>
        <Footer/>
    </Fragment>
  );
};

export default Homepage;

