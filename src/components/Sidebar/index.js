import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink 
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
   <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
    <Icon onClick={ toggle }>
        <CloseIcon />
    </Icon>

    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="about" onClick={ toggle }>About</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
            <SidebarLink to="messages" onClick={ toggle }>Messages</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
            <SidebarLink to="thanks" onClick={ toggle }>Thank You</SidebarLink>
        </SidebarMenu>
    </SidebarWrapper>
   </SidebarContainer>
  )
}

export default Sidebar