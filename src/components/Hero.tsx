import { ArrowRight, Sparkles } from 'lucide-react';
import AnimatedHeroBackground from './AnimatedHeroBackground';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const { displayedText } = useTypewriter('STRATEGIC INTELLIGENCE', 80, 1500);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      <AnimatedHeroBackground />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-900 dark:text-blue-300">
            Empowering Finance, Healthcare, and Real Estate
          </span>
        </div>

        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-10 leading-snug">
          Transforming Raw Data into{' '}
          <span
          className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent pb-[0.08em]"
          style={{ minWidth: '14ch' }} // length of "Strategic Intelligence">
           >  
  {displayedText || '\u00A0'}
  <span className="typewriter-cursor"></span>
</span>

        </h1>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
          Starlight Tech Services delivers comprehensive IT consulting and custom software solutions designed for high-stakes industries. We bridge the gap between complex information and smarter, data-driven decisions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="group flex items-center space-x-2 px-8 py-4 glass-button text-white rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg font-medium"
          >
            <span>Get a Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 glass-button-outline rounded-full transition-all duration-300 hover:shadow-xl text-lg font-medium"
          >
            View Our Services
          </button>
        </div>
        <div className="mt-14 flex justify-center">
  <img
    src="/lulu.jpg"
    alt="Consultation discussion"
    className="
      max-w-4xl w-full rounded-[3rem]
      shadow-[0_25px_60px_rgba(0,0,0,0.35)]
    "
  />
</div>

      </div>
    </section>
  );
}
