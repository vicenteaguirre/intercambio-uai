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
    background-color: rgba(0,0,0,0.4);

    display: flex;
    justify-content: center;
    align-items: center;
`

export const PopUpInside = styled.div`
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: #FFF;
`
export const PopUpClose = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`