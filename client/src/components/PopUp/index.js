
import React, { Fragment, useEffect, useState } from "react";
import {PopUpBg,PopUps,PopUpInside,PopUpGalleryContainer,left_arrowContainer,right_arrowContainer,right_arrow,left_arrow,PopUpGalleryImage,PopUpTestimonyIndexContainer,PopUpTestimony,PopUpTestimonyIndex,PopUpTestimonyContainer,PopUpName,PopUpInfo,PopUpInfoContainer, PopUpNameContainer, PopUpClose} from "./PopUpsElements"
import {SliderData} from "../PopUp/SliderData"
import {PopUp} from "./PopUpsElements"


export const Modal = ({ showModal, setShowModal}) => {

    const closeModal = () => {
      setShowModal(prev => !prev);
    }

    const [current, setCurrent] = useState(0);
    const length =4;

    const nextSlide= () => {
        setCurrent(current=== length - 1 ? 0: current+1)
    }
    const prevSlide = () =>{
        setCurrent(current===0 ? length-1:current-1)
    }

  return( <>{showModal ? (
    <PopUps>
    <PopUpInside>
        <PopUpNameContainer>
            <PopUpName> 
            <h2>Nombre_Alumno</h2>
            </PopUpName>
        </PopUpNameContainer>
        <PopUpInfoContainer>
            <PopUpInfo>
                <h3>Edad: </h3>
                <h3>Carrera: </h3>
                <h3>Pais de destino: </h3>
            </PopUpInfo>
        </PopUpInfoContainer>
        <PopUpTestimonyIndexContainer>
            <PopUpTestimonyIndex>
                <h3>Testimonio:</h3>
            </PopUpTestimonyIndex>
        </PopUpTestimonyIndexContainer>
        <PopUpTestimonyContainer>
            <PopUpTestimony>
                <h4>depósito de chata rraconsola dirigibl eramav olversed iarioIgl esiaExcel entecor tarcast ortira nocol onove ntajahereje p riv adobozaldis cosubma rinohi erbabrillan teretocol eccióngu rút ontobe bévendafilo sofíavolar compartimie ntoanteri ormanoos o pardojo ypo pbolsillop arális iscrimenBarber ofonético tugur ionegrod eshones toaudi orayo de lunar uborco maadvertenc iaacalo radamente </h4>
            </PopUpTestimony>
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
        <PopUpClose onClick={closeModal}> 
          X
        </PopUpClose>
    </PopUpInside>
    </PopUps>

  ): null}</>);
};
    
    
    