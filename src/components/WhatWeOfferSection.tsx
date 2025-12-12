import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, TrendingUp, Award, Mail } from 'lucide-react';

const offerings = [
  {
    icon: Calculator,
    title: 'Fogli di Calcolo Dedicati',
    description: 'Strumenti pratici e personalizzati per la gestione del tuo patrimonio e il monitoraggio degli investimenti.',
  },
  {
    icon: TrendingUp,
    title: 'Strumenti Pratici',
    description: 'Ricevi segnali di ingresso e di uscita dal mercato, con indicatori chiari e facili da interpretare.',
  },
  {
    icon: Award,
    title: 'Attestato di Partecipazione',
    description: 'Certificato personalizzato che attesta le competenze acquisite durante il corso di 8 ore.',
  },
  {
    icon: Mail,
    title: 'Assistenza Continua',
    description: 'Supporto via email dedicato per rispondere a tutte le tue domande anche dopo il corso.',
  },
];

export default function WhatWeOfferSection() {
  return (
    <section id="offriamo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3A2A] mb-4">Cosa Offriamo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un pacchetto completo di strumenti e supporto per il tuo successo finanziario
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {offerings.map((offer, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-[#1B7F5C]"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#1B7F5C] p-3 rounded-lg">
                    <offer.icon className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{offer.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">{offer.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative">
          <img
            src="/assets/financial-tools.jpg"
            alt="Strumenti finanziari"
            className="rounded-lg shadow-xl w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A3A2A]/80 to-transparent rounded-lg flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Strumenti Professionali</h3>
              <p className="text-lg">
                Accesso a tutti gli strumenti utilizzati dai professionisti del settore, semplificati per un uso quotidiano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}