import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown, TrendingUp, Target, Shield } from 'lucide-react';

export default function WhyInvestSection() {
  return (
    <section id="perche" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3A2A] mb-4">
            Perché Investire con ME?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'inflazione è una silenziosa piaga mangiasoldi: lavora nell'ombra, erodendo giorno dopo giorno il valore dei tuoi risparmi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <img
              src="/assets/inflation-impact.jpg"
              alt="Impatto dell'inflazione"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <TrendingDown className="text-red-500 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Il Problema</h3>
                    <p className="text-gray-600">
                      Dal 2002 a oggi, i tuoi 100€ hanno perso quasi il 40% del loro valore reale: oggi valgono come circa 60€. (Fonte: ISTAT - Indice dei prezzi al consumo)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#1B7F5C] hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="text-[#1B7F5C] flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">La Soluzione</h3>
                    <p className="text-gray-600">
                      I risparmi che hai affidato alla banca, sono riusciti davvero a compensare questa perdita o a fare meglio?
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#F5B800] hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Target className="text-[#F5B800] flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Il Risultato</h3>
                    <p className="text-gray-600">
                      Il denaro non è un fine, ma il mezzo che ci permette di vivere meglio e di garantire un futuro più semplice ai nostri figli.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-[#1B7F5C] to-[#0A3A2A] text-white">
          <CardContent className="pt-8 pb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Shield size={48} className="text-[#F5B800]" />
              <h3 className="text-3xl font-bold">La Nostra Missione</h3>
            </div>
            <p className="text-center text-lg max-w-4xl mx-auto">
              Questo corso nasce per restituirti autonomia e consapevolezza: strumenti pratici e strategie semplici per diventare protagonista delle tue scelte finanziarie. Non serve essere esperti: con un percorso guidato, pratico e facilmente replicabile, la finanza diventa accessibile a tutti.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}