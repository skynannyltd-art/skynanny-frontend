# 🔄 GUIDE DE RESTAURATION COMPLÈTE - SkyNanny Frontend

## 📊 Informations de Sauvegarde

- **Date de sauvegarde** : 05/05/2026 à 18:15:00
- **Version Node.js** : v25.6.0
- **Version NPM** : 11.8.0
- **Dernier commit Git** : `428b625`
- **Branche Git** : `main`
- **Repository GitHub** : https://github.com/skynannyltd-art/skynanny-frontend

---

## 🎯 Statistiques du Projet

- **Pages totales** : 27 (16 publiques + 11 admin)
- **Composants** : 32
- **Langues** : 3 (Français, English, Español)
- **Clés de traduction** : 680+
- **Fichiers source** : ~100+
- **Animations** : Framer Motion (scroll, hover, fade-in)
- **Logo** : Professionnel (globe + avion + nuages)

---

## 🛠️ Technologies Utilisées

- **Framework** : React 18.3.1
- **Build Tool** : Vite 5.4.0
- **Styling** : Tailwind CSS 3.4.0
- **Routing** : React Router v6
- **Animations** : Framer Motion 11.x
- **i18n** : react-i18next 15.x
- **Icons** : Lucide React
- **Charts** : Recharts 2.x
- **HTTP Client** : Axios 1.x

---

## 📦 Dépendances Principales

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.x",
    "react-i18next": "^15.x",
    "i18next": "^23.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.x",
    "recharts": "^2.x",
    "axios": "^1.x"
  },
  "devDependencies": {
    "vite": "^5.4.0",
    "@vitejs/plugin-react": "^4.3.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.x",
    "postcss": "^8.x"
  }
}
```

---

## 🔧 PROCÉDURE DE RESTAURATION COMPLÈTE

### Étape 1 : Cloner le Repository depuis GitHub

```powershell
# Ouvrir PowerShell
# Aller dans le dossier où vous voulez restaurer le projet
cd C:\Users\Administrateur

# Cloner le repository
git clone https://github.com/skynannyltd-art/skynanny-frontend.git

# Entrer dans le dossier
cd skynanny-frontend
```

---

### Étape 2 : Installer Node.js (si nécessaire)

**Si Node.js n'est pas installé sur la nouvelle machine :**

1. Télécharger Node.js LTS depuis : https://nodejs.org/
2. Installer la version LTS (Long Term Support)
3. Vérifier l'installation :
```powershell
   node --version
   npm --version
```

**Version recommandée** : Node.js 18.x ou supérieur

---

### Étape 3 : Installer les Dépendances

```powershell
# Installer TOUTES les dépendances (recrée node_modules)
npm install

# OU pour installer les versions exactes du package-lock.json
npm ci
```

**Durée estimée** : 2-5 minutes (selon connexion internet)

**Résultat** : Le dossier `node_modules` sera recréé avec toutes les bibliothèques (~200-300 MB)

---

### Étape 4 : Vérifier la Configuration

```powershell
# Vérifier que Vite est bien installé
npm list vite

# Vérifier que React est bien installé
npm list react

# Vérifier Framer Motion (animations)
npm list framer-motion

# Vérifier toutes les dépendances principales
npm list --depth=0
```

---

### Étape 5 : Créer le fichier .env (si nécessaire)

**Si votre projet utilise des variables d'environnement :**

```powershell
# Créer le fichier .env à la racine du projet
notepad .env
```

**Contenu du .env (exemple) :**
```env
# API Backend
VITE_API_URL=http://localhost:3000/api

# Autres variables si nécessaire
VITE_APP_NAME=SkyNanny
```

**⚠️ IMPORTANT** : Ne jamais commiter le fichier .env sur GitHub !

---

### Étape 6 : Lancer le Serveur de Développement

```powershell
# Lancer le serveur local
npm run dev

