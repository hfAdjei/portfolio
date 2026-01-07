import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-green-300 font-medium">Currently available</span>
        </div>

        <h2 className="text-4xl md:text-5xl mb-6">Let's work together</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:hello@alexmorgan.com"
            className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Send me an email
          </a>
          <a
            href="#"
            className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © 2026 Alex Morgan. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
