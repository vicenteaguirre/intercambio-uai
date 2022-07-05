import styled from "styled-components";

export const FormTitle = styled.h1`
    color: #009fe3;
    font-size: 36px;
    font-weight: 700;
    font-family: 'Bitter', serif;
    text-align: center;
    margin-left: 0px
    `
export const FormBox = styled.div`
    padding: 2em; 
    flex-direction: column;
    justify-content: center;
    width: 700px;

    `
export const TestimonioBox = styled.textarea`
height: 180px;    
font-size: 14px;
font-family: 'Bitter';
padding: 8px;
width: 550px;
margin: 10px;
margin-top: 20px;
background: white;
border: 1 px solid black;
border-radius: 3px;
::placeholder {
  color: black;
  opacity: 0.4;
  font-size: 13px;
}
`;

 export const FormSelect = styled.select`
  width: 270px;
  font-family: 'Bitter';
  height:35px;
  background: white;
  color: Black;
  padding: 8px;
  font-size: 13px;
  border: 2px solid black;
  margin-left: 10px;
  border-radius: 3px;
  margin-bottom: 8px;
  margin-top: 20px;
  

       option {
         color: black;
         background: white;
         font-size: 13px;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
         
       }
`;

export const FormText = styled.div`
    color: black;
    font-size: 14px;
   
    font-family: 'Bitter';
    text-align: left;
    
    margin-right: 1em;

    ` 

export const FormInput = styled.input`
    
    font-size: 14px;
    font-family: 'Bitter';
    padding: 8px;
    width: 250px;
    margin: 10px;
    margin-top: 20px;
    background: white;
    border: 1 px solid black;
    border-radius: 3px;
    ::placeholder {
      color: black;
      opacity: 0.4;
      font-size: 13px;
    }
  `;
  export const FormInput2 = styled.input`
    
    font-size: 12px;
    font-family: 'Bitter';
    padding: 8px;
    width: 550px;
    margin: 10px;
    height: 200px;
    background: white;
    border: 1 px solid black;
    border-radius: 3px;
    text-align: left;
    vertical-align: top;
    
    ::placeholder {
      color: black;
      opacity: 0.4;
      font-size: 13px;
      position: absolute;
    }
  `;

 export const FormButton = styled.button`
    border-radius: 8px;
    background-color: white;
    border: 2px solid black;
    box-shadow:  2.5px 2.5px 0px rgba(0,0,1.24), 0 10px 50px 0 rgba(0,0,0,0);
    color: black;
    padding: 5px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin-top: 80px;
    cursor: pointer;
    font-family: 'Bitter';
    display: block;
    margin-left: 500px;
    `
    export const FormContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: auto;
    max-width: 66rem;
    background: whitesmoke;
    border: 2px solid black;
    width: 100%;
    z-index: 1;
    height: auto;
    margin-bottom:2rem;
    `