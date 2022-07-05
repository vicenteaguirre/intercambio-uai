import { Fragment, useEffect, useState } from "react";
import {TestimonioBg, TestimonioHeaderContainer, TestimonioHeader,SpanTitle, TestimoniosSectionContainer, TestimonioContainer, TestimonioContent, SpanTestimonio, TestimonioInfo, Nombre, Info} from "./TestimonioElements"
import { Modal } from "../PopUp/index";
import axios from 'axios';

const serverApiUrl = 'http://localhost:3001/testimonio'

export const TestimonioUAI = () => {
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
        console.log(serverApiUrl+"s-uai");
        axios
        .get(serverApiUrl+"s-uai")
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
                    <TestimonioHeader>Estudiantes UAI</TestimonioHeader>
                    <SpanTitle></SpanTitle>
                </TestimonioHeaderContainer>
                <TestimoniosSectionContainer>{testimonios.map(testimonio => 
                    <TestimonioContainer 
                    key={testimonio._id} 
                    style={{backgroundImage: `url(${testimonio.imageProfile})`}}
                    onClick={ () => {openModal(); getTestimonio(testimonio._id) }}>
                        <TestimonioContent>
                            <SpanTestimonio></SpanTestimonio>
                            <TestimonioInfo>
                                <Nombre>{testimonio.nombre_completo}</Nombre>
                                <Info>{testimonio.u_destino},{testimonio.pais}</Info>
                            </TestimonioInfo>
                        </TestimonioContent>
                    </TestimonioContainer>
                    )}
                </TestimoniosSectionContainer>
                <Modal showModal={showModal} setShowModal={setShowModal} testimonio={testimonio} showAdmin2={true}></Modal>
        </TestimonioBg>
        
        </>
    )
};
export default TestimonioUAI;
