import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {createRecipesSlice, type RecipesSlice} from './recipeSlice';
import { createFavoritesSlice, type FavoritesSlice } from './favoritesSlice';
import { createNotificationSlice, type NotificationSlice } from './notificationSlice';
import { createAISlice, type AISlice } from './aiSlice';

export const useAppStore = create<RecipesSlice & FavoritesSlice & NotificationSlice & AISlice>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
})));