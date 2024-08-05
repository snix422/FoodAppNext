import prisma from "@/prisma/client";
import type { NextApiResponse, NextApiRequest } from "next";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;

    if (!id || Array.isArray(id)) {
        return res.status(400).json({ error: 'Invalid or missing ID' });
    }

    try {
        const post = await prisma.post.findUnique({
            where: { id: parseInt(id as string) },
            include: { author: true }, // Include the author data
        });

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        return res.status(200).json(post);
    } catch (error: any) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}