import React,{useState} from "react";
import {PopUpBg,PopUps,PopUpInside,PopUpGalleryContainer,left_arrowContainer,right_arrowContainer,right_arrow,left_arrow,PopUpGalleryImage,PopUpTestimonyIndexContainer,PopUpTestimony,PopUpTestimonyIndex,PopUpTestimonyContainer,PopUpName,PopUpInfo,PopUpInfoContainer, PopUpNameContainer, PopUpClose} from "../PopUpSection/PopUpsElements"
import {SliderData} from "../PopUpSection/SliderData"
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

function PopUp(props) {
    return ( props.trigger) ? (
      <div>
        {props.children}
      </div>
    ) :"";
  }
const PopUpSection = ({slides}) => {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const trigger=false;
    
    const [current, setCurrent] = useState(0);
    const length =slides.length;

    const nextSlide= () => {
        setCurrent(current=== length - 1 ? 0: current+1)
    }
    const prevSlide = () =>{
        setCurrent(current===0 ? length-1:current-1)
    }

    

    if(!Array.isArray(slides) || slides.length <=0){
        return null;
    }


    return(
        <>
            <PopUpBg>
                <h1>Ejemplo Pop Up</h1>
                <button onClick={()=> setButtonPopUp(true)}>Probar PopUp</button>
                <PopUp trigger={buttonPopUp}>
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
                            <FaArrowAltCircleLeft className= {left_arrow} onClick={prevSlide}/>
                          
                            <FaArrowAltCircleRight className= {right_arrow} onClick={nextSlide}/>
                        </PopUpGalleryContainer>
                        <PopUpClose> 
                        <button onClick={()=> setButtonPopUp(false)} >X</button>
                        </PopUpClose>
                    </PopUpInside>
                    </PopUps>
                </PopUp>
            </PopUpBg>
        
        
        
        </>
    )

};


export default PopUpSection;