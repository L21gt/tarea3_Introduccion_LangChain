import { ChatOllama } from "@langchain/ollama";
import * as dotenv from "dotenv";

// Carga de variables de entorno desde el archivo .env
dotenv.config();

/**
 * Función de fábrica para instanciar el modelo de lenguaje local.
 * Abstrae la inicialización del LLM para inyectarlo en el pipeline principal.
 * @returns {ChatOllama} Instancia configurada de ChatOllama con los parámetros del entorno.
 */
export const createChatModel = (): ChatOllama => {
    // Lectura de variables de entorno con valores por defecto como fallback
    const baseUrl = process.env.OLLAMA_BASE_URL || "http://localhost:11434";
    const model = process.env.OLLAMA_MODEL || "llama3.2";

    return new ChatOllama({
        baseUrl,
        model,
        temperature: 0.1, // Temperatura baja (0.1) para forzar respuestas más estructuradas y precisas
    });
};