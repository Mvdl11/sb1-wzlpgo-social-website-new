import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { TrustedCompanies } from '../components/TrustedCompanies';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <TrustedCompanies />
      <Testimonials />
      <Pricing />
    </main>
  );
}