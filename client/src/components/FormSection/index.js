import { React , useState} from "react";
import { FormBox, FormContainer, FormTitle, FormText, FormInput, FormSelect, TestimonioBox, FormButton  } from "./FormElements";
import axios from 'axios';

const FormSection = () => {
  const [nombreCompleto, setNombreCompleto] = useState([])
  const [edad, setEdad] = useState([])
  const [carrera, setCarrera] = useState([])
  const [uniDestino, setUniDestino] = useState([])
  const [pais, setPais] = useState([])
  const [testimonio, setTestimonio] = useState([])
  //const [imageProfile, setImageProfile] = useState([])

  const uploadForm = async () => {
    const getAllApiUrl = 'http://localhost:3001/crear-testimonio'
    console.log(nombreCompleto + edad);
    axios
    .post(getAllApiUrl, { 
      nombre_completo: "Vicente",
      edad: edad,
      carrera: carrera,
      u_destino: uniDestino,
      pais: pais,
      testimonio: testimonio
     }
     //file : imageProfile
    )
    .then((response) => {
      console.log(response.data)
      console.log("Creado")
    })
  }

  return (
      <> 
        <FormTitle>¡Cuentanos tu experiencia!</FormTitle>
        <FormContainer>
          <FormBox>
              <FormText>Nombre Completo:</FormText>
              <FormInput type="text" placeholder="Ingrese su nombre completo" onChange={(e) => {
                  setNombreCompleto(e.target.value);
               }}/>
              <FormText>Edad:</FormText><FormSelect onChange={(e) => {
                  setEdad(e.target.value);
               }}>
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
              
              <FormText>Carrera:</FormText>
              <FormSelect onChange={(e) => {
                  setCarrera(e.target.value);
               }}>
              <option value="" hidden></option>
              <option value="IngCiv">Ingenieria Civil</option>
              <option value="IngCom">Ingenieria Comercial</option>
              <option value="IngDis">Ingenieria en Diseño</option>
              <option value="Derecho">Derecho</option>
              <option value="Psico">Psicología</option>
              <option value="Periodis">Periodismo</option>
              </FormSelect>
              <FormText>Pais de Destino:</FormText><FormInput type="text" placeholder="Ingrese su pais de destino"/>
              <FormText>Universidad de Destino:</FormText><FormInput type="text" placeholder="Ingrese su Universidad de destino"/>
              <FormText>Correo:</FormText><FormInput type="email" placeholder="Ingrese su lugar de destino"/>

          </FormBox>
          
          <FormBox>
            <FormText>Testimonio:</FormText><TestimonioBox type="text" placeholder="Ingrese su testimonio... " onChange={(e) => {
                    setTestimonio(e.target.value);
                  }}/>
            <FormText>Ingrese imagenes y/o videos de su viaje:</FormText><FormInput name="Submit" type="file" onChange={(e) => {
                    //setImageProfile(e.target.value);
                  }}/>
        
            <FormButton onClick={uploadForm}>Listo</FormButton>
          </FormBox>

      </FormContainer>
      
      </> 
    )
  };
  
  export default FormSection;