import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, TrendingUp, BookOpen } from 'lucide-react';

export default function ChiSiamo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-[#0A3A2A] to-[#1B7F5C]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Chi Siamo</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              AR Consulting – Formazione Finanziaria per l'Autonomia dei Dipendenti
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <Card className="mb-12">
              <CardContent className="pt-8 pb-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    AR Consulting, con sede ad <strong>Ancona, Italia</strong>, è un punto di riferimento nel campo dell'educazione finanziaria e della consulenza operativa. Dal 2024, attraverso il nostro corso di formazione <strong>"InvestireconTe"</strong>, abbiamo già formato oltre <strong>250 persone</strong>, portando un approccio concreto e pratico direttamente nelle aziende.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    La nostra missione è restituire autonomia e consapevolezza finanziaria ai dipendenti, offrendo strumenti e strategie semplici per investire in modo indipendente, senza dover delegare alle banche. Crediamo fermamente che la vera ricchezza risieda nella conoscenza di cosa fare, e per questo rendiamo accessibile il mondo degli investimenti a chiunque desideri prendersi cura del proprio futuro economico.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-8 pb-8">
                  <Users className="mx-auto mb-4 text-[#1B7F5C]" size={48} />
                  <h3 className="text-3xl font-bold text-[#1B7F5C] mb-2">250+</h3>
                  <p className="text-gray-600">Persone Formate</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8 pb-8">
                  <Award className="mx-auto mb-4 text-[#1B7F5C]" size={48} />
                  <h3 className="text-3xl font-bold text-[#1B7F5C] mb-2">AIEF</h3>
                  <p className="text-gray-600">Certificazione</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8 pb-8">
                  <BookOpen className="mx-auto mb-4 text-[#1B7F5C]" size={48} />
                  <h3 className="text-3xl font-bold text-[#1B7F5C] mb-2">6 Ore</h3>
                  <p className="text-gray-600">Formazione Pratica</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8 pb-8">
                  <TrendingUp className="mx-auto mb-4 text-[#1B7F5C]" size={48} />
                  <h3 className="text-3xl font-bold text-[#1B7F5C] mb-2">10%</h3>
                  <p className="text-gray-600">Rendimento Medio</p>
                </CardContent>
              </Card>
            </div>

            {/* Certification */}
            <Card className="mb-12 bg-gradient-to-r from-[#1B7F5C]/10 to-[#0A3A2A]/10">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold text-[#0A3A2A] mb-6">Certificazione e Qualità</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  I nostri docenti sono membri certificati dell'<strong>AIEF (Associazione Italiana Educatori Finanziari)</strong>, un ente riconosciuto dal Ministero dell'Economia e dello Sviluppo, che garantisce la qualità e la professionalità della nostra offerta formativa.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Il percorso formativo che proponiamo è pratico e guidato, della durata di <strong>sei ore continuative</strong>, durante le quali i partecipanti si cimentano in esercitazioni e simulazioni per acquisire competenze operative reali. Alla fine del percorso, gli studenti saranno pienamente operativi e indipendenti nella gestione dei propri investimenti. Inoltre, offriamo assistenza personalizzata a ogni singolo studente per risolvere eventuali dubbi o domande che potrebbero sorgere anche dopo il completamento del corso.
                </p>
              </CardContent>
            </Card>

            {/* Strategies */}
            <Card className="mb-12">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold text-[#0A3A2A] mb-6">Le Nostre Strategie</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Le strategie che insegniamo sono replicabili e basate su portafogli che hanno registrato un <strong>rendimento medio annuo del 10% dal 2014</strong>. I partecipanti imparano a:
                </p>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#F5B800] mr-3 text-2xl">•</span>
                    <span>Analizzare il proprio stato patrimoniale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5B800] mr-3 text-2xl">•</span>
                    <span>Identificare il proprio profilo di rischio personale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5B800] mr-3 text-2xl">•</span>
                    <span>Comprendere la struttura del mercato finanziario</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5B800] mr-3 text-2xl">•</span>
                    <span>Selezionare ETF e PAC con criterio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5B800] mr-3 text-2xl">•</span>
                    <span>Inserire ordini di acquisto e vendita</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5B800] mr-3 text-2xl">•</span>
                    <span>Leggere grafici di borsa in modo intuitivo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F5B800] mr-3 text-2xl">•</span>
                    <span>Applicare una strategia mensile per generare rendimento extra</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Why Companies Choose Us */}
            <Card className="bg-gradient-to-r from-[#1B7F5C] to-[#0A3A2A] text-white">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold mb-6">Perché le Aziende ci Scelgono</h2>
                <p className="text-xl leading-relaxed">
                  Le aziende scelgono AR Consulting perché offriamo un percorso formativo <strong>concreto, utile e immediatamente applicabile</strong>, che favorisce la crescita personale e professionale dei dipendenti e rafforza il senso di responsabilità e autonomia finanziaria.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}