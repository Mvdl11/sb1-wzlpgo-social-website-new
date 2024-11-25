import React from 'react';

const stats = [
  { id: 1, name: 'Klanten geholpen', value: '500+' },
  { id: 2, name: 'Posts gecreëerd', value: '50K+' },
  { id: 3, name: 'Engagement rate', value: '300%' },
  { id: 4, name: 'Gemiddelde ROI', value: '250%' },
];

export function Stats() {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vertrouwd door verschillende bedrijven in Nederland
            </h2>
            <p className="mt-4 text-lg leading-8 text-primary-100">
              Onze resultaten spreken voor zich
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/10 backdrop-blur-sm p-8">
                <dt className="text-sm font-semibold leading-6 text-primary-100">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}