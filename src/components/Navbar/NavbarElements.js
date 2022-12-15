import styled from 'styled-components'
/* import { Link as LinkRoute } from 'react-router-dom' */
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#ffffff' : 'transparent')};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: ${({ scrollNav }) => (scrollNav ? '2px solid #D34649 ' : 'transparent')};

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo1 = styled.img`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 600px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000000;

        &:hover {
        color: #D34649;
        transition: 0.3s ease-in-out;
        }
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    margin-right: -22px;

    @media screen and (max-width: 600px){
        display: none;
    }
`

export const NavItem = styled.li`
    text-decoration: none;
    list-style-type: none;
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &.active {
        border-bottom: 3px solid #D34649;
    }

    &:hover {
        color: #D34649;
        transition: 0.3s ease-in-out;
    }
`