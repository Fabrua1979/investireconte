import { Button } from '@/components/ui/button';
import { ArrowRight, Users, MapPin } from 'lucide-react';

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
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            Corso pratico sugli ETF per dipendenti aziendali. Impara a proteggere e far crescere il tuo patrimonio.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Users className="text-[#F5B800]" size={24} />
              <span className="font-semibold">250+ Clienti</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <MapPin className="text-[#F5B800]" size={24} />
              <span className="font-semibold">10 Locations</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-2xl font-bold text-[#F5B800]">8h</span>
              <span className="font-semibold">Durata Corso</span>
            </div>
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