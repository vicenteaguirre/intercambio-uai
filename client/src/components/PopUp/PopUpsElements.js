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
export const PopUpImgProfile = styled.div`
    border-radius: 5rem;
    width:3rem;
    height:3rem;
    border-width: 2rem;
    border-color: black;
    z-index:14;
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
    justify-content: center;
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
    max-height:10rem;
    min-width: 20rem;
    max-width:100%;
    border-radius: 1rem;
    background-size: cover;
`
export const GalleryContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    align-content: center;
    width:100%;
`
export const LeftArrow = styled.div`
    position:relative;
    z-index:11;
    cursor:pointer;
    user-select:none;
`
export const RightArrow = styled.div`
    position:relative;
    z-index:11;
    cursor:pointer;
    user-select:none;
`



