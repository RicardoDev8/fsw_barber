"use server";

import { revalidatePath } from "next/cache";
import { db } from "../_lib/prisma";


const cancelBooking = async (bookingId: string) => {
    return await db.booking.delete({
        where: {
            id: bookingId,
        }
    });

    revalidatePath("/bookings");
};
 
export default cancelBooking;