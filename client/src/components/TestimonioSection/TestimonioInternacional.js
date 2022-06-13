import React, { Fragment, useEffect, useState } from "react";
import { Modal } from "../PopUp/index";
import {TestimonioBg, TestimonioHeaderContainer, TestimonioHeader, TestimoniosSectionContainer, TestimonioContainer, TestimonioContent, Line, Nombre, Destino} from "./TestimonioElements"
import axios from 'axios';

const serverApiUrl = 'http://localhost:3001/testimonio'

export const TestimonioInternacional = () => {
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
        console.log(serverApiUrl+"s-inter");
        axios
        .get(serverApiUrl+"s-inter")
        .then((response) => {
            setTestimonios(response.data)
        })
    }

    useEffect(() => {
        getAll()
    }, [])

    return (
        <>
        <TestimonioBg>
                <TestimonioHeaderContainer>
                    <TestimonioHeader>Estudiantes Internacionales</TestimonioHeader>
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
        </TestimonioBg>
        
        </>
    )
};
export default TestimonioInternacional;
