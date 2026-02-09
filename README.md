# TapWork Landing Page

Landing page ad alta conversione per TapWork - App Premium di Time Tracking per iOS.

## 🚀 Deploy

Questo progetto è configurato per il deploy automatico su GitHub Pages.

### Setup Iniziale

1. **Abilita GitHub Pages nel repository:**
   - Vai su Settings → Pages
   - Source: seleziona "GitHub Actions"

2. **Configura il dominio personalizzato:**
   - Sempre in Settings → Pages
   - Custom domain: inserisci `www.tapwork.it`
   - Clicca "Save"

3. **Configura i DNS del dominio:**
   Nel tuo provider di dominio, aggiungi questi record:

   ```
   Tipo: CNAME
   Nome: www
   Valore: TUO-USERNAME.github.io
   
   Tipo: A
   Nome: @
   Valore: 185.199.108.153
   
   Tipo: A
   Nome: @
   Valore: 185.199.109.153
   
   Tipo: A
   Nome: @
   Valore: 185.199.110.153
   
   Tipo: A
   Nome: @
   Valore: 185.199.111.153
   ```

## 🛠️ Sviluppo Locale

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build
```

## 📦 Tech Stack

- React 18
- Vite
- Tailwind CSS v4
- Motion (Framer Motion)
- Lucide Icons

## 🎨 Design

Design ispirato alle app Apple Salute e Fitness con:
- Palette colori: #007AFF (Blu), #FF2D55 (Rosa), #FF9500 (Arancione)
- Typography: SF Pro Rounded
- Border radius: 20px
- Spaziatura generosa e design pulito

## 📄 License

© 2026 TapWork. Tutti i diritti riservati.
