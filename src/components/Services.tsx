import React from 'react';
import { MessageSquare, BarChart3, Target, PenTool } from 'lucide-react';

const services = [
  {
    title: 'Content creatie',
    description: 'Boeiende posts, video\'s en verhalen op maat van je merk en doelgroep.',
    icon: PenTool,
  },
  {
    title: 'Community management',
    description: 'Bouw en onderhoud je online community door betekenisvolle interacties.',
    icon: MessageSquare,
  },
  {
    title: 'Analyse & rapportage',
    description: 'Data-gedreven inzichten om je social media strategie en ROI te optimaliseren.',
    icon: BarChart3,
  },
  {
    title: 'Social advertising',
    description: 'Gerichte campagnes die je ideale doelgroep bereiken en conversies stimuleren.',
    icon: Target,
  },
];

export function Services() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Onze diensten
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Complete social media oplossingen op maat van je bedrijf
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a href="/services" className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500">
                      Lees meer <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}