# OU pour rendre accessible sur le réseau local
npm run dev -- --host
```

**Le site sera accessible sur :**
- Local : http://localhost:5173
- Réseau : http://192.168.1.216:5173

---

### Étape 7 : Vérification Finale

**✅ Checklist de vérification :**

- [ ] Le serveur démarre sans erreur
- [ ] La page d'accueil s'affiche correctement
- [ ] Le logo SkyNanny (globe + avion) apparaît dans la navbar (taille h-16)
- [ ] Les 3 langues (FR/EN/ES) fonctionnent avec le sélecteur
- [ ] Les animations au scroll fonctionnent (sections apparaissent en fade-in)
- [ ] La section témoignages s'affiche avec 3 cartes et étoiles
- [ ] Le bouton scroll-to-top apparaît après 300px de scroll
- [ ] Les hover effects fonctionnent sur les cartes
- [ ] Toutes les 27 pages sont accessibles
- [ ] Le footer s'affiche avec le logo et les liens légaux
- [ ] La mission s'affiche en police cursive avec signature CEO

---

## 🏗️ Commandes de Build (Production)

```powershell
# Créer une version de production (dossier dist/)
npm run build

# Prévisualiser le build de production
npm run preview
```

---

## 📁 Structure du Projet
skynanny-frontend/
├── public/                  # Fichiers publics statiques
├── src/
│   ├── assets/
│   │   └── logo.png        # Logo SkyNanny (globe + avion)
│   ├── components/         # 32 composants
│   │   ├── Navbar.jsx      # Navbar avec logo h-16
│   │   ├── Footer.jsx      # Footer avec logo h-16
│   │   ├── LanguageSwitcher.jsx  # Sélecteur FR/EN/ES avec drapeaux
│   │   ├── Testimonials.jsx      # Section témoignages clients
│   │   ├── ScrollToTop.jsx       # Bouton scroll-to-top animé
│   │   └── admin/          # Composants admin
│   │       ├── AdminLayout.jsx
│   │       └── AdminSidebar.jsx
│   ├── pages/              # 27 pages
│   │   ├── HomePage.jsx    # Page d'accueil avec animations
│   │   ├── AboutPage.jsx   # À propos avec mission cursive
│   │   ├── ContactPage.jsx # Contact (email uniquement)
│   │   ├── RegisterPage.jsx  # Inscription avec checkbox CGU
│   │   ├── TermsPage.jsx   # CGU complètes
│   │   ├── PrivacyPage.jsx # Confidentialité RGPD
│   │   ├── CookiesPage.jsx # Politique cookies
│   │   ├── LegalPage.jsx   # Mentions légales
│   │   ├── QualityCharterPage.jsx  # Charte qualité
│   │   └── admin/          # 11 pages admin
│   │       ├── DashboardPage.jsx
│   │       ├── BabysittersPage.jsx
│   │       ├── FlightsPage.jsx
│   │       ├── BookingsPage.jsx
│   │       ├── StatsPage.jsx (avec Recharts)
│   │       └── ...
│   ├── locales/            # Traductions
│   │   ├── fr/
│   │   │   └── translation.json  # 680+ clés FR
│   │   ├── en/
│   │   │   └── translation.json  # 680+ clés EN
│   │   └── es/
│   │       └── translation.json  # 680+ clés ES
│   ├── i18n.js             # Configuration i18n
│   ├── App.jsx             # 27 routes
│   ├── main.jsx            # Point d'entrée
│   └── index.css           # Styles globaux + Dancing Script font
├── .gitignore              # Fichiers ignorés (node_modules, dist, .env)
├── package.json            # Dépendances
├── package-lock.json       # Versions exactes
├── vite.config.js          # Configuration Vite 5.4.0
├── tailwind.config.js      # Configuration Tailwind
├── postcss.config.js       # Configuration PostCSS
├── RESTORATION_GUIDE.md    # Ce fichier
└── index.html              # HTML principal

---

## 🚨 Résolution de Problèmes Courants

### Problème 1 : Erreur "Cannot find module"

**Solution :**
```powershell
# Supprimer node_modules et package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json

