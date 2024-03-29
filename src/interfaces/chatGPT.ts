export interface ChatCompletionResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: [
        {
            index: number;
            message: { content: string; role: string };
            logprobs: any; // You might want to define a proper type for logprobs
            finish_reason: string;
        }
    ];
    usage: { prompt_tokens: number; completion_tokens: number; total_tokens: number };
    system_fingerprint: string | null;
}
