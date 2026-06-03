import { z } from "zod";

/**
 * Definición del esquema estructural utilizando Zod.
 * Actúa como un contrato de datos que asegura que el LLM devuelva
 * la salida con los tipos y campos exactos requeridos por la aplicación.
 */
export const topicAnalysisSchema = z.object({
    title: z.string().describe("El título del tema analizado, ej. 'Introducción a LangChain'"),
    summary: z.string().describe("Descripción breve del tema"),
    problemSolved: z.string().describe("Problema principal que resuelve la tecnología"),
    realUseCase: z.string().describe("Caso de uso aplicado en un entorno de producción"),
    learningSteps: z.array(z.string()).describe("Arreglo de pasos secuenciales recomendados para aprenderlo"),
    commonMistakes: z.array(z.string()).describe("Arreglo de advertencias o errores comunes al implementarlo")
});