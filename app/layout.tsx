import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


// ⬇ Load Poppins with weights and subsets
  const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: "Matomeru - AI-Powered PDF Summarization",
  description:
    "Effortlessly extract key insights from any PDF using Matomeru – your smart, lightning-fast document summarizer powered by AI. Designed for students, researchers, and professionals who value clarity and time.",
  keywords: [
    "PDF summarizer",
    "AI summarization",
    "Matomeru",
    "document AI",
    "summarize PDFs",
    "research tools",
    "student productivity",
    "NLP",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html lang="en" className="bg-white text-gray-900" suppressHydrationWarning>
      <body
        className={poppins.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <div className="relative flex min-h-screen flex-col lg:px-[200px]">
        <Header/>
        <main className="flex-1">
        {children}
        </main>
        
        <Footer/>
        </div>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  
  );
}
