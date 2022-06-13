import React, { useState } from "react";
import axios from 'axios';
import { LoginTitle, LoginBox, LoginButton, LoginInput, LoginText, LoginContainer  } from "../LoginSection/LoginElements";


const registerUser = 'http://localhost:3001/register'

const RegisterSection = () => {
        const [name, setName] = useState([])
        const [email, setEmail] = useState([])
        const [password, setPassword] = useState([])


    const handleRegister= async () => {
    axios
    .post(registerUser,{
        name:name,
        email:email,
        password:password
    })
    .then((response) => { 
        console.log("User registrado.")
    })
   }



    return (
        <>
            <LoginContainer>
                <LoginTitle>Registrar</LoginTitle>  
                <LoginBox>
                    <LoginText>Nombre:</LoginText>
                    <LoginInput type="text" placeholder="Ingrese su nombre"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}/>
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
                    <LoginButton onClick = {handleRegister} >Registrar</LoginButton>
                </LoginBox>
            </LoginContainer>  
      
      </> 
    )
};
  
  export default RegisterSection;
