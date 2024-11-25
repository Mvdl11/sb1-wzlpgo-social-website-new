import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, BarChart3 } from 'lucide-react';

export function PortfolioPage() {
  return (
    <main className="flex-grow">
      <div className="relative bg-gradient-to-b from-primary-50 to-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Onze succesverhalen
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Ontdek hoe wij merken hebben geholpen hun social media doelen te bereiken en 
              betekenisvolle resultaten te behalen
            </p>
          </div>
        </div>
      </div>

      {/* Rest of the PortfolioPage component remains the same */}
    </main>
  );
}