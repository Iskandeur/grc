#DevOps

##Mentalité
1. Moins j’en fait, moins d’erreurs
2. Automatisons l’impossible
3. Ce qui ne peut être mesuré n’existe pas
4. Distribuons
5. Partageons

##Actions
1. Plan
2. Do
3. Check
4. Act

- Shift-Left :
	- Test en avance
- Shift Right :
	- Test en production

#DevSecOps
Pareil mais sécurisé

- Réduction des risques
- Gain de temps et d’argents
- Amélioration de la qualité des produits
- Des équipes pluridisciplinaires
- Evolution plus rapide
- Une montée en compétence globale

#Gestion du Code
IaaS : Service Cœur du cloud -> il permet de manager et mettre à disposition des infrastructures tels que des serveurs, buckets, storage etc...
IaaC : Provisione et Manage une infrastructure, ce n’est pas limité au cloud et peut être utilisé en on-prem.

##Objectifs
- Les développeurs s’impliquent beaucoup plus dans la partie infra
- Visibilité accrue des ressources
- Limite les actions manuelles donc diminue le risque d’erreurs
- Plus de flexibilité avec la possibilité de redimensionner à la volée.

#Scan d'infrastructures
Les Tests peuvent être :
- Dynamique (DAST)
- Statique (SAST)
- Interactifs (IAST)

##DAST
- Real-Time Vulnerability Detection
- Risk Reduction
- Integration with CI/CD Pipelines
- Cost Savings
- Compliance
- Scalability
- Low False Positives

##SAST

##IAST
Créer pour dépasser DAST et SAST.
IAST observe l'appli en fonctionnement et trouve les failles. Plus rapide que SAST mais moins complet.

##Plan Scan
Planification : Définir les objectifs, la portée et le calendrier.
Exécution : Utiliser des outils automatisés.
Analyse : Évaluer les résultats pour identifier les vulnérabilités.
Rapport : Documenter les découvertes et recommander des actions.
Révision : Mettre à jour les configurations et répéter le scan si nécessaire.

###Planification
- Définir les objectifs
- Vérifier la conformité
- Définir les points de scanning
- Déployer les capteurs
- Préparer les pré-requis
- Choisir la solution de scan

###Exécution
- Surveiller le monitoring
- Suivre la console en temps réel
- Analyser les logs en cas d'erreur

###Analyse
- Vérifier le bon déroulement
- Intégrer les résultats dans un RBVM
- Prioriser selon le contexte

###Rapport
- Documenter les découvertes
- Recommander des actions
- Communiquer aux parties prenantes

###Remédiation
- Mettre à jour les configurations
- Vérifier les corrections
- Améliorer les processus

###KPI
- Mesurer l'efficacité
- Suivre les MTTR
- Impliquer la direction

###Point d'attention
Faut faire gaffe aux scans, pas trop forcer, ça peut péter

#CSPM
CSPM (Cloud Security Posture Management)
CSPM : Surveille le cloud, alerte les admins sur les mauvaises configs et potentiellement les failles.

##Fonctionnalités
- Découverte des ressources
- Evaluation de la conformité
- Vulnérabilité spécifique au cloud
- Evaluation des configurations

##Avantages
- Environnement complexe et très mobile
- Résistance au changement
- Gestion des alertes et priorités
- Localisation des points de connectivités mal configurés
- Evaluation des risques liés au données
- Détecter les autorisation de comptes trop libérales
- Corriger automatiquement certaines configurations selon les politiques automatiques

#Autres que CSPM
- SSPM : Saas Security Posture Management
- CASB : Cloud Access Security Broker
- CWPP : Cloud Workload Protection Plateform – equivalent EDR

##SSPM
- Compliance (HIPAA, RGPD, PCI DSS, etc)
- Sécurité (accès non autorisé)
- Audit
- Gestion de risques

##CASB
- Shadow IT
- Data loss Prevention
- Sécurité (accès non autorisé)
- Audit
- Gouvernance (gestion des coûts)
- Gestion de risques