# Réinstaller
npm install
```

---

### Problème 2 : Erreur de version Vite/React

**Solution :**
```powershell
# Installer les versions spécifiques compatibles
npm install vite@^5.4.0 @vitejs/plugin-react@^4.3.0 --save-dev
npm install
```

---

### Problème 3 : Port 5173 déjà utilisé

**Solution :**
```powershell
# Utiliser un autre port
npm run dev -- --port 3000
```

---

### Problème 4 : Erreurs de traduction JSON

**Vérifier que les fichiers existent et sont valides :**
```powershell
Get-Content src\locales\fr\translation.json
Get-Content src\locales\en\translation.json
Get-Content src\locales\es\translation.json
```

**Si erreur "Invalid JSON" :** Vérifier les virgules en trop/manquantes dans les fichiers JSON

---

### Problème 5 : Logo ne s'affiche pas

**Vérifier que le fichier existe :**
```powershell
Get-Item src\assets\logo.png
```

**Si absent :** Récupérer depuis GitHub ou copier depuis backup

---

### Problème 6 : Animations ne fonctionnent pas

**Vérifier que Framer Motion est installé :**
```powershell
npm list framer-motion
```

**Si absent :**
```powershell
npm install framer-motion
```

---

## 🔄 Mise à Jour du Projet

```powershell
# Récupérer les dernières modifications depuis GitHub
git pull origin main

# Réinstaller les dépendances (si package.json a changé)
npm install

