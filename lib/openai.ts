import OpenAI from "openai";
import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";

const client = new OpenAI({
    apiKey : process.env.OPENAI_AI_KEY
});

export async function generateSummaryFromOpenAI(pdfText:string){

    try{
        const completion = await client.responses.create({
            model: "gpt-4.1-nano",
            input: [
                {
                    role: "system",
                    content: SUMMARY_SYSTEM_PROMPT
                },
                {
                    role: "user",
                    content: `:talk bull shit on the text and roast him or her in houmur way and /n /n ${pdfText}`,
                },
            ],
            temperature: 0.7,
            
        });
        
        return completion.output_text;
    }catch(error:any){
        if(error?.status === 429){
            throw new Error('RATE_LIMIT_EXCEEDED');
        }
        throw error;
    }
    // Transform this document into an angaging , easy to read summary with contexually relevent emojis and proper markdown formatting


}
