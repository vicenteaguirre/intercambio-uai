import styled from "styled-components";

export const LogOutBg = styled.div`
background-size: cover;
background-position: center;
height: 50px;
width: auto;
z-index: 0;
`

export const LogOutButtonPlace =styled.div`
    position: absolute;
    top: 150px;
    right:40px;
    z-index: 9;
`
export const LogOutButton = styled.button`
display: center;
flex-direction: row;
background-color: cleargray;
border-radius: 0.6rem;
border-color: black;
height: 30px;
width: 100px;
&:hover{
    transform: scale(1.1);
}

`
