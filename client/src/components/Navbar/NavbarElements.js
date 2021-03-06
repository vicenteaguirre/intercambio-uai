import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

//import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #1d1e20;
    height: 110px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

`
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left:24px;
    font-weight: bold;
    text-decoration: none;

`





