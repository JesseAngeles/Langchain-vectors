const { OpenAI } = require("langchain/llms/openai");
const { OpenAIEmbeddings } = require("@langchain/openai");
const { HNSWLib } = require("@langchain/community/vectorstores/hnswlib");
const { RetrievalQAChain, loadQARefineChain } = require("langchain/chains");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");

require('dotenv').config();

const fs = require("fs");
const OPENAI_API_KEY = "";

/*
const modelo = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperatura: 0.9 });

export async function createEmbeds(data:string) {

    // Dividir los datos en fragmentos
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
    });

    // Crear documentos
    const docs = await textSplitter.createDocuments([data]);

    // Generar incrustaciones de documentos
    const vectorStore = await HNSWLib.fromDocuments(
        docs,
        new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY }),
    );

    // Guardar la tienda de vectores
    await vectorStore.save("src/hnswlib");
}

export async function question(question: string) {
    // Cargar la tienda de vectores
    const vectorStore = await HNSWLib.load(
        "./src/hnswlib",
        new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY }),
    );

    // Crear la cadena del chatbot
    const cadena = new RetrievalQAChain({
        combineDocumentsChain: loadQARefineChain(modelo),
        retriever: vectorStore.asRetriever(),
    });

    // Obtener la respuesta
    const resultado = await cadena.call({
        query: `Responde la siguiente pregunta: ${question}. Puedes utilizar el
        contexto proporcionado unicamente si este esta relacionado con la pregunta`,
    });

    return resultado.output_text;
}
*/