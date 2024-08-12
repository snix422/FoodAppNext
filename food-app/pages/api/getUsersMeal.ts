import prisma from '@/prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function getUserMeals(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { userId } = req.query;

      if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
      }

      const userMeal = await prisma.userMeal.findUnique({
        where: { userId: parseInt(userId as string) },
      });

      if (!userMeal) {
        return res.status(404).json({ message: 'User meals not found' });
      }

      // Parse JSON to get full meal data
      const meals = JSON.parse(userMeal.meals as string);

      return res.status(200).json({ meals });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
