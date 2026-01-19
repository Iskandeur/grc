# GRC_Nex - Révision Gouvernance, Risque et Conformité

Une application web gamifiée pour réviser les concepts clés de la GRC, du DevSecOps et de la sécurité offensive/défensive. Conçue pour être esthétique, fluide et moderne.

![GRC App](https://img.shields.io/badge/Status-Deployed-success?style=for-the-badge&color=10b981)
![Tech](https://img.shields.io/badge/Tech-React%20%7C%20Vite%20%7C%20Tailwind-blue?style=for-the-badge)

🔗 **Accéder à l'application :** [grc.alexandre-pinoteau.fr](https://grc.alexandre-pinoteau.fr/)

## 🎯 Fonctionnalités

L'application transforme des fiches de cours classiques en une expérience interactive :

*   **⚡ Mode Flashcards** : Révisez les définitions et acronymes avec des cartes interactives (animations 3D).
*   **🧠 Mode Quiz** : Testez vos connaissances avec des QCM et un suivi de score.
*   **💎 Design Premium** : Interface sombre "Cyber" avec effets néons et transitions fluides (Framer Motion).
*   **📱 Responsive** : Fonctionne parfaitement sur mobile et desktop.

## 📚 Contenu du Cours

Le contenu est divisé en 3 modules principaux :

1.  **Fondamentaux & Actifs** : CIA (Confidentialité, Intégrité, Disponibilité), Actifs critiques, Vulnérabilités (CVSS, EPSS).
2.  **DevSecOps & Cloud** : Intégration de la sécurité (Shift-Left, IaaC), Scans (SAST, DAST, IAST), Posture Cloud (CSPM, CASB).
3.  **Défenses Avancées** : Surface d'attaque (ASM/EASM), Sécurité Email (SPF/DKIM/DMARC), Réponse aux incidents (SOAR, UEBA).

## 🛠️ Installation Locale

Si vous souhaitez modifier le code ou lancer le projet sur votre machine :

```bash
# 1. Cloner le dépôt
git clone git@github.com:Iskandeur/grc.git
cd grc

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`.

## 🚀 Déploiement

Le déploiement est automatisé via **GitHub Actions**.
À chaque `push` sur la branche `main`, le site est construit et publié sur **GitHub Pages**.

Le fichier `public/CNAME` assure la liaison avec le sous-domaine `grc.alexandre-pinoteau.fr`.

---
*Fait avec ❤️ pour rendre la GRC un peu moins "chiante".*
