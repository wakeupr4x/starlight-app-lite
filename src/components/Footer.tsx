import { Mail, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/public/lgp_strlt.png"
                alt="Starlight Tech Services"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Starlight Tech Services delivers comprehensive IT consulting and custom software solutions designed for high-stakes industries. Your digital solution partner.
            </p>
          </div>

          <div className="lg:col-span-1 text-left text-right">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-starlight')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block"></div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright 2025 Starlight Tech Services Pvt Ltd - All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/starlight-tech-services-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              className="w-10 h-10 glass hover:bg-blue-400 rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 glass hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
