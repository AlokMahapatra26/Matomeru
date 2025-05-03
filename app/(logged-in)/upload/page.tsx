import React from 'react';
import { UploadCloud } from 'lucide-react';

const Page = () => {
  return (
    <section className="min-h-screen  flex items-center">
      <div className="mx-auto max-w-4xl w-full px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Start Uploading Your PDFs
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Upload your PDF and let AI do the magic ✨
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6">
            <UploadCloud className="w-12 h-12 text-rose-500" />

            <h2 className="text-xl font-semibold text-gray-800">
              Upload a PDF File
            </h2>

            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              id="pdfUpload"
            />
            <label
              htmlFor="pdfUpload"
              className="inline-block cursor-pointer bg-rose-500 text-white font-medium py-3 px-6 rounded-xl shadow hover:bg-rose-700 transition"
            >
              Choose File
            </label>

            <p className="text-sm text-gray-500">
              Supported format: PDF only. Max size: 10MB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
