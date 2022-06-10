import React from "react";
import { LoginTitle, LoginBox, LoginButton, LoginInput, LoginText, LoginContainer  } from "./loginElements";
import ReactDOM from "react-dom";
import { useState } from "react";

const LoginSection = () => {
    return (
       <> <LoginContainer>
          <LoginTitle>Iniciar Sesión</LoginTitle>  
          <LoginBox>
              
                  <LoginText>Email:</LoginText><LoginInput type="text" placeholder="Ingrese su Email"/>
                  <LoginText>Contraseña:</LoginText><LoginInput type="password" placeholder="Ingrese su contraseña"/>
                  
                  <LoginButton>Ingresar</LoginButton>
          </LoginBox>
          </LoginContainer>  
       
       </> 
    )
  };
  
  export default LoginSection;
