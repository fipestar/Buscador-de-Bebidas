import type { StateCreator } from "zustand";

export type AISlice = {
    recipe: string;
    setRecipe: (recipe : string) => void;
}

export const createAISlice : StateCreator<AISlice,[],[], AISlice> = (set) => ({
    recipe: '',
    setRecipe: (recipe) => set({ recipe })
});

