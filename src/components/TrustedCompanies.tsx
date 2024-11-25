import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const companies = [
  {
    name: 'Omoda',
    logo: '/logos/omoda.svg',
  },
  {
    name: 'The Value Office',
    logo: '/logos/value-office.svg',
  },
  {
    name: 'Boob Boobs',
    logo: '/logos/boob-boobs.svg',
  },
];

export function TrustedCompanies() {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Vertrouwd door verschillende bedrijven in Nederland
          </h2>
        </div>
        
        <div className="mt-16">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={100}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 70,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
            }}
            className="px-12"
          >
            {companies.map((company) => (
              <SwiperSlide key={company.name}>
                <div className="flex items-center justify-center h-80 px-8">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-56 w-auto object-contain max-w-[300px] brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}