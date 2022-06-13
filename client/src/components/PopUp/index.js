import React, { Fragment, useState} from "react";
import {PopUpBg, PopUp,PopUpContentContainer,PopUpGalleryContainer,PopUpImgProfile,PopUpGalleryImage,PopUpTestimony,PopUpTestimonyContainer,PopUpName,PopUpInfo , PopUpClose, PopUpClosePlace, GalleryContainer, LeftArrow, RightArrow} from "./PopUpsElements"
import {SliderData} from "../PopUp/SliderData"
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"
import OutsideClickHandler from 'react-outside-click-handler';

export const Modal = ({ showModal, setShowModal, testimonio}) => {
    const length =5;
    const [current, setCurrent] = useState(0);
    //const [testimonio, setTestimonio] = useState([]);

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
            <OutsideClickHandler onOutsideClick={closeModal}>
            <PopUp>
                <PopUpContentContainer>
                    <PopUpClosePlace>
                        <PopUpClose onClick={closeModal}> X</PopUpClose>
                    </PopUpClosePlace>
                    <PopUpImgProfile></PopUpImgProfile>
                    <PopUpName>{testimonio.nombre_completo}</PopUpName>
                    <PopUpInfo>{testimonio.edad}, {testimonio.u_destino}, {testimonio.pais}</PopUpInfo>
                    <PopUpTestimonyContainer>
                        <PopUpTestimony>{testimonio.testimonio}</PopUpTestimony>
                    </PopUpTestimonyContainer>   
                    <GalleryContainer>
                    <LeftArrow>
                        <FaArrowAltCircleLeft onClick={prevSlide}></FaArrowAltCircleLeft>
                    </LeftArrow>         
                    <PopUpGalleryContainer>
                        {SliderData.map((slide,index)=> {
                            return(
                                <div className={index===current ? "slide active":"slide"} key={index} >
                                    {index === current && (<PopUpGalleryImage src={slide.image} alt= "travel image" className="PopUpGalleryImage"/>)}
                                </div>
                            )   
                        })}
                        

                    </PopUpGalleryContainer>
                    <RightArrow>
                        <FaArrowAltCircleRight onClick={nextSlide}></FaArrowAltCircleRight>
                    </RightArrow>
                    </GalleryContainer>
                </PopUpContentContainer>
            </PopUp>
            </OutsideClickHandler> 
        </PopUpBg>     
    ): null}</>);
};
    
    
    