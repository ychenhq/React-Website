import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SidebarWrapper, SidebarBtnWrap, SidebarRoute, SidebarLink, SidebarMenu } from './SideBarElement';

const SideBar = ({ isOpen, toggle }) => {
    return (

        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='home' onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Sign up
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SidebarBtnWrap>

            </SidebarWrapper>
        </SideBarContainer>

    )
}

export default SideBar
