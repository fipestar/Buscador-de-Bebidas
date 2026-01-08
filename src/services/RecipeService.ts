import api from "../lib/axios";
import { CategoriesAPIResponseSchema, RecipeAPIResponseSchema, DrinksAPIResponseSchema} from "../utils/recipes-schema";
import type { SearchFilter } from "../types";


export default {
    async getCategories() {
        const url = '/list.php?c=list'
        const { data } = await api(url)
        // Validar con ZOD
        const result = CategoriesAPIResponseSchema.safeParse(data)
        if(result.success) {
            return result.data
        }
    },
    async searchRecipes(filters: SearchFilter) {
        const url = `/filter.php?c=${filters.category}&i=${filters.ingredient}`
        const { data } = await api(url)
        const result = DrinksAPIResponseSchema.safeParse(data)
        if(result.success) {
          return result.data
        }
    },
    async getRecipeById(id: SearchFilter['ingredient']) {
        const url = `/lookup.php?i=${id}`
        const { data } = await api(url)
        console.log('API Response:', data)
        console.log('First drink:', data.drinks[0])
        const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
        console.log('Validation result:', result)
        if(result.success) {
          return result.data
        }
    } 
}