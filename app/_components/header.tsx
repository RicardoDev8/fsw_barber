"use client";


import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, User2Icon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import SideMenu from "./side-menu";
import logo from '../../public/Logo.png';

const Header = () => {

    return ( 
        <Card>
            <CardContent className="p-5 justify-between flex flex-row items-center" >
                <Link href="/" >
                    <Image src={logo} alt="FSW Barber" height={22} width={120} />
                </Link>

                <Sheet>
                    <SheetTrigger asChild >
                        <Button variant="outline" size="icon" className="h-8 w-8" >
                            <MenuIcon size={18} />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="p-0" >
                        <SideMenu/>
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
     );
}
 
export default Header;