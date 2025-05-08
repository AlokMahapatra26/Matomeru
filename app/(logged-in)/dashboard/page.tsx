import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ResumeCard from '@/components/cards/resume-card'
import { getResumes } from '@/lib/resumes'
import {currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const page = async () => {

  const uploadLimit = 5;
  const user = await currentUser();
  
  const userId = user?.id
  if(!userId) return redirect('/sign-in');
  
  const resume = await getResumes(userId);
  return (
    <main className='min-h-screen'>
      <div className='mx-auto flex flex-col gap-4'>
        <h1>Your Resumes</h1>
        <p>Make your resume align with your jobe role and ATS friendly</p>
        <div>
          <Button variant="link" className='hover:scale-105 transition-all duration-300'>
            <Link href="/upload">
              Add Resume
            </Link>
          </Button>
        </div>

        <div>
          <div className='bg-rose-50 border border-rose-200 rounded-lg p-4 text-rose-800 '>
            <p className='text-sm'>You've reached the limit of {uploadLimit} uploads on the Basic plan

              <Link href="/#pricing" className='text-rose-800 underline underline-offset-4 font-medium '> Click here to upgrade to Pro {' '} <ArrowRight className="w-4 h-4 inline-block" />  </Link>
              for unlimited uploads
            </p>
          </div>
          <div className='grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0'>
            {resume.map(( resume , index) => (
              <ResumeCard key={index} resume={resume}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default page