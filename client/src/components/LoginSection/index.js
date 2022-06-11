import React, { useState } from "react";
import axios from 'axios';
import { LoginTitle, LoginBox, LoginButton, LoginInput, LoginText, LoginContainer  } from "./loginElements";

const validateUser = 'http://localhost:3001/login'

const LoginSection = () => {
   const [email, setEmail] = useState([])
   const [password, setPassword] = useState([])
   const [auth, setAuth] = useState(false)

   const handleLogin = async () => {
      axios
      .post(validateUser,{
         email:email,
         password:password
         }
      )
      .then((response) => { // El llamado a la API retorna el token.
         if(response.token) {
            localStorage.setItem("token", response.token);
            setAuth(true);
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
