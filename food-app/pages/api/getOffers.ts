import prisma from "@/prisma/client";
import { OfferType } from "@/types/types";
import type { NextApiResponse, NextApiRequest } from "next";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<OfferType[] | {error:string}>
) {
    try {
        const offers = await prisma.offer.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                price: true,
            },
        });
        console.log(offers);
        return res.status(200).json(offers);
    } catch (error:any) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}