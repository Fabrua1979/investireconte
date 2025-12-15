import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Integrità",
    description: "Trasparenza e onestà in ogni aspetto del nostro lavoro. Non promettiamo guadagni garantiti, ma competenze reali.",
  },
  {
    icon: Award,
    title: "Esperienza",
    description: "In pochi anni abbiamo già accompagnato oltre 200 persone a comprendere come gestire i propri risparmi in autonomia.La nostra forza sta nella chiarezza del metodo e nella soddisfazione di chi ci ha seguito.
",
  },
  {
    icon: Lightbulb,
    title: "Semplificazione",
    description: "Rendiamo la finanza accessibile a tutti, trasformando concetti complessi in strategie pratiche e applicabili.",
  },
];

export default function ValuesSection() {
  return (
    <section id="valori" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3A2A] mb-4">I Nostri Valori</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I principi che guidano il nostro approccio alla formazione finanziaria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-[#F5B800]"
            >
              <CardContent className="pt-8 pb-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-[#1B7F5C] to-[#0A3A2A] p-4 rounded-full">
                    <value.icon className="text-white" size={48} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative">
          <img
            src="/assets/trust-values.jpg"
            alt="Fiducia e valori"
            className="rounded-lg shadow-xl w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B7F5C]/90 to-transparent rounded-lg flex items-center">
            <div className="p-8 md:p-12 text-white max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">La Vera Ricchezza</h3>
              <p className="text-xl mb-6">
                La vera ricchezza non è delegare. La vera ricchezza è sapere cosa fare.
              </p>
              <p className="text-lg">
                Troppo spesso consegniamo i nostri risparmi a mani che non conosciamo, sperando che facciano i nostri interessi. Con il nostro corso, diventi tu il protagonista delle tue scelte finanziarie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
