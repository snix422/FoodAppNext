import prisma from "@/prisma/client";
import type { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;

    if (!id || Array.isArray(id)) {
        return res.status(400).json({ error: 'Invalid or missing name' });
    }

    try {
        const meal = await prisma.meal.findUnique({
            where: { id: Number(id)},
        });

        if (!meal) {
            return res.status(404).json({ error: 'Meal not found' });
        }

        return res.status(200).json(meal);
    } catch (error: any) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}