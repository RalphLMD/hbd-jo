import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';

import { Link as LinkScroll } from 'react-scroll'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;

    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`

export const CloseIcon = styled(FaTimes)`
    color: #ffffff;

    &:hover {
        color: #D34649;
        transition: 0.1s ease-in-out;
        border: 2px solid;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: transparent;
    font-size: 2rem;
    outline: none;
    cursor: pointer;
`

export const SidebarWrapper = styled.div`
    color: #ffffff;
`

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 5rem;

    @media screen and (max-width: 600px) {

    }
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.3s ease-in-out;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        color: #D34649;
        transition: 0.3s ease-in-out;
    }
`

