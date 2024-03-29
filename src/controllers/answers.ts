import { Request, Response } from "express";
import answers from "../models/answers";
import { createEmbeds, question } from "./chat_gpt";

export const generateAnswer = async (req: Request, res: Response) => {
    try {
        const message: string = req.body.questionChat;
        const allAnswers: { [key: string]: string }[] = await answers.find();
        const data: string = createString(allAnswers);
        await createEmbeds(data);        
        const result: string = await question(message);
        const addAnswer = await answers.create({ question: message, result: result });
        return res.status(200).json(addAnswer);
    } catch (error) {
        return res.status(500).send(`INTERNAL SERVER ERROR: ${error}`);
    }
}

export const readAllAnswers = async (req: Request, res: Response) => {
    try {
        const allAnswers = await answers.find();
        return res.status(200).json(allAnswers);
    } catch (error) {
        return res.status(500).send(`INTERNAL SERVER ERROR: ${error}`);
    }
}

function createString(data: { [key: string]: string }[]): string {
    let embed: string = '';
    for (let i = 0; i < data.length; i++) {
        embed += `Mi pregunta numero: ${i}:${data[i].question}. \n 
            Tu respuesta fue: ${data[i].result} \n`;
    }
    return embed;
}