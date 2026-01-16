import { Building2, Heart, Home, ShoppingBag } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 glass border-y">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-8 font-semibold">
          Trusted Technical Expertise for Modern Enterprises
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <div className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
            <Building2 className="w-12 h-12 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Finance</span>
          </div>
          <div className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
            <Heart className="w-12 h-12 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Healthcare</span>
          </div>
          <div className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
            <Home className="w-12 h-12 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">PropTech</span>
          </div>
          <div className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
            <ShoppingBag className="w-12 h-12 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Retail</span>
          </div>
        </div>
      </div>
    </section>
  );
}
