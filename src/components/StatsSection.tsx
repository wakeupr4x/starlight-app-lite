import { Briefcase, Target, TrendingUp } from 'lucide-react';
import AnimatedHeroBackground from './AnimatedHeroBackground';

export default function StatsSection() {
  const stats = [
    {
      icon: Briefcase,
      value: '10+',
      label: 'Specialized Services',
      description: 'Cloud to Custom SaaS',
    },
    {
      icon: Target,
      value: '5',
      label: 'Key Verticals',
      description: 'Finance, Healthcare, PropTech, Retail, Enterprise IT',
    },
    {
      icon: TrendingUp,
      value: 'Scalable',
      label: 'Architecture',
      description: 'Built for founders and leadership teams',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <AnimatedHeroBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          At a Glance
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Comprehensive solutions tailored for industry leaders
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6">
                <stat.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
