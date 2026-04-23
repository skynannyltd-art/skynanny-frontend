# 🏠 HomePage Structure - SkyNanny

**Fichier :** `src/pages/HomePage.jsx`  
**Route :** `/`  
**Status :** ✅ Production Ready

---

## 📐 Structure Complète

### 1. Hero Section
**Background :** Gradient bleu léger  
**Layout :** Grid 2 colonnes (desktop) / 1 colonne (mobile)

**Contenu Gauche :**
- Titre H1 : "Voyagez sereinement en famille"
- Sous-titre : Explication service
- Barre de recherche vol (input + bouton)
- Trust badges (Vérification, Paiement)

**Contenu Droit :**
- Illustration placeholder (à remplacer par vraie image)
- Gradient bleu avec icône avion

---

### 2. Services Section
**Background :** Blanc  
**Layout :** Grid 3 colonnes (desktop) / 1 colonne (mobile)

**3 Cards :**
1. **Pour les Familles**
   - Icône : Users (lucide-react)
   - Titre + Description
   - CTA : "Trouver une babysitter"
   - Link : /search/family

2. **Pour les Babysitters**
   - Icône : Baby (lucide-react)
   - Titre + Description
   - CTA : "Devenir SkyNanny"
   - Link : /search/babysitter

3. **Sécurité & Confiance**
   - Icône : Shield (lucide-react)
   - Titre + Description
   - CTA : "En savoir plus"
   - Link : /security

---

### 3. Steps Section (Comment ça marche)
**Background :** Gray-50  
**Layout :** Grid 3 colonnes

**3 Étapes :**
1. Recherchez (badge numéro 1)
2. Connectez (badge numéro 2)
3. Voyagez serein (badge numéro 3)

---

### 4. Testimonials Section
**Background :** Blanc  
**Layout :** Grid 3 colonnes

**3 Témoignages :**
- Rating 5 étoiles
- Texte avis
- Nom + Initiales
- Ville + Date

---

### 5. Stats Section
**Background :** Primary (bleu plein)  
**Layout :** Grid 4 colonnes  
**Couleur texte :** Blanc

**4 Statistiques :**
- 2,500+ Familles
- 1,200+ Babysitters
- 5,000+ Vols réalisés
- 4.8/5 Satisfaction

---

### 6. CTA Final Section
**Background :** Gradient bleu léger  
**Layout :** Centré

**Contenu :**
- Titre : "Prêt à partir en toute sérénité ?"
- Sous-titre
- 2 Boutons :
  - Primary : "Trouver une babysitter"
  - Secondary : "Devenir babysitter"

---

## 🎨 Design Tokens Utilisés

### Colors
primary: #4A90B8
secondary: #B8D4E8
gray-50: #F9FAFB
gray-100: #F3F4F6
gray-200: #E5E7EB
white: #FFFFFF

### Typography
H1: text-4xl md:text-5xl, font-semibold
H2: text-3xl, font-semibold
H3: text-xl, font-medium
Body: text-base, text-lg
Small: text-sm

### Spacing
Section padding: py-20 (80px)
Container: max-w-6xl, max-w-5xl, max-w-4xl
Cards: p-6, p-8
Gaps: gap-8, gap-12

### Components
Cards: border border-gray-200, rounded-xl
Buttons: rounded-lg, px-6 py-3
Inputs: border border-gray-300, rounded-lg
Icons: size={20}, size={32}

---

## 📱 Responsive Breakpoints
Mobile: < 768px (1 colonne)
Tablet: 768px - 1024px (2 colonnes)
Desktop: > 1024px (3-4 colonnes)

---

## 🔗 Navigation Links

**Utilisés dans HomePage :**
- `/search/family` (Trouver babysitter)
- `/search/babysitter` (Devenir babysitter)
- `/security` (Sécurité - à créer)

---

## 📸 Assets Requis

**À ajouter pour production :**
1. **Hero Image :** Image famille heureuse en avion (1200x800px)
2. **Testimonial Photos :** 3 photos profil (100x100px)
3. **Logo :** Logo transparent sans fond bleu

---

## ✅ Checklist Production

- [x] Structure HTML sémantique
- [x] Responsive design
- [x] Navigation fonctionnelle
- [x] CTAs clairs
- [x] Trust elements
- [ ] Images optimisées (WebP)
- [ ] SEO meta tags
- [ ] Analytics tracking
- [ ] A/B testing setup

---

**Dernière mise à jour :** 11 Avril 2026