import styled from "styled-components";

export const LoginTitle = styled.h1`
    color: black;
    font-size: 32px;
    font-weight: 700;
    font-family: 'Bitter', serif;
    text-align: left;
    `
export const LoginBox = styled.div`
    padding: 2em;
    background: whitesmoke;
    border: 2px solid black;
    flex-direction: column;
    justify-content: center;
    width: 700px;

    `
export const LoginText = styled.div`
    color: black;
    font-size: 18px;
    font-size: 1.125rem;
    font-family: 'Bitter';
    text-align: left;
    
    margin-right: 1em;
    `
export const LoginInput = styled.input`
    
    font-size: 14px;
    font-family: 'Bitter';
    padding: 8px;
    width: 450px;
    margin: 10px;
    background: white;
    border: 1 px solid black;
    border-radius: 3px;
    ::placeholder {
      color: black;
      opacity: 0.4;
      font-size: 13px;
    }
  `;

 export const LoginButton = styled.button`
    background-color: white;
    border: 2px solid black;
    box-shadow:  2.5px 2.5px 0px rgba(0,0,1.24), 0 10px 50px 0 rgba(0,0,0,0);
    color: black;
    padding: 5px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin-top: 2px;
    cursor: pointer;
    font-family: 'Bitter';
    display: block;
    margin-left: 380px;
    `
    export const LoginContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 400px;
    margin: auto;
    max-width: 66rem;
    
    width: 100%;
    z-index: 1;
    `