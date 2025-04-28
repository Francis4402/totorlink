"use client"

import { useUser } from '@/context/UserContext';
import { logout } from '@/services/AuthServices';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import LoginForm from '../modules/auth/login/LoginForm';

const AvatarMenu = () => {

    const {user, setIsLoading} = useUser();

    const handleLogout = () => {
        logout();
        setIsLoading(true);
    }

  return (
    <div>
        {
            user ? (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src={"https://github.com/shadcn.png"} />
                            <AvatarFallback>User</AvatarFallback>
                        </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="hover:bg-gray-200 duration-200 cursor-pointer">
                            <Link href="/">Home</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-200 duration-200 cursor-pointer">
                            <Link href="/student/dashboard/profile">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-200 duration-200 cursor-pointer">
                            <Link href="/student/dashboard">Dashboard</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem onClick={handleLogout}>
                            <LogOut />
                            <span>Log Out</span>
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </> 
            ) : (
                <LoginForm/>
            )
        }
    </div>
  )
}

export default AvatarMenu