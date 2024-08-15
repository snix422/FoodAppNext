import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth/next";
import { getSession } from "next-auth/react";


interface Token {
  id: string;
  email: string;
  role: string;
}

export default async function getYourDiet(req:NextApiRequest, res:NextApiResponse){
        // Pobierz sesję użytkownika
        /*const session = await getSession({ req }); // Użyj getSession z obiektem req

        console.log("Moja sesja", session);
       
        if (!session || !session.user?.id) {
          return res.status(401).json({ message: "Unauthorized" });
        }
    
        // Uzyskaj ID użytkownika z sesji
        const userId = session.user.id;
        const dietData = await prisma.userMeal.findMany({
          where: {
            userId: parseInt(userId, 10),
          },
        });*/
    
        //return res.status(200).json(dietData);
        if (req.method === 'GET') {
          try {
            const userId = req.query.userId as string;
      
            // Walidacja danych
            if (!userId) {
              return res.status(400).json({ message: 'User ID is required' });
            }
      
            const userIdInt = parseInt(userId, 10);
      
            // Pobranie danych posiłków dla danego użytkownika
            const userMeals = await prisma.userDiet.findMany({
              where: {
                userId: userIdInt,
              },
              include: {
                Meal_sniadanie: true,        // Pobiera szczegóły śniadania
                Meal_drugieSniadanie: true,  // Pobiera szczegóły drugiego śniadania
                Meal_obiad: true,            // Pobiera szczegóły obiadu
                Meal_kolacje: true,          // Pobiera szczegóły kolacji
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