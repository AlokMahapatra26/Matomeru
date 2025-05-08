import React from 'react';
import { Card } from '@/components/ui/card';
import DeleteButton from '@/components/cards/delete-button';
import Link from 'next/link';
import { FileText, Clock, ArrowRight } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

function ResumeCard({ resume }: { resume: any }) {
  return (
    <Card className="relative h-full group transition-transform duration-200 hover:scale-[1.015] p-5 shadow-sm border border-gray-200 rounded-xl bg-white">
      {/* Top Icons and Delete */}
      <div className="flex justify-between items-start mb-4">
        <FileText className="w-6 h-6 text-rose-400" />
        <DeleteButton resumeId={resume.id} />
      </div>

      {/* Title and Created Info */}
      <Link href={`resumes/${resume.id}`} className="block">
        <h3 className="text-lg font-semibold text-gray-900 truncate mb-1">
          {resume.title || 'Untitled Resume'}
        </h3>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Clock className="w-4 h-4" />
          <span>{formatDistanceToNow(new Date(resume.created_at), { addSuffix: true })}</span>
        </div>

        {/* View More CTA */}
        <div className="flex items-center text-indigo-600 text-sm font-medium group-hover:underline group-hover:opacity-90 transition-opacity">
          View Details
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </Link>
    </Card>
  );
}

export default ResumeCard;
