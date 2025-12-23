import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const learningPoints = [
  'Analizzare in modo semplice ed efficace il tuo stato patrimoniale',
  'Identificare il tuo profilo di rischio personale',
  'Comprendere come è strutturato il mercato finanziario',
  'Creare un portafoglio che, dal 2014 a oggi, ha generato un rendimento medio annuo del 10%',
  'Conoscere gli strumenti finanziari disponibili (ETF, PAC) e imparare a selezionarli con criterio',
  'Inserire correttamente ordini di acquisto e vendita',
  'Leggere un grafico di borsa attraverso uno strumento semplice e intuitivo',
  'Applicare una semplice strategia che consenta di generare una rendita extra, operando una volta al mese',
];

export default function WhatYouLearnSection() {
  return (
    <section id="imparerai" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3A2A] mb-4">Cosa Imparerai</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un percorso completo per acquisire le competenze necessarie a gestire autonomamente i tuoi investimenti con <b>FORMATORI CERTIFICATI AIEF (Associazione Italiana Educatori Finanziari) - riconosciuti dal Ministero dell'Economia e Sviluppo</b> 
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <img
              src="/assets/etf-learning.jpg"
              alt="Formazione sugli ETF"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            {learningPoints.map((point, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-[#1B7F5C] hover:shadow-lg transition-all duration-300 hover:translate-x-2"
              >
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="text-[#1B7F5C] flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-700 font-medium">{point}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-[#F5B800] text-gray-900">
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Non Serve Essere Esperti</h3>
              <p className="text-lg max-w-3xl mx-auto">
                Con un percorso guidato, pratico e facilmente replicabile, la finanza diventa accessibile a tutti. Imparerai strategie concrete che potrai applicare immediatamente.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
