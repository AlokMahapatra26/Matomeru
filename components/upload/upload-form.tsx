'use client'
import React from 'react'
import { UploadCloud } from 'lucide-react'
import { Button } from '../ui/button'
import UploadFormInput from './upload-form-input'

function UploadForm() {

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;

    //validation of field
    //schema with zod
    //upload tthe file to uploadthing
    //parse the pdf using lang chain
    //summarise the pdf using AI
    //save the summary to th edata base
    //redirect to the summary page


  }  

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6">
            <UploadCloud className="w-12 h-12 text-rose-500" />

            <h2 className="text-xl font-semibold text-gray-800">
              Upload a PDF File
            </h2>

               
            <UploadFormInput onSubmit={handleSubmit} />
            <p className="text-sm text-gray-500">
              Supported format: PDF only. Max size: 10MB
            </p>
          </div>
        </div>
  )
}

export default UploadForm