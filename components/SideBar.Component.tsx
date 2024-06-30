'use client';

import React, { useState } from 'react';
import { NavbarComponent } from './Navbar.Component';
import {
    ChevronLeft,
    ChevronRight,
    LayoutDashboard,
    Settings,
    ShoppingCart,
    UserRound
  } from "lucide-react";
import { Button } from './ui/button';

import { useWindowWidth } from '@react-hook/window-size'

type Props = {}

export default function SidebarComponent({}: Props): React.ReactNode {
    
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const onlyWidth = useWindowWidth();
    const mobileWidth = onlyWidth < 840;
  
    function toggleSideBar(): void{
        setIsCollapsed(!isCollapsed);
    }

    return (
    <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24'>
        {!mobileWidth && (
            <div className='absolute right-[-20px] top-7'>
                {
                isCollapsed ? 
                <Button variant='secondary' className='rounded-full p-2' onClick={toggleSideBar}>
                    <ChevronRight/>
                </Button>
                :
                <Button variant='secondary' className='rounded-full p-2' onClick={toggleSideBar}>
                    <ChevronLeft/>
                </Button>
                }
            </div>
        )}
        <NavbarComponent
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
            {
                title: "Dashboard",
                href: '/',
                icon: LayoutDashboard,
                variant: "default"
            },
            {
                title: "Users",
                href: '/users',
                icon: UserRound,
                variant: "ghost",
            },
            {
                title: "Orders",
                href: "/orders",
                icon: ShoppingCart,
                variant: "ghost",
            },
            {
                title: "Settings",
                href: "/settings",
                icon: Settings,
                variant: "ghost",
            }
        ]}
        >
            {/* <Separator /> */}
        </NavbarComponent>        
    </div>
    )
}