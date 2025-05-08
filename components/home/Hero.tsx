
import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {  Sparkles , ArrowRightCircle } from 'lucide-react'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'

function HeroSection() {
  const user = currentUser();
  return (
    <section className="relative mx-auto z-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-12 sm:py-20 lg:pb-28 max-w-7xl transition-all animate-in ">
  <div className="w-full flex flex-col items-center text-center">
    
    {/* Badge */}
    <div className="mb-6">
      <Badge variant="secondary" className="border border-black rounded-full px-6 py-2 flex items-center space-x-2">
        <Sparkles className="h-6 w-6 animate-pulse text-rose-500" />
        <p className="text-sm sm:text-base">Powered by AI</p>
      </Badge>
    </div>

    {/* Heading */}
    <div className="max-w-2xl w-full">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
        Transform PDFs into Concise Summaries
      </h1>
      <h2 className="text-sm sm:text-base md:text-lg text-gray-600">
        Get a summary of your document in seconds
      </h2>
    </div>

    {/* CTA Button */}
    <div className="mt-10">
    <Button
          variant="link"
          className="bg-rose-500 text-white px-6 py-3 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:scale-105"
        >
          <Link href="/upload" className="flex items-center gap-2">
            <span className="font-semibold">Start Summarzing</span>
            <ArrowRightCircle className="w-5 h-5 animate-pulse" />
          </Link>
        </Button>
    </div>

  </div>
</section>

  )
}

export default HeroSection