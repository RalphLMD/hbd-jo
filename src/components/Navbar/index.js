import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'

import {animateScroll as scroll} from 'react-scroll'

import logo from '../../images/logo.png'

import { 
    Nav, 
    NavbarContainer, 
    NavLogo1,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks 
} from './NavbarElements'


const Navbar = ({ toggle }) => {

const [scrollNav, setScrollNav] = useState(false)
    
const changeNav = () => {
    if(window.scrollY >= 80) {
        setScrollNav(true)
    } else {
        setScrollNav(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, [])

const toggleHome = () => {
    scroll.scrollToTop();
}

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo1 src={logo} alt="logo" to="/" onClick={toggleHome}>
                </NavLogo1>

                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="messages"
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact="true"
                         offset={-80}>Messages</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="thanks"
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact="true"
                         offset={-80}>Thank You</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar