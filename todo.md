# Sito Web InvestireConME - Piano di Sviluppo

## Linee Guida di Design

### Riferimenti di Design
- **Locandine del corso**: Design professionale con verde e giallo come colori principali
- **Stile**: Moderno, Professionale, Finanziario, Accessibile
- **Ispirazione**: Siti di consulenza finanziaria e formazione professionale

### Palette Colori
- Primary: #1B7F5C (Verde principale - dal brand)
- Secondary: #F5B800 (Giallo accento - dal brand)
- Background: #FFFFFF (Bianco - sfondo principale)
- Dark: #0A3A2A (Verde scuro - testi e contrasti)
- Light: #F8F9FA (Grigio chiaro - sezioni alternate)
- Text: #2C3E50 (Grigio scuro - testo principale)
- Muted: #6C757D (Grigio medio - testo secondario)

### Tipografia
- Heading1: Inter font-weight 700 (48px) - Titoli principali
- Heading2: Inter font-weight 600 (36px) - Titoli sezione
- Heading3: Inter font-weight 600 (24px) - Sottotitoli
- Body: Inter font-weight 400 (16px) - Testo normale
- Small: Inter font-weight 400 (14px) - Testo piccolo

### Stili Componenti Chiave
- **Buttons**: Verde (#1B7F5C) con hover più chiaro, giallo (#F5B800) per CTA principali, bordi arrotondati 8px
- **Cards**: Sfondo bianco, bordo sottile grigio (#E9ECEF), ombra leggera, hover: lift 4px
- **Forms**: Input con bordo grigio, focus: bordo verde, placeholder grigio chiaro
- **Sezioni**: Alternanza tra sfondo bianco e grigio chiaro per separazione visiva

### Layout e Spaziatura
- Hero section: Altezza viewport con immagine di sfondo e overlay
- Sezioni: Padding verticale 80px desktop, 60px mobile
- Container: Max-width 1200px, padding laterale 24px
- Grid: 3 colonne desktop, 2 tablet, 1 mobile, gap 24px

### Immagini da Generare
1. **hero-financial-growth.jpg** - Immagine hero con tema crescita finanziaria, grafici in salita, atmosfera professionale (Style: photorealistic, bright professional)
2. **inflation-impact.jpg** - Rappresentazione visiva dell'impatto dell'inflazione sui risparmi (Style: photorealistic, educational)
3. **etf-learning.jpg** - Persone che imparano investimenti, ambiente formativo moderno (Style: photorealistic, educational setting)
4. **financial-tools.jpg** - Strumenti finanziari, calcolatrici, grafici, laptop (Style: photorealistic, professional workspace)
5. **trust-values.jpg** - Stretta di mano, fiducia, partnership professionale (Style: photorealistic, business professional)
6. **contact-consultation.jpg** - Consulenza finanziaria, meeting professionale (Style: photorealistic, office consultation)

---

## Task di Sviluppo

### 1. Setup e Configurazione
- ✅ Template inizializzato
- ✅ Immagini locandine copiate
- ⏳ Generare tutte le immagini necessarie
- ⏳ Aggiornare index.html con titolo e meta tag

### 2. Componenti Riutilizzabili
- ⏳ Navbar con logo e navigazione
- ⏳ Footer con informazioni aziendali
- ⏳ Card per benefici del corso
- ⏳ Form di contatto

### 3. Sezioni Homepage
- ⏳ Hero Section con CTA
- ⏳ Sezione "Perché Investire" con statistiche ISTAT
- ⏳ Sezione "Cosa Imparerai"
- ⏳ Sezione "Cosa Offriamo"
- ⏳ Sezione "I Nostri Valori"
- ⏳ Sezione Contatti con form

### 4. Styling e Animazioni
- ⏳ Applicare palette colori personalizzata
- ⏳ Animazioni scroll reveal
- ⏳ Hover effects sui componenti
- ⏳ Responsive design completo

### 5. Testing e Ottimizzazione
- ⏳ Test responsive su diversi dispositivi
- ⏳ Verifica accessibilità
- ⏳ Ottimizzazione performance
- ⏳ Lint e build finale