

import { Booking, Prisma } from "@prisma/client";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { format, isPast } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";


interface BookingItemProps {
    booking: Prisma.BookingGetPayload<{
        include: {
            service: true;
            barbershop: true;
        }
    }>
}


const BookingItem = ({booking}: BookingItemProps) => {
    return ( 
        <Card>
            <CardContent className="w-full p-5 flex justify-between" >
        {!booking ? (
            <h2>Não há agendamentos</h2>
        ) : (
            <div className="flex flex-col gap-2" >
            <Badge variant={
                isPast(booking.date) ? "secondary" : "default"
            } className="w-fit" >
                {isPast(booking.date) ? "Finalizado" : "Confirmado"}
            </Badge>
            <h2 className="font-bold" >{booking.service.name}</h2>
            <div className="flex items-center gap-2" >
                <Avatar className="h-6 w-6" >
                    <AvatarImage src={booking.barbershop.imageUrl} alt="avatar bardearia"/>
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>

                <h3 className="text-sm" >{booking.barbershop.name}</h3>
            </div>
        </div>
        )}

                <div className="flex flex-col items-center justify-center border-l border-solid border-secondary" >
                    <p className="text-sm capitalize" >{format(booking.date, "MMMM", {
                        locale: ptBR
                    })}</p>
                    <p className="text-2xl" >{format(booking.date, "dd")}</p>
                    <p className="text-sm" >{format(booking.date, "hh:mm")}</p>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BookingItem;