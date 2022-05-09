import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {TestimonioBg, TestimonioHeaderContainer, TestimonioHeader, TestimoniosSectionContainer, TestimonioContainer, TestimonioContent, Line, Nombre, Destino, LinkFormContainer,LinkForm} from "../TestimonioSection/TestimonioElements"

const serverApiUrl = 'http://localhost:3001/testimonios'


const TestimonioSection = () => {

    const [testimonio, setTestimonio] = useState([])

    const getTestimonio = async () => {
        console.log(serverApiUrl)
            try {
                const response = await fetch(serverApiUrl,)
                const jsonData = await response.json()
                console.log(response)

                setTestimonio(jsonData)
                console.log(jsonData[0])
            } catch (err) {
                console.error(err.message)
            }
    }
    useEffect(() => {
        getTestimonio()
    }, [])
    console.log("Testimonio: "+ testimonio)



    return (
        <>
        <TestimonioBg>
                <TestimonioHeaderContainer>
                    <Line></Line>
                    <TestimonioHeader>Testimonios</TestimonioHeader>
                    <Line></Line>
                </TestimonioHeaderContainer>
                <TestimoniosSectionContainer>{testimonio.map(testimonio => 
                    <TestimonioContainer key={testimonio._id} style={{backgroundImage: `url(${testimonio.imageProfile})`}}>
                        <TestimonioContent>
                            <Nombre>{testimonio.nombre_completo}</Nombre>
                            <Destino>{testimonio.u_destino},{testimonio.pais}</Destino>
                        </TestimonioContent>
                    </TestimonioContainer>
                    )}
                </TestimoniosSectionContainer>
                <LinkFormContainer>
                    <Link to="/form">
                        <LinkForm>¡Haz click aca para subir tu experiencia!</LinkForm>
                    </Link>
                </LinkFormContainer>
        </TestimonioBg>
        
        </>
    )
};

export default TestimonioSection;
