'use client'
import React from 'react'
import { UploadCloud } from 'lucide-react'
import { Button } from '../ui/button'
import UploadFormInput from './upload-form-input'
import { z } from 'zod'
import { useUploadThing } from '@/utils/uploadthing'
import { toast } from 'sonner'
import { generatePdfSummary, storePdfSummaryAction } from '@/actions/upload-actions'
import { useRouter } from 'next/navigation'


const schema = z.object({
    file:z.instanceof(File , {message : 'Invalid file'}).refine((file) => file.size <= 5 * 1024 * 1024 ,'File size must be less than 5MB').refine((file)=> file.type.startsWith('application/pdf'), 'File must be a PDF')
})


function UploadForm() {

  const [summary, setSummary] = React.useState<string | null>(null);
  const router = useRouter()
  


    
    const { startUpload } = useUploadThing(
        "pdfUploader" , {
            onClientUploadComplete : () => {
                console.log('uploaded successfully');
               
            },
            onUploadError : ( err ) => {
                console.log('error occured while uploading' , err)
                
            },
            onUploadBegin: ({ file }) => {
                console.log('upload has begun for' , file)
                
            }
        }
    )



  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Submitted ')
    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;

    //validation of field and //schema with zod
    const validatedFields = schema.safeParse({file});

    if(!validatedFields.success){
        console.log(validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file');
        toast("File validation failed" , {
          description : validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file' ,
        })
        return;
    }

    
    //upload tthe file to uploadthing

    toast( "Uploading PDF" , {
      description : "Please wait..."
    })

    const response = await startUpload([file]);
    if(!response){
        toast( "Something went wrong" , {
          description : "Please use a different file"
        })
        return
    }
    console.log(response)

    toast( "Processing your PDF" , {
      description : "Please wait while we processing your file"
    })







    //parse the pdf using lang chain
    const result = await generatePdfSummary(response);
    

    const { data = null , message = null } = result || {};

    if(data) {
      let storeResult: any;
      toast( "Saving Your PDF..." , {
        description : "Please wait while we processing your file"
      })
      if(data.summary){
        storeResult = await storePdfSummaryAction({
          summary: data.summary,
          fileUrl : response[0].serverData.file.url,
          title: data.title,
          fileName: file.name,
        })
      }else{
        console.log("ella no summary")
      }

      toast("Summary Saved" , {
        description : 'Summary Saved to your database'
      })

      router.push(`/resumes/${storeResult.data.id}`)

    }
  

  }  

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6">
            <UploadCloud className="w-12 h-12 text-rose-500" />

            <h2 className="text-xl font-semibold text-gray-800">
              Upload a PDF File
            </h2>

               
            <UploadFormInput onSubmit={handleSubmit}  />
            <p className="text-sm text-gray-500">
              Supported format: PDF only. Max size: 10MB
            </p>
            {summary && (
  <>
    <h3 className="text-lg font-medium text-gray-700 mt-6">📄 PDF Summary</h3>
    <div className="w-full p-4 mt-2 bg-gray-100 rounded-lg border border-gray-300 text-sm text-gray-800 whitespace-pre-line max-h-96 overflow-y-auto shadow-inner">
      {summary}
    </div>
  </>
)}
          </div>
        </div>
  )
}

export default UploadForm