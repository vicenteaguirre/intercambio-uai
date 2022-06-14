import { Fragment, useEffect, useState } from "react";
import {TestimonioBg, TestimonioHeaderContainer, TestimonioHeader,SpanTitle, TestimoniosSectionContainer, TestimonioContainer, TestimonioContent, SpanTestimonio, TestimonioInfo, Nombre, Info} from "./TestimonioElements"
import { Modal } from "../PopUp/index";
import axios from 'axios';

export const TestimonioAdmin = () => {
    const [testimonios, setTestimonios] = useState([])
    const [testimonio, setTestimonio] = useState([])
    const [showModal,setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    }

    const getTestimonio = (idTestimonio) => {
        const getAllApiUrl = 'http://localhost:3001/testimonio/'
        axios
        .get(getAllApiUrl+idTestimonio)
        .then((response) => {
            setTestimonio(response.data)
        })
    }

    const getAll = async () => {
        const getAllApiUrl = 'http://localhost:3001/admin'
        axios
        .get(getAllApiUrl)
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
                    <TestimonioHeader>Testimonios no publicados</TestimonioHeader>
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
                <Modal showModal={showModal} setShowModal={setShowModal} testimonio={testimonio} showAdmin={true}></Modal>
        </TestimonioBg>
        
        </>
    )
};
export default TestimonioAdmin;
