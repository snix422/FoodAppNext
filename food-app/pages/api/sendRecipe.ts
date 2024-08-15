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

/*interface RequestBody {
  userId: string;
  meals: MealData[];
}*/

interface RequestBody {
  userId: string;
  meals: {
    sniadanieId?: number;
    drugieSniadanieId?: number;
    obiadId?: number;
    kolacjeId?: number;
  };
}

export default async function saveMeals(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userId, meals }: RequestBody = req.body;

      // Walidacja danych
      if (!userId || !meals) {
        return res.status(400).json({ message: 'Invalid data' });
      }

      const userIdInt = parseInt(userId, 10);

      // Tworzenie nowego rekordu
      await prisma.userDiet.create({
        data: {
          userId: userIdInt,
          sniadanieId: meals.sniadanieId || null,
          drugieSniadanieId: meals.drugieSniadanieId || null,
          obiadId: meals.obiadId || null,
          kolacjeId: meals.kolacjeId || null,
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