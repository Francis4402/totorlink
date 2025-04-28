import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Bot, Settings, SquareTerminal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import NavMain from './navmain';
import { NavUser } from './nav-user';

const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/student/dashboard",
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: "Shop",
        url: "/student/shop/products",
        icon: Bot,
        items: [
          {
            title: "Manage Products",
            url: "/student/shop/products",
          },
          {
            title: "Manage Categories",
            url: "/student/shop/category",
          },
          {
            title: "Manage Brands",
            url: "/student/shop/brand",
          },
        ],
      },
  
      {
        title: "Settings",
        url: "#",
        icon: Settings,
        items: [
          {
            title: "Profile",
            url: "/student/profile",
          },
        ],
      },
    ],
  };

const AppSidebar = ({...props} : React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible='icon' {...props}>
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size={"lg"} asChild>
                        <Link href={"/"}>
                            <div className='flex items-center justify-center'>
                            <Image 
                                src={'https://r.mobirisesite.com/1252901/assets/images/g8a76ea9448036ea7c8e3e8556170-h_m7qbhjee.png'} 
                                alt="logo" 
                                width={50} 
                                height={50} 
                                className="rounded-full"
                            />
                            </div>
                            <div className='grid flex-1 text-left text-sm leading-tight'>
                                <h2 className='font-bold text-xl'>TutorLink</h2>
                            </div>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
            <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarFooter>
            <NavUser/>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar