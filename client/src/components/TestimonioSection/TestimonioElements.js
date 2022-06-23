import styled from "styled-components";

export const TestimonioBg = styled.div`
    background-color: white;
    height: 30rem;
    width: auto;
    position: relative;
`
export const TestimonioHeaderContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 4rem;
`
export const TestimonioHeader = styled.h2`
    text-align: center;
    font-family: "Bitter", serif;
    font-weight: 700;
    font-size: 25px;
    font-size: 1.5625rem;
    color:#545353;
`
export const SpanTitle = styled.span`
    background-color: #009fe3;
    content: '';
    position: relative;
    width: 35px;
    height: 4px;
    margin-top: 0;

`
export const TestimoniosSectionContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    row-gap: 5rem;
    width: 80%;
    margin: auto;

`
export const TestimonioContainer = styled.button`
    display: flex;
    flex-direction: row;
    background-color: grey;
    background-position: center;
    background-size:150%;
    background-repeat: no-repeat;
    border-radius: 0.6rem;
    border-color: #545353;
    border-width: 0.1rem;
    border-style: solid;
    align-items: flex-end;
    height: 200px;
    width: 250px;
    z-index: 8;
    &:hover{
        transform: scale(1.1);
    }
`

export const TestimonioContent = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: -0.4rem;
    width: 100%;
    padding-bottom: 0.8rem;
    height: 4rem;
`
export const SpanTestimonio = styled.span`
    background-color: #009fe3;
    content: '';
    position: relative;
    width: 6px;
    height: 100%;
    
`
export const TestimonioInfo= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    margin-left: 0.5rem;
`
export const Nombre = styled.p`
    margin: 0;
    text-align: start;
    color: white;
    font-size: 1.5625rem;
    text-shadow:-1px 1px 2px black;
    font-weight: 600;
    letter-spacing: 0.2px;
    font-family: "Bitter", serif;
    line-height: 1.75rem;

`
export const Info = styled.p`
    margin: 0;
    text-align: start;
    color: white;
    font-size: 0.8rem;
    text-shadow:-1px 1px 3px black;
    font-weight: 400;
    letter-spacing: 0.2px;
    font-family: "Bitter", serif;
    line-height: 1.75rem;
`

