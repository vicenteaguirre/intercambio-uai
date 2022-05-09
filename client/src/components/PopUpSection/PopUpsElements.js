import styled from "styled-components";

export const PopUpBg = styled.div`
    padding: 32px;
    display: flex;
    flex.direction: column;
    align-items: center;
    justify-content: center;
    min-height: 1vh;
    
`
export const PopUps = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

export const PopUpInside = styled.div`
    position: relative;
    padding: 350px;
    width: 100%;
    max-width: 640px;
    background-color: #FFF;
`
export const PopUpClose = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`

export const PopUpNameContainer = styled.div`
    position: absolute;
    display:flex;
    justify-content:center;
    flex-direction: row;
    align-items: center;
    margin-top: 0rem;
    top: 1px;
    left: 100px;
`

export const PopUpName = styled.h2`
    text-align: center;
    font-family: "Bitter", serif;
    font-weight: 700;
    font-size: 25px;
    font-size: 2rem;
    color:#009fe3;
    
`
export const PopUpInfoContainer = styled.div`
    position: absolute;
    display:flex;
    justify-content:center;
    flex-direction: row;
    align-items: center;
    margin-top: 0rem;
    top: 120px;
    left: 100px;
`
export const PopUpInfo = styled.h3`
    text-align: left;
    font-family: "Bitter", serif;
    font-weight: 700;
    font-size: 25px;
    font-size: 1.7rem;
    line-height: 30px;
`

export const PopUpTestimonyIndexContainer = styled.div`
    position: absolute;
    display:flex;
    justify-content:left;
    flex-direction: row;
    align-items: left;
    margin-top: 0rem;
    top: 305px;
    left: 100px;
`
export const PopUpTestimonyIndex = styled.h3`
    text-align: left;
    font-family: "Bitter", serif;
    font-weight: 700;
    font-size: 25px;
    font-size: 1.7rem;
    
`
export const PopUpTestimonyContainer = styled.div`
    position: absolute;
    display:flex;
    justify-content:left;
    flex-direction: row;
    align-items: left;
    margin-top: 0rem;
    top: 350px;
    left: 100px;
    right: 100px;
`
export const PopUpTestimony = styled.h4`
    text-align: left;
    font-family: "Bitter", serif;
    font-weight: 700;
    font-size: 20px;
    font-size: 1.5rem;
    max-width:1100px;
`
export const PopUpGalleryContainer = styled.div`
    position: absolute;
    height: 300px;
    top: 80px;
    right: 100px;
    width: 500px;
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
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: black;
    z-index: 10;
    cursor:pointer;
    user-select:none;
`
export const right_arrow = styled.button`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: black;
    z-index: 10;
    cursor:pointer;
    user-select:none;
    
`



