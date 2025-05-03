import React from 'react';
import UploadForm from '@/components/upload/upload-form';
import UploadHeader from '@/components/upload/upload-header';

const Page = () => {
  return (
    <section className="min-h-screen  flex items-center">
      <div className="mx-auto max-w-4xl w-full px-6 py-16 sm:py-24 lg:px-8">
        
      <UploadHeader/>
      <UploadForm/>
        
      </div>
    </section>
  );
};

export default Page;
