# TapWork Landing Page

Landing page ad alta conversione per TapWork - App premium di time tracking per iOS.

## 🚀 Deploy su GitHub Pages

### 1️⃣ Prepara gli Screenshot

Salva i 4 screenshot di TapWork nella cartella `public/images/` con questi nomi:

```
public/
  images/
    app-icon.png          ← Icona app (1024x1024)
    timer-screen.png      ← Schermata timer
    activity-screen.png   ← Grafici attività
    week-screen.png       ← Anelli settimanali
```

### 2️⃣ Carica su GitHub

```bash
# Clona il repository
git clone https://github.com/iaco97x/tapworlanding.git
cd tapworlanding

# Aggiungi tutti i file
git add .
git commit -m "Add TapWork landing page"
git push origin main
```

### 3️⃣ GitHub Pages si Attiverà Automaticamente

Il workflow `.github/workflows/deploy.yml` builderà e deployerà automaticamente su:
- **GitHub Pages:** https://iaco97x.github.io/tapworlanding/
- **Dominio Custom:** https://www.tapwork.it

## 🎨 Tecnologie

- **React 18** + **TypeScript**
- **Tailwind CSS v4**
- **Motion** (Framer Motion) per animazioni
- **Vite** per build e bundling
- **Lucide React** per icone

## 📱 Link TestFlight

https://testflight.apple.com/join/uahVF1EJ

## 🌈 Palette Colori

- **Blu Lavoro:** `#007AFF`
- **Rosa Straordinari:** `#FF2D55`
- **Arancione Pausa:** `#FF9500`

## 📝 Note

- Il `base` in `vite.config.js` è configurato per `/tapworlanding/`
- Il CNAME per `www.tapwork.it` è in `public/CNAME`
- I DNS su IONOS devono puntare `www` → `iaco97x.github.io`
