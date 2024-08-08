import { MealType } from "@prisma/client";

export interface OfferType {
    id: number;
    title: string;
    description: string;
    price: number; // Upewnij się, że `price` jest opcjonalne lub może być null
}

export const MealTypeTranslation: Record<MealType, string> = {
    [MealType.BREAKFAST]: 'Śniadanie',
    [MealType.SECOND_BREAKFAST]: 'Drugie Śniadanie',
    [MealType.LUNCH]: 'Obiad',
    [MealType.DINNER]: 'Kolacja'
  };

export interface Meal {
    id:number,
    title:string,
    description:string,
    kcal:number,
    carbohydrates:number,
    protein:number,
    fat:number,
    preparation:string,
    ingredients:string[],
    type:MealType,
    imageUrl: string
}

export interface MealsStateRedux {
    meals: Meal[];
    filteredMeals: Meal[];
    searchTerm: string;
    mealType: MealType | '';
  }

  export interface LoginForm {
    email:string
    password: string,
  }

  export interface RegisterForm {
    email:string,
    password:string,
    confirmPassword:string
  }