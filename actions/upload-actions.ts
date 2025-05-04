'use server'
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openai";

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
            summary = await generateSummaryFromOpenAI(pdfText)
            console.log('summary' , summary)
        }catch(error){
            console.log(error)
            //call gemini code
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
