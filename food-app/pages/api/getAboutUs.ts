import prisma from "@/prisma/client";
import type { NextApiResponse, NextApiRequest } from "next";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const data = await prisma.aboutUs.findFirst(); // Pobiera pierwszy rekord bez określonych kryteriów

        if (!data) {
            return res.status(404).json({ error: 'Record not found' });
        }

        return res.status(200).json(data);
    } catch (error: any) {
        return res.status(500).json(error);
    }
}