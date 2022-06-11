import styled from "styled-components";

export const PopUpBg = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.6);
    z-index:10;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PopUp = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    height: 40rem;
`

export const PopUpContentContainer = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #FFF;
    width: 100%;
    padding: 3rem;
    padding-top: 1rem;

`
export const PopUpClose = styled.button`
    position: relative;
    &:hover{
        transform: scale(1.3);
    }
`
export const PopUpName = styled.h2`
    text-align: center;
    font-family: "Bitter", serif;
    font-weight: 700;
    font-size: 2.8rem;
    color:#009fe3;
    margin-top: 0;
    margin-bottom: 0;
`
export const PopUpInfo = styled.h3`
    text-align: left;
    font-family: "Bitter", serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 30px;
`

export const PopUpTestimonyContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: flex-start;
    width:40rem;
`
export const PopUpTestimony = styled.p`
    text-align: justify;
    font-family: "Bitter", serif;
    font-weight: 700;
    font-size: 1rem;
    width: 100%;
`
export const PopUpGalleryContainer = styled.div`
    height: 300px;
    top: 80px;
    right: 100px;
    width: 300px;
    display: over;
    justify-content: center;
    align-items:center;
    flex-flow: row wrap;
    margin-bottom: 20px;
    padding: 5px;
`
export const PopUpGalleryImage = styled.img`
    border: 3px solid black;
    max-height:80%;
    max-width:100%;
    border-radius: 1rem;
`

export const left_arrow = styled.button`

    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: black;
    z-index: 10;
    cursor:pointer;
    user-select:none;
    &:hover{
        transform: scale(1.3);
    }
`
export const right_arrow = styled.button`

    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: black;
    z-index: 10;
    cursor:pointer;
    user-select:none;
    &:hover{
        transform: scale(1.3);
    }
`



