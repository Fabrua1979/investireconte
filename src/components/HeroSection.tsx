import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contatti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/hero-financial-growth.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A3A2A]/95 to-[#1B7F5C]/90"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-white">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Sei Pronto a Prendere il Controllo del Tuo Futuro Finanziario?
          </h1>
          
          <div className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5B800] mb-4">Perché questo corso sugli ETF</h2>
            
            <p>
              Il denaro non è un fine, ma un mezzo: se togliamo salute e affetti, resta lo strumento che ti permette di vivere con più serenità, di scegliere con libertà e di affrontare il futuro senza ansie inutili.
            </p>
            
            <p>
              Eppure, la maggior parte delle persone continua ad affidare i propri risparmi alle banche, convinta che sia la scelta più sicura.
            </p>
            
            <p>
              La realtà è diversa. Studi condotti da organismi europei hanno dimostrato che oltre il 90% dei fondi proposti dalle banche non riesce a superare i rendimenti del mercato di riferimento. Questo accade perché gran parte dei profitti viene assorbita da commissioni e costi di gestione, lasciando agli investitori solo le briciole. In altre parole: tu ti assumi il rischio, ma i guadagni reali finiscono altrove.
            </p>
            
            <h3 className="text-xl md:text-2xl font-bold text-[#F5B800] mt-6 mb-3">L'effetto invisibile dell'inflazione</h3>
            
            <p>
              C'è poi un nemico silenzioso: l'inflazione. Anche se lasci i soldi "fermi" sul conto, il loro potere d'acquisto diminuisce anno dopo anno.
            </p>
            
            <p>
              Supponiamo di avere 10.000 € oggi. Con un'inflazione media del 3% annuo, tra 10 anni il potere d'acquisto scende a circa 7.400 € equivalenti. Significa che con gli stessi soldi potrai comprare molto meno, senza che tu abbia speso un centesimo.
            </p>
            
            <p>
              In altre parole, non investire equivale a perdere denaro lentamente ma inesorabilmente.
            </p>
            
            <h3 className="text-xl md:text-2xl font-bold text-[#F5B800] mt-6 mb-3">La soluzione: imparare a gestire gli ETF</h3>
            
            <p>
              Gli ETF (Exchange Traded Funds) rappresentano un'alternativa concreta e trasparente. Sono strumenti semplici, a basso costo, che replicano l'andamento del mercato senza gli strati di commissioni tipici dei fondi tradizionali. Imparare a conoscerli significa riprendere il controllo dei tuoi risparmi, smettere di delegare a chi ha interessi diversi dai tuoi e iniziare a costruire un portafoglio efficiente e sostenibile.
            </p>
            
            <p>
              Questo corso nasce per chi parte da zero e vuole capire, passo dopo passo, come funzionano gli ETF e come usarli per investire con consapevolezza. Non troverai teorie astratte, ma esempi pratici, strategie semplici e strumenti operativi che ti permetteranno di agire subito.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#F5B800] hover:bg-[#F5B800]/90 text-gray-900 font-bold text-lg px-8 py-6"
            >
              Iscriviti Ora
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('perche');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1B7F5C] font-bold text-lg px-8 py-6"
            >
              Scopri di Più
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
