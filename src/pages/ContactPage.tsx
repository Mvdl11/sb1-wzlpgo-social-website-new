import React from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Mail, Phone } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
};

export function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert('Bedankt voor je aanvraag! We nemen zo spoedig mogelijk contact met je op.');
  };

  return (
    <main className="flex-grow">
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Plan je gratis adviesgesprek
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Vul het formulier in en ontdek hoe wij je social media aanwezigheid kunnen versterken
            </p>
          </div>

          {/* Rest of the ContactPage component remains the same */}
        </div>
      </div>
    </main>
  );
}