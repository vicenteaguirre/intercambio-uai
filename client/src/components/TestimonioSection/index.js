import React from "react";
import {TestimonioBg, TestimonioHeaderContainer, TestimonioHeader, TestimoniosSectionContainer, TestimonioContainer, TestimonioContent, Line, Nombre, Pais} from "../TestimonioSection/TestimonioElements"

const TestimonioSection = () => {
    return (
        <>
        <TestimonioBg>
                <TestimonioHeaderContainer>
                    <Line></Line>
                    <TestimonioHeader>Testimonios</TestimonioHeader>
                    <Line></Line>
                </TestimonioHeaderContainer>
                <TestimoniosSectionContainer>

                    <TestimonioContainer>
                        <TestimonioContent>
                            <Nombre>Vicente Aguirre</Nombre>
                            <Pais>España</Pais>

                        </TestimonioContent>
                    </TestimonioContainer>

                    <TestimonioContainer>
                        <TestimonioContent>
                            <Nombre>Francesco Andrade</Nombre>
                            <Pais>Italia</Pais>
                        </TestimonioContent>
                    </TestimonioContainer>

                    <TestimonioContainer>
                        <TestimonioContent>
                            <Nombre>Thomas During</Nombre>
                            <Pais>Inglaterra</Pais>
                        </TestimonioContent>
                    </TestimonioContainer>

                    <TestimonioContainer>
                        <TestimonioContent>
                            <Nombre>Elon Musk</Nombre>
                            <Pais>USA</Pais>
                        </TestimonioContent>
                    </TestimonioContainer>

                    <TestimonioContainer>
                        <TestimonioContent>Alumno5</TestimonioContent>
                    </TestimonioContainer>

                </TestimoniosSectionContainer>
        </TestimonioBg>
        
        </>
    )
};

export default TestimonioSection;
