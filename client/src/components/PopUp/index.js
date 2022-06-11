
import React, { Fragment, useState} from "react";
import {PopUpBg, PopUp,PopUpContentContainer,PopUpGalleryContainer,PopUpGalleryImage,PopUpTestimony,PopUpTestimonyContainer,PopUpName,PopUpInfo , PopUpClose} from "./PopUpsElements"
import {SliderData} from "../PopUp/SliderData"
import axios from 'axios';



const serverApiUrl = 'http://localhost:3001/testimonio/'

export const Modal = ({ showModal, setShowModal, idTestimonio}) => {
    const length =4;
    const [current, setCurrent] = useState(0);

    const getTestimonio = async () => {
        axios
            .get(serverApiUrl+idTestimonio)
            .then((response) => { 
                setTestimonio(response.data)
            })
    }

    const [testimonio, setTestimonio] = useState()

    const closeModal = () => {
      setShowModal(prev => !prev);
    }
    const nextSlide= () => {
        setCurrent(current=== length - 1 ? 0: current+1)
    }
    const prevSlide = () =>{
        setCurrent(current===0 ? length-1:current-1)
    }
    
    return( <>{showModal ? (
        <PopUpBg>
            <PopUp>
                <PopUpContentContainer>
                    <PopUpName>Vicente Aguirre</PopUpName>
                    <PopUpInfo>21, Ing. Civil Industrial, España</PopUpInfo>
                    <PopUpTestimonyContainer>
                        <PopUpTestimony>Depósito de chata rraconsola dirigibl eramav olversed iarioIgl esiaExcel entecor tarcast ortira nocol onove ntajahereje p riv adobozaldis cosubma rinohi erbabrillan teretocol eccióngu rút ontobe bévendafilo sofíavolar compartimie ntoanteri ormanoos o pardojo ypo pbolsillop arális iscrimenBarber ofonético tugur ionegrod eshones toaudi orayo de lunar uborco maadvertenc iaacalo radamente.</PopUpTestimony>
                    </PopUpTestimonyContainer>    
                    <PopUpGalleryContainer>
                        {SliderData.map((slide,index)=> {
                            return(
                                <div className={index===current ? "slide active":"slide"} key={index} >
                                    {index === current && (<PopUpGalleryImage src={slide.image} alt= "travel image" className="PopUpGalleryImage"/>)}
                                </div>
                            )   
                        })}
                        <left_arrow onClick={prevSlide}> prev </left_arrow>
                        <right_arrow onClick={nextSlide}> next </right_arrow>
                    
                    </PopUpGalleryContainer>
                    <PopUpClose onClick={closeModal}> X</PopUpClose>
                </PopUpContentContainer>
            </PopUp> 
        </PopUpBg>     
    ): null}</>);
};
    
    
    