import React from "react";
import {PopUpBg,PopUps,PopUpInside, PopUpClose} from "../PopUpSection/PopUpsElements"
import {useState} from 'react';

function PopUp(props) {
    return ( props.trigger) ? (
      <div>
        {props.children}
      </div>
    ) :"";
  }
  
const PopUpSection = () => {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const trigger=false;
    return(
        <>
            <PopUpBg>
                <h1>Ejemplo Pop Up</h1>
                <button onClick={()=> setButtonPopUp(true)}>Probar PopUp</button>
                <PopUp trigger={buttonPopUp}>
                    <PopUps>
                    <PopUpInside>
                        <h3>Mi PopUp</h3>
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