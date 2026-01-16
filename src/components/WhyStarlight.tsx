import { Users, Brain, Zap } from 'lucide-react';
import AnimatedHeroBackground from './AnimatedHeroBackground';

export default function WhyStarlight() {
  const reasons = [
    {
      icon: Users,
      title: 'Founders-First Approach',
      description: 'We partner with leadership teams to deliver solutions that align with your vision and drive measurable business outcomes.',
    },
    {
      icon: Brain,
      title: 'Deep Sector Intelligence',
      description: 'Specialized expertise in Finance, Healthcare, and Real Estate enables us to understand your unique challenges and opportunities.',
    },
    {
      icon: Zap,
      title: 'Fast, Secure Execution',
      description: 'Agile methodologies combined with enterprise-grade security ensure rapid deployment without compromising quality.',
    },
  ];

  return (
    <section id="why-starlight" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      <AnimatedHeroBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Why Leaders Choose Starlight Tech
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Strategic partnership for transformative technology solutions
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-lg">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
