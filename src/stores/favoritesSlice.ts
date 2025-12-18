import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipeSlice, type RecipesSliceType } from "./recipeSlice";
import { type NotificationSliceType } from "./notificationSlice";

export type FavoritesSliceType = {
    favorites: Recipe[];
    handleClickFavorite: (recipe: Recipe) => void;
    favoriteExists: (id: Recipe['idDrink']) => boolean;
    loadFromStorage: () => void;
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(fav => fav.idDrink !== recipe.idDrink)
            }))

            get().showNotification({
                text: "Receta eliminada de favoritos",
                error: false
            })
       } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))

            get().showNotification({
                text: "Receta añadida a favoritos",
                error: false
            })
}

        createRecipeSlice(set, get, api).closeModal()
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
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
