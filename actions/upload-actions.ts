'use server'
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openai";
import { generateSummaryFromGemini } from "@/lib/geminiai";

export async function generatePdfSummary(uploadResponse: [{
    serverData : {
        userId : string,
        file : {
            url : string;
            name: string;
        }
    }
}]){
    if(!uploadResponse){
        return {
            success: false,
            message: 'File upload failed',
            data : null
        }
    }


    const {
        serverData : {
            userId , 
            file : {url:pdfUrl , name:fileName}
        },
     } = uploadResponse[0]

     if(!pdfUrl){
        return {
            success: false,
            message: 'File upload failed',
            data : null
        }
     }

     let summary;

     try{
        const pdfText = await fetchAndExtractPdfText(pdfUrl)
        console.log(pdfText);
        try{
            summary = await generateSummaryFromGemini(pdfText)
            return summary;
        }catch(error){
            console.log(error)
            if(error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED') {
                // try{
                //     summary = await generateSummaryFromGemini(pdfText)
                // }catch(geminiError) {
                //     console.error(
                //         'Gemini API failed after OpenAI quota exceeded',
                //         geminiError
                //     );
                //     throw new Error(
                //         'Failed to generate summary with available AI models'
                //     )
                // }
            }
        }
        

        if(!summary){
            return {
                success: false,
                message: 'File to generate summary',
                data: null
            }
        }

     }catch(err){
        return {
            success: false,
            message: 'File upload failed',
            data : null
        }
     }

}
