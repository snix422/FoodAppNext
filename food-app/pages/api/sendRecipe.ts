import prisma from '@/prisma/client';
import { MealType } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';


interface MealData {
  id: number;
  title: string;
  description: string;
  kcal: number;
  carbohydrates: number;
  protein: number;
  fat: number;
  preparation: string;
  ingredients: string[];
  type: MealType;
}

export default async function saveMeals(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userId, meals }: any = req.body;
      const sniadanie = meals.find((m:any) => m.type === "BREAKFAST");
      const secondSniadanie = meals.find((m:any)=> m.type === "SECOND_BREAKFAST");
      const lunch = meals.find((m:any)=> m.type === "LUNCH");
      const dinner = meals.find((m:any)=> m.type === "DINNER");
      console.log(sniadanie);
     
      if (!userId || !meals) {
        return res.status(400).json({ message: 'Invalid data' });
      }

      const userIdInt = parseInt(userId, 10);

    
      await prisma.userDiet.create({
        data: {
          userId: userIdInt,
          sniadanieId: sniadanie.id || null,
          drugieSniadanieId: secondSniadanie.id || null,
          obiadId: lunch.id || null,
          kolacjeId: dinner.id || null,
        },
      });

      return res.status(200).json({ message: 'Meals saved successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}