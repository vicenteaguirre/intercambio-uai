import React from "react";
import { FormBox, FormContainer, FormTitle, FormBox2, FormText, FormInput, FormSelect,  FormInput2, TestimonioBox, FormButton  } from "./FormElements";
import ReactDOM from "react-dom";
import { useState } from "react";
import { render } from 'react-dom';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const container = document.getElementById("root");
const root = createRoot(container);

const FormSection = () => {
    return (
       <> 
          <FormTitle>¡Cuentanos tu experiencia!</FormTitle>
          <FormContainer>
            <FormBox>
                <FormText>Nombre Completo:</FormText><FormInput type="text" placeholder="Ingrese su nombre completo"/>
                <FormText>Edad:</FormText><FormSelect>
                <option value="" hidden></option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25+">25+</option>
                </FormSelect>
                
                <FormText>Carrera:</FormText><FormSelect>
                <option value="" hidden></option>
                <option value="IngCiv">Ingenieria Civil</option>
                <option value="IngCom">Ingenieria Comercial</option>
                <option value="IngDis">Ingenieria en Diseño</option>
                <option value="Derecho">Derecho</option>
                <option value="Psico">Psicología</option>
                <option value="Periodis">Periodismo</option>
                
                </FormSelect>
                <FormText>Tipo de estudiante:</FormText><FormSelect>
                <option value="" hidden></option>
                <option value="UAI">Universidad Adolfo Ibañez</option>
                <option value="Internacional">Internacional</option>
                </FormSelect>
                <FormText>Universidad de Destino:</FormText><FormInput type="text" placeholder="Ingrese su lugar de destino"/>
            </FormBox>
            
            <FormBox>
            <FormText>Testimonio:</FormText><TestimonioBox type="text" placeholder="Ingrese su testimonio..."/>
            <FormText>Ingrese imagenes y/o videos de su viaje:</FormText><FormInput name="Submit" type="file" />
        
            <FormButton>Listo</FormButton>
            </FormBox>

        </FormContainer>
       
       </> 
    )
  };
  
  export default FormSection;