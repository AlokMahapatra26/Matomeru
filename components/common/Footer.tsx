import { Mail, Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 px-6 py-12 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        
        {/* Logo + About */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">PDF Summariser</h2>
          <p className="text-gray-400">
            Summarize PDFs beautifully with the power of AI. Save time, grasp insights instantly.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2">
            <li><Link href="/#how-it-works" className="hover:text-white">How it works</Link></li>
            <li><Link href="/#pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/demo" className="hover:text-white">Live Demo</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Docs</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold">Get in touch</h3>
          <p className="flex items-center gap-2 text-gray-400"><Mail className="w-4 h-4" /> support@matomeru.ai</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white"><Github className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Matomeru. All rights reserved.
      </div>
    </footer>
  );
}
