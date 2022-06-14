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
    height: 50rem;
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
export const PopUpHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    width: 90%;
    max-height: 200px;
`
export const PopUpInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    margin-left: 2rem;


`
export const PopUpImgProfile = styled.div`
    display: flex;
    background-color: grey;
    background-position: center;
    background-size:150%;
    background-repeat: no-repeat;
    border-radius: 7rem;
    height: 200px;
    width:200px;
`

export const PopUpName = styled.h2`
    text-align: start;
    font-family: "Bitter", serif;
    font-weight: 700;
    font-size: 2rem;
    color: #545353;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 700;
`
export const PopUpInfo = styled.h3`
    text-align: left;
    color: #009fe3;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 1.4375rem;
    letter-spacing: 0.6px;
    text-rendering: optimizeLegibility!important;
    font-weight: 400;
    margin: 0;
`

export const PopUpTestimonyContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    width:40rem;
    margin-top: 1.3rem;
    min-height: 13rem;
`
export const PopUpTestimony = styled.p`
    color: #545353;
    text-align: justify;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    width: 100%;


`
//**********************************/
export const GalleryContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-evenly;
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
export const PopUpGalleryContainer = styled.div`
    height: 200px;
    top: 80px;
    right: 100px;
    width: 400px;
    display: over;
    justify-content: center;
    align-items:center;
    flex-flow: row wrap;
    margin-bottom: 20px;
    padding: 5px;
`

export const PopUpGalleryImage = styled.img`
    border: 3px solid #545353;
    width: 100%;
    max-height: 220px;
    border-radius: 1rem;
    background-size: cover;
`

export const AdminManagment = styled.button`
    background-color: #72bfa0;
    padding: 0.7rem;
    margin: 1rem;
`

export const AdminManagmentSection = styled.div`
    width:100%;
    height: 8rem;
    display:flex;
    justify-content: center;
    align-items: center;
    align-content: center;

`