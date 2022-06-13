import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../PopUp/index";
import {TestimonioBg, TestimonioHeaderContainer, TestimonioHeader, TestimoniosSectionContainer, TestimonioContainer, TestimonioContent, Line, Nombre, Destino, LinkFormContainer,LinkForm} from "../TestimonioSection/TestimonioElements"
import axios from 'axios';

const serverApiUrl = 'http://localhost:3001/testimonio'

export const TestimonioSection = (props) => {
    const [testimonios, setTestimonios] = useState([])
    const [testimonio, setTestimonio] = useState([])
    const [showModal,setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    }

    const getTestimonio = (idTestimonio) => {
        console.log(serverApiUrl+"/"+idTestimonio)
        axios
        .get(serverApiUrl+"/"+idTestimonio)
        .then((response) => {
            setTestimonio(response.data)
        })
    }

    const getAll = async () => {
        console.log(serverApiUrl+"s")
            try {
                const response = await fetch(serverApiUrl+"s",)
                const jsonData = await response.json()
                console.log(response)

                setTestimonios(jsonData)
                console.log(jsonData[0])
            } catch (err) {
                console.error(err.message)
            }
    }

    useEffect(() => {
        getAll()
    }, [])

    return (
        <>
        <TestimonioBg>
                <TestimonioHeaderContainer>
                    <TestimonioHeader>Testimonios</TestimonioHeader>
                    <Line></Line>
                </TestimonioHeaderContainer>
                <TestimoniosSectionContainer>{testimonios.map(testimonio => 
                    <TestimonioContainer 
                    key={testimonio._id} 
                    style={{backgroundImage: `url(${testimonio.imageProfile})`}}
                    onClick={ () => {openModal(); getTestimonio(testimonio._id) }}>
                        <TestimonioContent>
                            <Nombre>{testimonio.nombre_completo}</Nombre>
                            <Destino>{testimonio.u_destino},{testimonio.pais}</Destino>
                        </TestimonioContent>
                    </TestimonioContainer>
                    )}
                </TestimoniosSectionContainer>
                <Modal showModal={showModal} setShowModal={setShowModal} testimonio={testimonio}></Modal>
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
