import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, PlusCircle } from 'lucide-react';
import ResumeCard from '@/components/cards/resume-card';
import { getResumes } from '@/lib/resumes';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const uploadLimit = 5;

const Page = async () => {
  const user = await currentUser();
  const userId = user?.id;

  if (!userId) return redirect('/sign-in');

  const resumes = await getResumes(userId);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Resumes</h1>
            <p className="text-gray-600 mt-1 text-sm">
              Make your resume align with your job role and be ATS friendly.
            </p>
          </div>

          <Link href="/upload">
            <Button className="flex items-center gap-2 hover:scale-105 transition-all">
              <PlusCircle className="w-4 h-4" />
              Add Resume
            </Button>
          </Link>
        </div>

        {resumes.length >= uploadLimit && (
          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 text-rose-800 text-sm">
            You've reached the limit of {uploadLimit} uploads on the Basic plan.{' '}
            <Link
              href="/#pricing"
              className="text-rose-800 underline underline-offset-4 font-medium"
            >
              Click here to upgrade to Pro <ArrowRight className="w-4 h-4 inline-block ml-1" />
            </Link>{' '}
            for unlimited uploads.
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resumes.map((resume, index) => (
            <ResumeCard key={index} resume={resume} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
