import type { StateCreator } from "zustand";

export type AISlice = {
    recipe: string;
    loading: boolean;
    generateRecipe: (prompt : string) => Promise<void>;
}

export const createAISlice : StateCreator<AISlice,[],[], AISlice> = (set) => ({
    recipe: '',
    loading: false,
    generateRecipe: async (prompt) => {
        set({loading: true}); //Empezamos a cargar

        try {
            console.log('Generating recipe with prompt:', prompt);
            // Simulamos una llamada a una API de IA
            await new Promise(resolve => setTimeout(resolve, 500))

            set({ recipe: `Receta generada para el prompt: ${prompt}` });
        } catch (error) {
            console.error('Error generating recipe:', error);
        } finally {
            set({loading: false}); //Terminamos de cargar
        }
    }
});

