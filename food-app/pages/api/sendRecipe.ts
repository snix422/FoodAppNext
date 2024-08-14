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

interface RequestBody {
  userId: string;
  meals: MealData[];
}

export default async function saveMeals(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userId, meals }: RequestBody = req.body;
      console.log(userId);
      console.log(meals);

      // Walidacja danych
      if (!userId || !meals || !Array.isArray(meals)) {
        return res.status(400).json({ message: 'Invalid data' });
      }

      // Zapis do bazy danych
      await prisma.userMeal.upsert({
        where: { userId: parseInt(userId,10) },
        update: { meals: JSON.stringify(meals) }, // Przechowuje pełne dane posiłków jako JSON
        create: {
          userId: parseInt(userId,10),
          meals: JSON.stringify(meals), // Przechowuje pełne dane posiłków jako JSON
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
