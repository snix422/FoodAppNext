import prisma from "@/prisma/client";
import type { NextApiResponse, NextApiRequest } from "next";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const posts = await prisma.post.findMany({
            orderBy: {
              dataPublikacji: 'asc',
            },
            take: 3,
            include: {
              author: true,
            },
          });
        return res.status(200).json(posts);
    } catch (error:any) {
        return res.status(500).json(error);
    }
}