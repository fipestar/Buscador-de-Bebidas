import {z} from 'zod';

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const SearchFiltersSchema = z.object({
   ingredient: z.string(),
   category: z.string()
})

export const DrinkAPIResponse = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
})

export const DrinksAPIResponseSchema = z.object({
    drinks: z.array(DrinkAPIResponse)
})

export const RecipeAPIResponseSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  strInstructions: z.string(),
  strIngredient1: z.string().nullable().optional().or(z.literal('')),
  strIngredient2: z.string().nullable().optional().or(z.literal('')),
  strIngredient3: z.string().nullable().optional().or(z.literal('')),
  strIngredient4: z.string().nullable().optional().or(z.literal('')),
  strIngredient5: z.string().nullable().optional().or(z.literal('')),
  strIngredient6: z.string().nullable().optional().or(z.literal('')),
  strIngredient7: z.string().nullable().optional().or(z.literal('')),
  strIngredient8: z.string().nullable().optional().or(z.literal('')),
  strIngredient9: z.string().nullable().optional().or(z.literal('')),
  strIngredient10: z.string().nullable().optional().or(z.literal('')),
  strIngredient11: z.string().nullable().optional().or(z.literal('')),
  strIngredient12: z.string().nullable().optional().or(z.literal('')),
  strIngredient13: z.string().nullable().optional().or(z.literal('')),
  strIngredient14: z.string().nullable().optional().or(z.literal('')),
  strIngredient15: z.string().nullable().optional().or(z.literal('')),
  strMeasure1: z.string().nullable().optional().or(z.literal('')),
  strMeasure2: z.string().nullable().optional().or(z.literal('')),
  strMeasure3: z.string().nullable().optional().or(z.literal('')),
  strMeasure4: z.string().nullable().optional().or(z.literal('')),
  strMeasure5: z.string().nullable().optional().or(z.literal('')),
  strMeasure6: z.string().nullable().optional().or(z.literal('')),
  strMeasure7: z.string().nullable().optional().or(z.literal('')),
  strMeasure8: z.string().nullable().optional().or(z.literal('')),
  strMeasure9: z.string().nullable().optional().or(z.literal('')),
  strMeasure10: z.string().nullable().optional().or(z.literal('')),
  strMeasure11: z.string().nullable().optional().or(z.literal('')),
  strMeasure12: z.string().nullable().optional().or(z.literal('')),
  strMeasure13: z.string().nullable().optional().or(z.literal('')),
  strMeasure14: z.string().nullable().optional().or(z.literal('')),
  strMeasure15: z.string().nullable().optional().or(z.literal('')),
}).passthrough();