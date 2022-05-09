import styled from "styled-components";

export const TestimonioBg = styled.div`
    background-color: white;
    height: auto;
    width: auto;
    position: relative;
    top: -20px;
    margin-bottom: 10rem;
`
export const TestimonioHeaderContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction: row;
    align-items: center;
    margin-top: 4rem;


`
export const TestimonioHeader = styled.h2`
    text-align: center;
    font-family: "Bitter", serif;
    font-weight: 700;
    font-size: 25px;
    font-size: 1.5625rem;
    color:#009fe3;
`
export const Line = styled.span`
    background-color: #009fe3;
    content: '';
    position: relative;
    width: 35px;
    height: 4px;
    margin: 20px;

`
export const TestimoniosSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    margin-top: 4rem;

`
export const TestimonioContainer = styled.button`
    display: flex;
    background-color: grey;
    background-position: center;
    background-size:150%;
    background-repeat: no-repeat;
    border-radius: 2.5rem;
    border-color: #009fe3;
    justify-content: center;
    height: 200px;
    width: 250px;
    margin:1rem;
    align-items: center;
    &:hover{
        transform: scale(1.1);
    }
`

export const TestimonioContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;
    height:inherit;
    width: 80%;
    //background:linear-gradient(to top, rgba(31, 31, 31, 0.82), rgba(94, 85, 85, 0.11))

`

export const Nombre = styled.p`
    color: white;
    font-size: 1.2rem;
    text-shadow:-1px 1px 3px black;
    margin-bottom: 0.3rem;
`
export const Destino = styled.p`
    color: white;
    font-size: 0.9rem;
    text-shadow:-1px 1px 3px black;
    margin: 0;
`

export const LinkFormContainer = styled.div`
    margin-top: 2rem;

`
export const LinkForm = styled.p`
    color: black;

`

