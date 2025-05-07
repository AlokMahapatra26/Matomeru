import { GoogleGenerativeAI } from '@google/generative-ai';
import { SUMMARY_SYSTEM_PROMPT } from '@/utils/prompts';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '' )

export const generateSummaryFromGemini = async (pdfText : string) => {
    try{
        const model = genAI.getGenerativeModel({ model : 'gemini-1.5-flash' , generationConfig : {
            temperature : 0.7,
            maxOutputTokens : 1500,
        }});

        const prompt = {
            contents : [
                {
                    role : 'user',
                    parts : [
                        {text : SUMMARY_SYSTEM_PROMPT},
                        {
                            text : ` this is a text : \n \n ${pdfText}`
                        }
                    ]
                }
            ]
        }

        const result = await model.generateContent(prompt)
        const response = await result.response;

        if (!response?.text) { // More robust check for response text
            throw new Error('Empty response received from Gemini API');
        }

        return response.text();
    } catch (error: any) {
        console.error('Gemini API Error:', error);
        // Optionally, you could check the type of error here for more specific handling
        throw error;
    }
}