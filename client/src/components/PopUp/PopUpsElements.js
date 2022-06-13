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
    width: 100%;
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
export const PopUpClosePlace =styled.div`
    position: relative;
    top: -5px;
    right: -340px;
`
export const PopUpClose = styled.button`


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
export const arrowsPlacementt = styled.div`
display:flex;
flex-direction: column;
justify-content:flex-start;
align-items: flex-start;
width:40rem;
`
export const left_arrow = styled.div`
    position:absolute;
    top:50%;
    right:32px;
    z-index:13;
    cursor:pointer;
    user-select:none;
`
export const right_arrow = styled.div`
    position:absolute;
    top:50%;
    z-index:13;
    cursor:pointer;
    user-select:none;
    border: 3px solid black;
    border-radius: 3rem;
`



