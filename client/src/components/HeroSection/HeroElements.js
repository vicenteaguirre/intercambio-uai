import styled from "styled-components";
import image from "../../images/home.jpeg"


export const HeroBg = styled.div`
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    height: 500px;
    width: auto;
`
export const HeroContainer = styled.div`
    align-items: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 400px;
    margin: auto;
    max-width: 50rem;
    position: relative;
    width: 100%;
    z-index: 1;
`

export const HeroTitle = styled.h1`
    color: white;
    font-size: 40px;
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Bitter', serif;
    text-align: left;
    text-shadow:-1px 1px 3px black;
`
export const HeroContent = styled.p`
    color: white;
    font-size: 18px;
    font-size: 1.125rem;
    font-family: 'Bitter';
    text-align: left;
    text-shadow:-1px 1px 3px black;
`

