import { Github, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-900 text-brand-200 border-t border-brand-800 py-12 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tighter text-brand-100">BS</span>
            <span className="text-brand-400">/</span>
            <span className="text-sm font-medium tracking-wide text-brand-400">Personal Portfolio</span>
          </div>
          <p className="text-xs text-brand-500 font-medium">
            © {currentYear} Berke Songul. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/berkesongul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 hover:text-brand-100 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/berkesongul97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 hover:text-brand-100 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="mailto:heybo34@gmail.com"
            className="text-brand-400 hover:text-brand-100 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}