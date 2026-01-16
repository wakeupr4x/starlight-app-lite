import { Cloud, BarChart3, Code2, Server, Layers, Shield, Briefcase } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: Briefcase,
      title: 'IT Consulting',
      description: 'Strategic technology guidance to align your IT infrastructure with business objectives and drive growth.',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization solutions.',
    },
    {
      icon: Code2,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to meet your unique business requirements and workflows.',
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable, secure cloud infrastructure design and migration services for modern enterprises.',
    },
    {
      icon: Layers,
      title: 'SaaS Development',
      description: 'End-to-end SaaS product development from concept to deployment and beyond.',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Comprehensive security solutions and compliance frameworks to protect your digital assets.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Comprehensive technology solutions for enterprise success
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
