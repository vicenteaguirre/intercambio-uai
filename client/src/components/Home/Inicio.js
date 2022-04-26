import React, { Fragment, useState } from "react";


const pageTitle = {
    color:'black',
    fontFamily:"Bitter, Bold700",
    fontWeight:700,
    fontSize:"45px",
    marginBottom:"35px",
    marginTop:"0",
    display:"flex",
    justifyContent:"center",
}



//import Image from "react-native-svg";
const Inicio = () => {
    return(
        <Fragment>
            <div className = "background-image">
                <h1 style={pageTitle}>Experiencias Internacionales</h1>
                <p>En esta pagina podra encontrar testimonios de los alumnos que han podido vivir la experiencia de ir de intercambio afuera de chile.</p>
            </div>
        </Fragment>
    )
}
 
  

export default Inicio