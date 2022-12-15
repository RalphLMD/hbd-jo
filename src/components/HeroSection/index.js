import React from 'react'

/* Alternative way to import images */
import bg from '../../images/bg.gif'
import smfy from '../../images/smfy.png'

import paraluman from '../../files/paraluman.mp3'

import { 
    HeroContainer,
    HeroProfile,
    HeroBgContainer,
    HeroButton,
    HeroBg,
    HeroImg
} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBgContainer>
            <HeroBg src={bg} />
        </HeroBgContainer>
        <HeroProfile>
            <HeroImg src={smfy}/>
            <HeroButton href={require("../../files/Letter.pdf")} target="_blank">Read this</HeroButton>
        </HeroProfile>
    </HeroContainer>
  )
}

export default HeroSection