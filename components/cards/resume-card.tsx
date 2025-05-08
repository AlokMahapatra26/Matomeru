import React from 'react'
import { Card } from '@/components/ui/card'
import DeleteButton from '@/components/cards/delete-button'
import Link from 'next/link'
import { FileText } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

function ResumeCard({resume}:{resume: any}) {
  return (
    <div>
      <Card className='relative h-full mt-2'>
        <FileText className='w-6 h-6 sm:w-8 sm:h-8 text-rose-400 mt-1'/>
        <div className='absolute top-2 right-2'>
          <DeleteButton resumeId={resume.id}/>
        </div>
        <Link href={`resumes/${resume.id}`} className='block p-4 sm:p-6'>

          <h3 className='text-base xl:text-lg font-semibold text-gray-900 truncate w-4/9'>{resume.title}</h3>
          <p>{formatDistanceToNow(new Date(resume.created_at), {addSuffix : true})}</p>
          
        </Link>
      </Card>
    </div>
  )
}

export default ResumeCard