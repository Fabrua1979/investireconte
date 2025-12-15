import { Mail, Globe, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A3A2A] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#F5B800] mb-4">InvestireConTE</h3>
            <p className="text-gray-300 mb-4">
              AR Consulting Financial Education
            </p>
            <p className="text-gray-300 mb-4">
              P.IVA: IT02951580428
            </p>
            <p className="text-sm text-gray-400">
              Il tuo partner di fiducia per il successo finanziario
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#F5B800]" />
                <a href="mailto:info@investireconte.com" className="text-gray-300 hover:text-[#F5B800] transition-colors">
                  info@investireconte.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Informazioni</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Questo corso ha finalità esclusivamente formative. Non garantiamo guadagni sicuri e i risultati passati non sono garanzia di risultati futuri. Non forniamo consulenza finanziaria personalizzata.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AR Consulting Financial Education. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            La vera ricchezza non è delegare. La vera ricchezza è sapere cosa fare.
          </p>
        </div>
      </div>
    </footer>
  );
}
