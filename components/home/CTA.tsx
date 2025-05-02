import { ArrowRightCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="bg-rose-500 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6 animate-fade-in-up">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Ready to turn your PDFs into smart summaries?
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-xl">
          Matomeru helps you digest documents faster with beautiful, AI-powered summaries. Just upload & relax.
        </p>
        <Button
          variant="link"
          className="bg-white text-rose-600 hover:bg-rose-100 px-6 py-3 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:scale-105"
        >
          <Link href="/#pricing" className="flex items-center gap-2">
            <span className="font-semibold">Get Started Free</span>
            <ArrowRightCircle className="w-5 h-5 animate-pulse" />
          </Link>
        </Button>
      </div>

      {/* Background sparkles effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/5 to-transparent pointer-events-none"></div>
    </section>
  );
}
