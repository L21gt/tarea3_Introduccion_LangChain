import { createChatModel } from "../config/model";
import { topicPrompt } from "../prompts/topicPrompt";
import { topicAnalysisSchema } from "../schemas/topicAnalysisSchema";

/**
 * Inicialización del modelo instanciado.
 * Se acopla el esquema de Zod mediante el método withStructuredOutput.
 * Esto instruye al LLM subyacente para que garantice una salida JSON
 * que cumpla estrictamente con la firma de datos definida.
 */
const modelWithStructure = createChatModel().withStructuredOutput(topicAnalysisSchema, {
    name: "topicAnalysis"
});

/**
 * Cadena principal de análisis utilizando LCEL (LangChain Expression Language).
 * Define el pipeline de ejecución secuencial:
 * 1. Recepción de variables de entrada (topic, studentLevel, expectedUseCase).
 * 2. Inyección en el ChatPromptTemplate.
 * 3. Procesamiento por el ChatModel local con validación de salida estructurada.
 */
export const topicAnalysisChain = topicPrompt.pipe(modelWithStructure);