# Relancer le serveur
npm run dev -- --host
```

---

## 📝 Liste Complète des Pages

### Pages Publiques (16)
1. **/** - HomePage (Hero + Services + Mission cursive + Témoignages + Animations)
2. **/welcome** - WelcomePage (Choix Famille/Babysitter)
3. **/about** - AboutPage (Mission + Valeurs + Histoire + Engagement)
4. **/how-it-works** - HowItWorksPage (4 étapes)
5. **/services** - ServicesPage (3 services)
6. **/contact** - ContactPage (Email + Formulaire)
7. **/faq** - FAQPage (6 Q&R avec accordéon)
8. **/search/babysitter** - SearchBabysitterPage (Recherche pour familles)
9. **/search/family** - SearchFamilyPage (Recherche pour babysitters)
10. **/login** - LoginPage
11. **/register** - RegisterPage (avec checkbox CGU obligatoire)
12. **/terms** - TermsPage (CGU - 8 sections)
13. **/privacy** - PrivacyPage (Confidentialité RGPD - 8 sections)
14. **/cookies** - CookiesPage (Cookies - 8 sections)
15. **/legal** - LegalPage (Mentions légales - 8 sections)
16. **/quality-charter** - QualityCharterPage (Charte qualité - 6 engagements)

### Pages Admin (11)
1. **/admin/login** - AdminLoginPage
2. **/admin/dashboard** - DashboardPage (Vue d'ensemble)
3. **/admin/babysitters** - BabysittersPage (Liste + stats)
4. **/admin/babysitters/:id** - BabysitterDetailPage (Profil détaillé)
5. **/admin/flights** - FlightsPage (Gestion vols)
6. **/admin/flights/:id** - FlightDetailPage (Détail vol + tarification)
7. **/admin/bookings** - BookingsPage (Réservations)
8. **/admin/bookings/:id** - BookingDetailPage (Détail réservation)
9. **/admin/stats** - StatsPage (Statistiques + Recharts)
10. **/admin/users** - UsersPage (Gestion utilisateurs)
11. **/admin/documents** - DocumentsPage (Vérification documents)

---

## 🎨 Fonctionnalités Principales

### ✅ Internationalization (i18n)
- **3 langues complètes** : Français, English, Español
- **680+ clés de traduction** par langue
- **Détection automatique** de la langue navigateur
- **Persistance** dans localStorage
- **Sélecteur visuel** avec drapeaux SVG (🇫🇷 🇬🇧 🇪🇸)
- **Changement instantané** sans rechargement

### ✅ Animations (Framer Motion)
- **Scroll animations** : fade-in, slide-in sur sections
- **Animations échelonnées** : éléments apparaissent un par un
- **Hover effects** : cartes se soulèvent, boutons grossissent
- **Bouton scroll-to-top** : apparaît après 300px, flèche animée
- **Transitions fluides** : entre tous les états

### ✅ Design & UX
- **Tailwind CSS** : utility-first styling
- **Responsive design** : optimisé mobile + desktop
- **Logo professionnel** : globe + avion + nuages (h-16 dans navbar/footer)
- **Police cursive** : Dancing Script pour texte mission + signature CEO
- **Footer complet** : 4 colonnes + newsletter + réseaux sociaux SVG
- **Section témoignages** : 3 cartes avec étoiles ⭐⭐⭐⭐⭐

### ✅ Navigation
- **React Router v6** : routing client-side
- **27 pages accessibles**
- **Navbar responsive** : menu déroulant mobile
- **ScrollToTop component** : remonte automatiquement en haut
- **Liens légaux** : CGU, Confidentialité, Cookies, Mentions légales

### ✅ Pages Légales (Conformité RGPD)
- **5 pages complètes** traduites en 3 langues
- **Checkbox CGU obligatoire** sur inscription avec lien actif
- **Contenu structuré** : 8 sections par page
- **Conformité** : RGPD, cookies, mentions légales

### ✅ Admin Dashboard
- **11 pages d'administration**
- **Graphiques Recharts** : statistiques visuelles
- **Gestion complète** : babysitters, vols, réservations, users, docs
- **Tarification claire** : 30% commission, 5% frais SkyNanny
- **Mock data** : prêt pour intégration API

---

## 🔐 Informations Sensibles

**⚠️ NE JAMAIS commiter sur GitHub :**
- Fichier `.env` (variables d'environnement)
- Clés API (Stripe, SendGrid, etc.)
- Mots de passe base de données
- Tokens d'authentification JWT
- Secrets d'applications tierces

**💾 Sauvegarder séparément dans :**
- Gestionnaire de mots de passe (1Password, LastPass)
- Fichier local crypté
- Variables d'environnement serveur (lors déploiement)

---

## 💰 Modèle Tarifaire (Documentation)

**Calcul des commissions SkyNanny :**

**Exemple : Vol Paris → New York**
- Prix billet babysitter : **450€**
- Commission babysitter (30%) : **135€**
- Frais plateforme babysitter (5% de 135€) : **-6.75€**
- **→ Babysitter reçoit : 128.25€**

- Frais plateforme famille (5% de 135€) : **+6.75€**
- **→ Famille paie : 141.75€**

- **→ SkyNanny commission totale : 13.50€** (10% de la transaction)

**Variables backend à implémenter :**
- `ticket_price` : Prix du billet
- `babysitter_commission_rate` : 30%
- `platform_fee_rate` : 5%
- `babysitter_net_amount` : Ce que reçoit la babysitter
- `family_total_payment` : Ce que paie la famille
- `skynanny_total_commission` : Revenu SkyNanny

---

## 📞 Support & Contacts

**Repository GitHub** : https://github.com/skynannyltd-art/skynanny-frontend

**Documentation officielle :**
- React : https://react.dev
- Vite : https://vitejs.dev
- Tailwind CSS : https://tailwindcss.com
- Framer Motion : https://www.framer.com/motion
- React Router : https://reactrouter.com
- React i18next : https://react.i18next.com

**En cas de problème :**
1. ✅ Vérifier ce guide de restauration
2. ✅ Consulter les documentations officielles
3. ✅ Vérifier les issues GitHub du projet
4. ✅ Vérifier package.json et versions des dépendances

---

## ✅ Checklist de Restauration Complète

### Configuration Initiale
- [ ] Node.js installé (version 18+)
- [ ] Git installé et configuré
- [ ] Repository cloné depuis GitHub
- [ ] `npm install` exécuté avec succès
- [ ] node_modules/ créé (~200-300 MB)
- [ ] .env créé (si nécessaire)

### Démarrage
- [ ] `npm run dev` démarre sans erreur
- [ ] Site accessible sur http://localhost:5173
- [ ] Console sans erreurs critiques

### Visuel & Design
- [ ] Logo SkyNanny visible (h-16 navbar + footer)
- [ ] Police Dancing Script chargée (mission + signature)
- [ ] Couleurs Tailwind correctes (bleu primary, rose secondary)
- [ ] Design responsive sur mobile

### Fonctionnalités
- [ ] 3 langues fonctionnelles (FR/EN/ES)
- [ ] Sélecteur langue avec drapeaux fonctionne
- [ ] Animations au scroll fonctionnent
- [ ] Section témoignages visible avec 3 cartes
- [ ] Bouton scroll-to-top apparaît et fonctionne
- [ ] Hover effects sur cartes fonctionnent

### Navigation
- [ ] Toutes les 27 pages accessibles
- [ ] Liens navbar fonctionnent
- [ ] Footer avec liens légaux fonctionnent
- [ ] Checkbox CGU sur /register obligatoire
- [ ] Lien CGU dans checkbox ouvre /terms

### Pages Spécifiques
- [ ] HomePage : Hero + Services + Mission + Témoignages
- [ ] AboutPage : Mission cursive + Valeurs + Histoire
- [ ] ContactPage : Email + Formulaire uniquement
- [ ] RegisterPage : Checkbox CGU obligatoire
- [ ] Admin dashboard accessible (mock data)

---

## 🎉 Félicitations !

**Si tous les points de la checklist sont ✅, votre projet SkyNanny est entièrement restauré et fonctionnel !**

---

## 🚀 Prochaines Étapes (Développement Futur)

### Backend API (À développer)
- [ ] Authentification JWT
- [ ] CRUD Babysitters
- [ ] CRUD Flights
- [ ] CRUD Bookings
- [ ] Système de paiement Stripe
- [ ] Envoi emails transactionnels
- [ ] Upload documents (casier judiciaire, diplômes)

### Améliorations Frontend (Nice to have)
- [ ] Images réelles babysitters/familles
- [ ] Video présentation
- [ ] Calculateur de prix interactif
- [ ] Chat en direct support
- [ ] Blog/actualités
- [ ] Dark mode
- [ ] PWA (Progressive Web App)
- [ ] Tests unitaires (Jest + React Testing Library)

### Déploiement
- [ ] Frontend : Vercel ou Netlify
- [ ] Backend : Render, Railway ou AWS
- [ ] Base de données : PostgreSQL (Render/Supabase)
- [ ] CDN pour assets (Cloudflare)
- [ ] Monitoring (Sentry)
- [ ] Analytics (Google Analytics / Plausible)

---

## 📊 Historique des Versions

### Version 1.1.1 (05/05/2026) - ACTUELLE
✅ Logo professionnel intégré (h-16)  
✅ Animations Framer Motion (scroll, hover)  
✅ Section témoignages clients  
✅ Bouton scroll-to-top  
✅ Mission en police cursive + signature CEO  
✅ ContactPage simplifiée (email uniquement)  
✅ AboutPage entièrement traduite (3 langues)  

### Version 1.0.0 (30/04/2026)
✅ 27 pages complètes (16 publiques + 11 admin)  
✅ 3 langues (FR/EN/ES) - 680+ clés  
✅ Pages légales RGPD complètes  
✅ Checkbox CGU obligatoire  
✅ Admin dashboard avec Recharts  
✅ Navbar + Footer complets  
✅ Sélecteur de langue avec drapeaux  

---

**Date de mise à jour de ce guide** : 05 mai 2026 à 18:15:00

**Version du projet** : 1.1.1

**Composants** : 32  
**Pages** : 27  
**Langues** : 3  
**Animations** : ✅ Framer Motion  
**Logo** : ✅ Professionnel  
**Témoignages** : ✅ 3 cartes  
**Scroll-to-top** : ✅ Animé  

**Maintenu par : SkyNanny Team**

---

## 📝 Notes Finales

Ce guide de restauration est conçu pour permettre une récupération COMPLÈTE du projet en cas de :
- 💻 Changement d'ordinateur
- 🗑️ Suppression accidentelle
- 🔄 Réinstallation système
- 👥 Onboarding nouveau développeur
- 📦 Archivage long terme

**Gardez ce fichier à jour** après chaque modification majeure du projet.

**Sauvegardez régulièrement** :
1. ☁️ Code sur GitHub (quotidien)
2. 💾 Backup local ZIP (hebdomadaire)
3. 📋 package.json + package-lock.json (à chaque mise à jour)
4. 📝 Ce guide de restauration (à chaque nouvelle feature)

---

**🛡️ Votre projet est maintenant documenté et sécurisé !**
