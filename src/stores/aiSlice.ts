import type { StateCreator } from "zustand";
import AIService from "../services/AIService";

export type AISlice = {
    recipe: string;
    loading: boolean;
    generateRecipe: (prompt : string) => Promise<void>;
}

export const createAISlice : StateCreator<AISlice,[],[], AISlice> = (set) => ({
    recipe: '',
    loading: false,
    generateRecipe: async (prompt) => {
        set({loading: true, recipe: ''}); //Empezamos a cargar

        try {
            const result = await AIService.generateRecipe(prompt);
            
            for await (const textPart of result) {
                set((state) => ({
                    recipe: state.recipe + textPart //Concatenamos las partes del texto
                }))
            }

            set({ recipe: `Receta generada para el prompt: ${prompt}` });
        } catch (error) {
            console.error('Error generating recipe:', error);
        } finally {
            set({loading: false}); //Terminamos de cargar
        }

        
    }
});

