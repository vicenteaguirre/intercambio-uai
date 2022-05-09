import React, { Fragment } from "react";
import './App.css';
//components
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from "./components/Navbar/index"
import HeroSection from "./components/HeroSection";
import TestimonioSection from "./components/TestimonioSection";
import PopUpSection from "./components/PopUpSection";
import { SliderData } from "./components/PopUpSection/SliderData";






const App = () =>{
  return(
    <Router>
      <Navbar />
      <HeroSection />
      <TestimonioSection />
      <PopUpSection slides={SliderData} />
    </Router>
  )
}



export default App;

/*<form action="../../" method="post" className="form">
          <button type="submit">Connected?</button>
        </form>*/