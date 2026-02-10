# 🚀 Istruzioni Deploy TapWork Landing Page

## 📦 Cosa Hai

Un progetto React + Vite completo, pronto per GitHub Pages.

---

## ✅ Checklist Pre-Deploy

### 1️⃣ Scarica il Progetto da Figma Make

Clicca il pulsante **"Download"** in alto a destra → Scarica lo ZIP

### 2️⃣ Prepara gli Screenshot

Hai ricevuto 4 screenshot di TapWork. Salvali con questi nomi:

- **`app-icon.png`** → Icona TapWork (quadrata, 1024x1024 consigliato)
- **`timer-screen.png`** → Screenshot della schermata timer
- **`activity-screen.png`** → Screenshot grafici a barre mensili
- **`week-screen.png`** → Screenshot anelli settimanali

---

## 🎯 Metodo 1: Upload Diretto su GitHub (FACILE)

### Step 1: Vai su GitHub

Apri: https://github.com/iaco97x/tapworlanding

### Step 2: Carica Tutto

1. **Estrai lo ZIP** scaricato da Figma Make
2. **Clicca "Upload files"** su GitHub
3. **Trascina TUTTI i file e cartelle** (tranne eventuali `.git` o `node_modules`)
4. **Commit changes** con messaggio tipo: "Add TapWork landing page"

### Step 3: Carica gli Screenshot

1. **Vai nella cartella** `public/images/`
2. **Clicca "Upload files"**
3. **Trascina i 4 screenshot** (con i nomi esatti sopra)
4. **Commit changes**

### Step 4: Verifica il Deploy

1. **Vai su:** https://github.com/iaco97x/tapworlanding/actions
2. Aspetta che il workflow **diventi verde** ✅ (2-3 minuti)
3. **Visita:** https://www.tapwork.it

🎉 **FATTO!**

---

## 🎯 Metodo 2: Git da Terminale (AVANZATO)

### Step 1: Prepara il Progetto

```bash
# Estrai lo ZIP scaricato da Figma Make
cd percorso/al/progetto

# Aggiungi gli screenshot nella cartella corretta
mkdir -p public/images
# Copia i 4 PNG in public/images/
```

### Step 2: Inizializza Git

```bash
git init
git remote add origin https://github.com/iaco97x/tapworlanding.git
```

### Step 3: Commit e Push

```bash
git add .
git commit -m "Add TapWork landing page with screenshots"
git branch -M main
git push -u origin main --force
```

### Step 4: Verifica

Vai su: https://github.com/iaco97x/tapworlanding/actions

---

## ⚙️ File Importanti

| File | Cosa Fa |
|------|---------|
| `vite.config.js` | Configura il base path `/tapworlanding/` |
| `public/CNAME` | Dice a GitHub di usare `www.tapwork.it` |
| `.github/workflows/deploy.yml` | Workflow automatico di deploy |
| `public/images/*.png` | Screenshot di TapWork |

---

## 🌐 Domini e DNS

### GitHub Pages (automatico)
- https://iaco97x.github.io/tapworlanding/

### Dominio Custom (già configurato)
- https://www.tapwork.it
- **DNS IONOS:** CNAME `www` → `iaco97x.github.io`

---

## 🐛 Troubleshooting

### ❌ Il workflow fallisce

**Controlla che questi file esistano:**
- `package.json`
- `vite.config.js`
- `index.html`
- `main.tsx`
- `App.tsx`

### ❌ Le immagini non si vedono

**Verifica i nomi esatti:**
```
public/images/app-icon.png         ← NO spazi, NO maiuscole casuali
public/images/timer-screen.png
public/images/activity-screen.png
public/images/week-screen.png
```

### ❌ Il dominio custom non funziona

1. **Vai su:** Settings → Pages
2. **Custom domain:** scrivi `www.tapwork.it`
3. **Aspetta 5-10 minuti** per la propagazione DNS
4. **Ricarica la pagina** con CTRL+F5

---

## 📱 Link Utili

- **Repository:** https://github.com/iaco97x/tapworlanding
- **Actions (Deploy Log):** https://github.com/iaco97x/tapworlanding/actions
- **GitHub Pages Settings:** https://github.com/iaco97x/tapworlanding/settings/pages
- **TestFlight:** https://testflight.apple.com/join/uahVF1EJ

---

## ✨ Dopo il Deploy

Il sito sarà live su **www.tapwork.it** con:
- ✅ Hero section con CTA TestFlight
- ✅ Dashboard con grafici interattivi
- ✅ Features intelligenti (GPS, orari flessibili)
- ✅ Sezione "Curiosità"
- ✅ Footer con link
- ✅ Animazioni fluide con Motion
- ✅ Design Apple-like con glassmorphism

---

🎉 **Buon deploy!**
