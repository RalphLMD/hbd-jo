import React from 'react'

import {
    FooterContainer,
    WebsiteRights
} from './FooterElements.js'

const Footer = () => {
    return (
      <FooterContainer>
         <WebsiteRights>Jo © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
      </FooterContainer>
    )
  }
  
  export default Footer