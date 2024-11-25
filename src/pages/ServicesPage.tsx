import React from 'react';
import { Link } from 'react-router-dom';
import {
  PenTool,
  MessageSquare,
  BarChart3,
  Target,
  Camera,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function ServicesPage() {
  return (
    <main className="flex-grow">
      <div className="bg-gradient-to-b from-primary-50 to-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Onze diensten
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Van strategie tot uitvoering - wij bieden alle expertise die je nodig hebt voor een 
              succesvolle social media aanwezigheid
            </p>
          </div>
        </div>
      </div>

      {/* Rest of the ServicesPage component remains the same */}
    </main>
  );
}