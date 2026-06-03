import * as dotenv from "dotenv";
import { topicAnalysisChain } from "./chains/topicAnalysisChain";

// Carga de variables de entorno al iniciar la aplicación
dotenv.config();

/**
 * Función principal (Entry point).
 * Orquesta la ejecución del pipeline de LangChain y maneja la respuesta asíncrona.
 */
const main = async () => {
    console.log("⏳ Iniciando análisis con LangChain y Ollama...");
    console.log("⚙️  Procesando con el modelo local (esto puede tardar unos segundos)...");

    try {
        // Invocación de la cadena con el payload dinámico requerido por el prompt
        const result = await topicAnalysisChain.invoke({
            topic: "Introducción a LangChain",
            studentLevel: "Estudiante de desarrollo Fullstack",
            expectedUseCase: "Integración de IA en un pipeline de procesamiento asíncrono con Node.js"
        });

        console.log("\n✅ === RESULTADO DEL ANÁLISIS (JSON ESTRUCTURADO) === ✅\n");
        // Se imprime el resultado final en consola con formato legible
        console.log(JSON.stringify(result, null, 2));

    } catch (error) {
        console.error("\n❌ Error crítico durante la ejecución de la chain:");
        console.error(error);
    }
};

// Ejecución del proceso
main();