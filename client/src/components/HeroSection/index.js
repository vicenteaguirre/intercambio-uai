import React from "react";
import { HeroContainer, HeroBg, HeroContent, HeroTitle } from "./HeroElements";

const HeroSection = () => {
  return (
     <>
        <HeroBg>
            <HeroContainer>
                <HeroTitle>Experiencias Internacionales</HeroTitle>
                <HeroContent>Conoce los testimonios de los alumnos que han experimentado el intercambio.</HeroContent>
            </HeroContainer>
        </HeroBg>
     </> 
  )
};

export default HeroSection;
