import { TrendingUp, BarChart3, Cloud } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      icon: Cloud,
      title: 'Unified Asset Management Portal',
      industry: 'Real Estate (PropTech)',
      challenge: 'Manual spreadsheets across 50+ locations causing ~15% revenue leakage',
      solution: 'Custom dashboard integrating maintenance alerts and automated billing',
      result: '25% reduction in admin overhead and elimination of billing errors within 90 days',
      color: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      icon: BarChart3,
      title: 'Predictive Patient Flow Analytics',
      industry: 'Healthcare (Data Analytics)',
      challenge: 'Long wait times due to inefficient scheduling and no-shows',
      solution: 'Analytics system predicting peak hours and no-show probability',
      result: '20% increase in clinic throughput and improved patient satisfaction',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: TrendingUp,
      title: 'Legacy-to-Cloud Migration',
      industry: 'Finance (IT Consulting / SaaS)',
      challenge: 'System failure under 400% traffic spike',
      solution: 'Re-architecture into scalable cloud-native SaaS',
      result: '100% uptime and 40% reduction in server costs',
      color: 'from-purple-500/20 to-pink-500/20',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Startup Case Studies
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Representative projects highlighting domain expertise
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${caseStudy.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                <caseStudy.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                {caseStudy.industry}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {caseStudy.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Challenge
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Solution
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">
                    Result
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {caseStudy.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
