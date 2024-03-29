import mongoose, { mongo } from "mongoose";
import { Answer } from "../interfaces/answers";

const { Schema } = mongoose;

const answer = new Schema<Answer>({
    question: {
        type: String,
        unique: false,
        required: true
    },
    result: {
        type: String,
        unique: true,
        required: true
    }
});

export default mongoose.model<Answer>('answer',answer);
