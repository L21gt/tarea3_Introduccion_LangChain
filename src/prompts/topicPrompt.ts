import { ChatPromptTemplate } from "@langchain/core/prompts";

/**
 * Plantilla de prompt dinámica que define las instrucciones del sistema y el query del usuario.
 * Soporta la inyección de variables para un análisis contextualizado.
 */
export const topicPrompt = ChatPromptTemplate.fromMessages([
    [
        "system",
        "Eres un ingeniero de software senior y pedagogo técnico. " +
        "Debes explicar un concepto técnico para un estudiante de nivel: {studentLevel}. " +
        "El contexto de uso esperado es: {expectedUseCase}. " +
        "Tu única tarea es devolver un objeto JSON válido que cumpla estrictamente con la estructura solicitada. No agregues texto introductorio ni conclusiones fuera del JSON."
    ],
    [
        "human",
        "Analiza el siguiente tema técnico: {topic}. " +
        "Asegúrate de incluir una explicación breve, el problema que resuelve, un ejemplo de uso real, pasos para aprenderlo y errores comunes."
    ]
]);