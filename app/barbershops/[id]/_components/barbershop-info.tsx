"use client"; 

import { Button } from "@/app/_components/ui/button";

import Image from 'next/image';
import { ChevronsLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import { Barbershop } from "@prisma/client";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
    barbershop: Barbershop
}

const BarbershopInfo = ({barbershop}: BarbershopInfoProps) => {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    }

    return ( 
        <div>
        <div className="h-[250px] w-full relative" >
            <Button onClick={handleBackClick} size="icon" variant="outline" className="z-50 absolute top-2 left-2" >
                <ChevronsLeftIcon/>
            </Button>
            
            <Button size="icon" variant="outline" className="z-50 absolute top-2 right-2" >
                <MenuIcon/>
            </Button>
            <Image 
                className="opacity-75"
                src={barbershop.imageUrl} 
                fill 
                alt={barbershop.name} 
                style={{
                objectFit: 'cover'
                }} 
            />
        </div>

        <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary" >
            <h1 className="text-xl font-bold" >{barbershop.name}</h1>
            <div className="flex items-center gap-1 mt-2">
                <MapPinIcon className="text-primary" size={18} />
                <p className="text-sm" >{barbershop.address}</p>
            </div>
            <div className="flex items-center gap-1 mt-2">
                <StarIcon className="text-primary" size={18} />
                <p className="text-sm" >5,0 (747 avaliações)</p>
            </div>
        </div>
    </div>
     );
}
 
export default BarbershopInfo;