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
    try {
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
        const {id} = req.query;
      
        if (Array.isArray(id) || typeof id !== 'string') {
          return res.status(400).json({ message: "Invalid or missing ID" });
      }
        const dietData = await prisma.userMeal.findMany({
          where: {
            userId: parseInt(id, 10),
          },
        });
        return res.status(200).json(dietData);
      } catch (error) {
        console.error("Error retrieving diet data:", error);
        return res.status(500).json({ message: "Internal server error" });
      }
}