import React, { Fragment } from "react";

import { PopUpBackground ,PopUpContainer, PopUpContent } from "../PopUp/PopUpElements"


export const Modal = ({ showModal, setShowModal}) => {
  

  return( <>{showModal ? (
    <PopUpBackground>
      <PopUpContainer>
        <PopUpContent>
          PopUp
        </PopUpContent>
      </PopUpContainer>
    </PopUpBackground>
  ): null}</>);
};
    
    
    