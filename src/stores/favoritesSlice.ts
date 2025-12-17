import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipeSlice, type RecipesSliceType } from "./recipeSlice";

export type FavoritesSliceType = {
    favorites: Recipe[];
    handleClickFavorite: (recipe: Recipe) => void;
    favoriteExists: (id: Recipe['idDrink']) => boolean;
    loadFromStorage: () => void;
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipesSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
    set((state) => {
        const exists = state.favorites.some(
            favorite => favorite.idDrink === recipe.idDrink
        )

        const updatedFavorites = exists
            ? state.favorites.filter(f => f.idDrink !== recipe.idDrink)
            : [...state.favorites, recipe]

        localStorage.setItem(
            'favorites',
            JSON.stringify(updatedFavorites)
        )

        return { favorites: updatedFavorites }
    })

    createRecipeSlice(set, get, api).closeModal()
}
,
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage : () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites) {
            set({favorites: JSON.parse(storedFavorites)})
        }
    }
})
