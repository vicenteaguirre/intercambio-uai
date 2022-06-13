import React, { useState } from "react";
import axios from 'axios';
import { LoginTitle, LoginBox, LoginButton, LoginInput, LoginText, LoginContainer  } from "./loginElements";
import { useNavigate } from "react-router-dom";

const validateUser = 'http://localhost:3001/login'

const LoginSection = () => {
   const [email, setEmail] = useState([])
   const [password, setPassword] = useState([])
   const navigate = useNavigate();


   const handleLogin = async () => {
      axios
      .post(validateUser,{
         email:email,
         password:password
         }
      )
      .then((response) => { // El llamado a la API retorna el token.
         console.log("Volviendo de la api")
         console.log(response)
         if(response.data) {
            console.log("Dentro del if")
            localStorage.setItem("token", response.data);
            navigate("/admin")
         }
      })
   }



   return (
      <> <LoginContainer>
         <LoginTitle>Iniciar Sesión</LoginTitle>  
         <LoginBox>
               <LoginText>Email:</LoginText>
               <LoginInput type="text" placeholder="Ingrese su Email"
               onChange={(e) => {
                  setEmail(e.target.value);
               }}/>
               <LoginText>Contraseña:</LoginText>
               <LoginInput type="password" placeholder="Ingrese su contraseña" 
               onChange={(e) => {
                  setPassword(e.target.value);
               }}/>
               <LoginButton onClick = {handleLogin} >Ingresar</LoginButton>
         </LoginBox>
         </LoginContainer>  
      
      </> 
   )
  };
  
  export default LoginSection;
