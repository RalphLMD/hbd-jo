import React, { useState} from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Tab from '../components/TabsSection'
import Footer from '../components/FooterSection'
import MessagesSection from '../components/MessagesSection'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
         <Navbar toggle={toggle} />
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <HeroSection/>
         <AboutSection/>
         <MessagesSection/>
         <Tab/>
         <Footer/>
        </>
    )
}

export default Home