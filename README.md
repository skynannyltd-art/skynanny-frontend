# 🎨 SkyNanny Frontend

Interface utilisateur React pour la plateforme SkyNanny.

---

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Ouvre http://localhost:5173

### Build Production

```bash
npm run build
```

---

## 🛠️ Stack Technique

- **React 18** - Framework UI
- **Vite** - Build tool
- **React Router** - Navigation
- **TailwindCSS v3** - Styling
- **Axios** - API calls
- **Lucide React** - Icons
- **React DatePicker** - Sélection dates

---

## 📁 Structure
src/
├── components/
│   └── Navbar.jsx              # Navigation principale
├── context/
│   └── AuthContext.jsx         # Gestion authentification
├── pages/
│   ├── HomePage.jsx            # Accueil avec recherche
│   ├── BabysittersPage.jsx    # Liste babysitters
│   ├── BabysitterProfilePage.jsx  # Profil babysitter
│   ├── BookingPage.jsx         # Réservation
│   ├── PaymentSuccessPage.jsx # Confirmation paiement
│   ├── LoginPage.jsx           # Connexion
│   └── RegisterPage.jsx        # Inscription
├── services/
│   └── api.js                  # Service API backend
├── App.jsx                     # Routes principales
├── main.jsx                    # Point d'entrée
└── index.css                   # Styles globaux

---

## 🔧 Configuration

### Variables d'Environnement (.env)

```env
VITE_API_URL=https://api.sky-nanny.com
```

---

## 📦 Dépendances Principales

```json
{
  "react": "^18.3.1",
  "react-router-dom": "^7.1.3",
  "axios": "^1.7.9",
  "lucide-react": "^0.468.0",
  "react-datepicker": "^7.5.0",
  "tailwindcss": "^3.4.17"
}
```

---

## 🎨 Couleurs Thème

```javascript
primary: '#6366f1'    // Indigo
secondary: '#ec4899'  // Pink
```

---

## 🔗 API Backend

Backend URL : https://api.sky-nanny.com

Authentification : JWT (stocké dans localStorage)

---

## 📝 Pages Créées (10 Avril 2026)

### ✅ Pages Actuelles (Ancien Concept)
1. **HomePage** - Hero + Recherche par ville
2. **BabysittersPage** - Liste avec filtres
3. **BabysitterProfilePage** - Détails babysitter
4. **BookingPage** - Formulaire réservation
5. **PaymentSuccessPage** - Confirmation
6. **LoginPage** - Connexion
7. **RegisterPage** - Inscription

### ⏳ Pages à Créer (Nouveau Concept Vol)
1. **FlightSearchPage** - Recherche par vol/trajet
2. **BabysitterProfilePage (v2)** - Avec badge vérifié, langues, bio
3. **FamilyProfilePage** - Nouveau profil famille
4. **UploadTicketPage** - Upload billet babysitter
5. **MessagingPage** - Chat famille/babysitter
6. **MyMatchesPage** - Mes mises en relation
7. **AdminDashboard** - Validation billets

---

## 🚧 Prochaines Étapes

1. Adapter les pages au concept vol
2. Ajouter recherche par vol/trajet
3. Créer profils distincts famille/babysitter
4. Implémenter messagerie
5. Ajouter upload billet
6. Dashboard admin

---

**Date création :** 10 Avril 2026  
**Version :** 1.0.0-initial  
**Status :** Pages initiales créées, adaptation en cours Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
