import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:investireconme@gmail.com?subject=Richiesta Informazioni Corso ETF&body=Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefono: ${formData.phone}%0D%0AAzienda: ${formData.company}%0D%0A%0D%0AMessaggio:%0D%0A${formData.message}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: 'Richiesta inviata!',
      description: 'Ti contatteremo al più presto per fornirti tutte le informazioni.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contatti" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3A2A] mb-4">Contattaci</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Richiedi informazioni sul corso o prenota la tua partecipazione. Posti limitati!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1B7F5C]">Informazioni di Contatto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-[#1B7F5C] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:investireconme@gmail.com" className="text-gray-600 hover:text-[#1B7F5C] transition-colors">
                      investireconme@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#1B7F5C] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Sedi</h4>
                    <p className="text-gray-600">10 Locations in tutta Italia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-[#1B7F5C] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Orari</h4>
                    <p className="text-gray-600">Lun-Ven: 9:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <img
                src="/assets/contact-consultation.jpg"
                alt="Consulenza"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-[#1B7F5C]">Richiedi Informazioni</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome e Cognome *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Mario Rossi"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="mario.rossi@example.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+39 123 456 7890"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Azienda</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome della tua azienda"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Messaggio *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Scrivi qui la tua richiesta o domande sul corso..."
                    className="mt-1 min-h-32"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#F5B800] hover:bg-[#F5B800]/90 text-gray-900 font-bold text-lg py-6">
                  Invia Richiesta
                  <Send className="ml-2" size={20} />
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Campi obbligatori. Ti risponderemo entro 24 ore.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 bg-gradient-to-r from-[#1B7F5C] to-[#0A3A2A] text-white">
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Durata: 8 ore | Prezzo: 170€ p.p.</h3>
              <p className="text-xl mb-2">POSTI LIMITATI</p>
              <p className="text-lg">
                Prenota subito il tuo posto e inizia il tuo percorso verso l'indipendenza finanziaria
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}