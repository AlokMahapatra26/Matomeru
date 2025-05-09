import { getResumeById } from '@/lib/resumes';
import { notFound } from 'next/navigation';
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FileText, Link as LinkIcon, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const resume = await getResumeById(id);

  if (!resume) {
    notFound();
  }

  const { original_file_url, title, summary_text, created_at } = resume;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <div className="flex items-center space-x-3">
          <FileText className="h-6 w-6 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        </div>

<ReactMarkdown
  components={{
    p: ({ node, ...props }) => (
      <p {...props} className="prose prose-indigo max-w-none text-gray-800" />
    ),
  }}
>
  {summary_text || 'No summary provided.'}
</ReactMarkdown>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <LinkIcon className="h-4 w-4" />
          <a
            href={original_file_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline break-all"
          >
            View Original Doc
          </a>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span>Created {formatDistanceToNow(new Date(created_at), { addSuffix: true })}</span>
        </div>
      </div>
    </div>
  );
}

export default Page;
