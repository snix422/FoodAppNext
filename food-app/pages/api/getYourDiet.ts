import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";


interface Token {
  id: string;
  email: string;
  role: string;
}

export default async function getYourDiet(req:NextApiRequest, res:NextApiResponse){
      
        if (req.method === 'GET') {
          try {
            const userId = req.query.userId as string;
      
           
            if (!userId) {
              return res.status(400).json({ message: 'User ID is required' });
            }
      
            const userIdInt = parseInt(userId, 10);
      
            const userMeals = await prisma.userDiet.findMany({
              where: {
                userId: userIdInt,
              },
              include: {
                Meal_sniadanie: true,       
                Meal_drugieSniadanie: true,  
                Meal_obiad: true,           
                Meal_kolacje: true,         
              },
            });
      
            return res.status(200).json({ userMeals });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
          }
        } else {
          res.setHeader('Allow', ['GET']);
          return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
      
}