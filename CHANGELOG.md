# 📝 Changelog - SkyNanny Frontend

---

## [1.0.0-initial] - 10 Avril 2026

### ✅ Ajouté

**Setup Initial**
- Projet React avec Vite
- TailwindCSS v3 configuré
- React Router configuré
- Axios pour API calls
- Service API connecté au backend

**Composants**
- Navbar avec authentification

**Context**
- AuthContext (gestion JWT)

**Pages Créées**
- HomePage - Hero avec recherche
- BabysittersPage - Liste avec filtres
- BabysitterProfilePage - Détail babysitter
- BookingPage - Formulaire réservation
- PaymentSuccessPage - Confirmation
- LoginPage - Connexion
- RegisterPage - Inscription

**Services**
- api.js - Connexion backend (getBabysitters, login, register, createBooking, etc.)

### 📝 Notes

Ces pages ont été créées pour un **premier concept** (babysitters par ville).

Le concept final est **différent** : SkyNanny = babysitters pour vols en avion.

**Adaptation nécessaire :**
- Recherche par vol (pas par ville)
- Profils distincts famille/babysitter
- Upload billet d'avion
- Système messagerie
- Badge vérifié

---

## [À Venir] - v2.0.0-flight-system

### 🎯 Pages à Adapter
- FlightSearchPage
- BabysitterProfilePage (v2)
- FamilyProfilePage
- UploadTicketPage
- MessagingPage
- MyMatchesPage
- AdminDashboard

### 🔧 Fonctionnalités à Ajouter
- Recherche par numéro de vol
- Recherche par trajet (ville A → ville B)
- Upload fichier billet
- Chat temps réel
- Notifications
- Validation admin

---

**Dernière mise à jour :** 10 Avril 2026