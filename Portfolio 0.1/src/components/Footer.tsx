import { Mail, Linkedin, Twitter, Github, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-[#2a2a2a] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* CTA Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Let's create something great together
            </h2>
            <p className="text-lg text-gray-300">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="mailto:hello@hakeemadjei.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                View resume
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                Connect
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                Explore
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#work" className="text-gray-300 hover:text-white transition-colors">
                    Selected Work
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Writing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Hakeem Adjei. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
