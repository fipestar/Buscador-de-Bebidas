import {streamText} from 'ai'
import { openrouter } from '../lib/ai'

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter('mistralai/mistral-7b-instruct:free'),
            prompt: prompt
        })
        return result.textStream
    }
}