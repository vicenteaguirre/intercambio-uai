import React, { Fragment, useState} from "react";
import {PopUpBg, PopUp,PopUpContentContainer,PopUpGalleryContainer,PopUpImgProfile,PopUpGalleryImage,PopUpTestimony,PopUpTestimonyContainer,PopUpHeaderContainer,PopUpName,PopUpInfo ,PopUpInfoContainer, PopUpClose, PopUpClosePlace, GalleryContainer, LeftArrow, RightArrow,AdminManagmentSection,AdminManagment} from "./PopUpsElements"
import {SliderData} from "../PopUp/SliderData"
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"
import OutsideClickHandler from 'react-outside-click-handler';
import axios from 'axios';

export const Modal = ({ showModal, setShowModal, testimonio, showAdmin1, showAdmin2}) => {
    const length =5;
    const [current, setCurrent] = useState(0);

    const closeModal = () => {
      setShowModal(prev => !prev);
    }
    const nextSlide= () => {
        setCurrent(current=== length - 1 ? 0: current+1)
    }
    const prevSlide = () =>{
        setCurrent(current===0 ? length-1:current-1)
    }
    const config = {
        headers: { token: localStorage.getItem("token") }
    };
    const eliminarTestimonio = async () =>{
        console.log(localStorage.getItem("token"));
        const getAllApiUrl = `http://localhost:3001/delete/${testimonio._id}`;
        axios
        .delete(getAllApiUrl, config)
        .then((response) => {
          console.log(response.data)
          console.log("Eliminado")
        })
    }
    const publicarTestimonio = async () =>{
        const getAllApiUrl = `http://localhost:3001/up/${testimonio._id}`
        axios
        .put(getAllApiUrl, { state: "published" },config)
        .then((response) => {
          console.log(response.data)
          console.log("Actualizado")
        })
    }
    const bajarTestimonio = async () =>{
        const getAllApiUrl = `http://localhost:3001/up/${testimonio._id}`
        axios
        .put(getAllApiUrl, { state: "unpublished" },config)
        .then((response) => {
          console.log(response.data)
          console.log("Actualizado")
        })
    }
    return( <>{showModal ? (
        <PopUpBg>
            <OutsideClickHandler onOutsideClick={closeModal}>
            <PopUp>
                <PopUpContentContainer>

                    <PopUpClosePlace>
                        <PopUpClose onClick={closeModal}> X</PopUpClose>
                    </PopUpClosePlace>
                    <PopUpHeaderContainer>
                        <PopUpImgProfile
                        style={{backgroundImage: `url(${testimonio.imageProfile})`}}
                        ></PopUpImgProfile>
                        <PopUpInfoContainer>
                            <PopUpName>{testimonio.nombre_completo}</PopUpName>
                            <PopUpInfo>{testimonio.edad} años, Ing. Civil Industrial,</PopUpInfo>
                            <PopUpInfo>{testimonio.u_destino}, {testimonio.pais}.</PopUpInfo>
                            <PopUpInfo>{testimonio.contacto}.</PopUpInfo>
                        </PopUpInfoContainer>
                    </PopUpHeaderContainer>
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
                    {showAdmin1 ? (
                        <AdminManagmentSection>
                            <AdminManagment style={{backgroundColor: "#e2aaa2"}} onClick = {()=>{eliminarTestimonio(); closeModal()}}>Eliminar</AdminManagment>
                            <AdminManagment style={{backgroundColor: "#72bfa0"}} onClick = {()=>{publicarTestimonio(); closeModal()}} >Publicar</AdminManagment>    
                        </AdminManagmentSection>
                    ):null}
                    {showAdmin2 ? (
                        <AdminManagmentSection>
                            <AdminManagment style={{backgroundColor: "#e2aaa2"}} onClick = {()=>{eliminarTestimonio(); closeModal()}}>Eliminar</AdminManagment>
                            <AdminManagment style={{backgroundColor: "#fcac58"}} onClick = {()=>{bajarTestimonio(); closeModal()}} >Bajar</AdminManagment>
                        </AdminManagmentSection>
                    ):null}
                </PopUpContentContainer>
            </PopUp>
            </OutsideClickHandler> 
        </PopUpBg>     
    ): null}</>);
};