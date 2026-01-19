#ASM
ASM (Attack Surface Management) : processus d’identification, d’analyse et de gestion des différentes failles. Toujours envisager les
choses du point de vue d’un attaquant

##Outils
- DRP : Digital Risk Protection 
- CAASM : Cyber Asset Attack Surface Management
- EASM : External Attack Surface Management

##DRP
Service fourni par un provider de service sur les réseaux sociaux et toutes les parties du web

##CAASM
- Meilleure connaissance des points d'entrée
- Vue d'ensemble des actifs
- Via des API
- Ajout d'une stack technique sur les APIs
- Cartographie détaillée des actifs
- Amélioration de l'hygiène et de la posture des assets
- Vue centralisée des actifs et logiciels
- Vue complète avec objets, IAM, vulnérabilités, etc.
- Comprendre les relations
- Affichage graphique des relations
- Monitoring automatique des assets
- Alignement automatique des nouveaux assets
- Monitoring continu dans un monde en évolution
- Collecte des gaps et évidences pour suivre votre infra

##EASM
Domaine spécifique de ASM, qui se concentre sur les points d’entrée via Internet.

###ASD
ASD : Attack Surface Discovery est un des vecteurs clés de l’EASM.

###Avantages
1. Visibilité accrue de votre surface externe
2. Réduction des risques de sécurité
3. Amélioration de la conformité réglementaire
4. Optimisation des ressources de sécurité

###Desaventages
1. Dépend d’une configuration la plus exhaustive et correct
2. Possible de faux positifs et/ou faux négatifs
3. Ne remplace aucun outil de sécurité et n’est qu’une surcouche
4. Coût et compléxité

#Passerelle
Les passerelles agissent comme des points de contrôle entre les
réseaux internes et externes, régulant le trafic et protégeant les
ressources internes.

##Chiffrement
- SPF (Sender Policy Framework) : Vérifie que les emails proviennent de serveurs autorisés.
- DKIM (DomainKeys Identified Mail) : Assure que le contenu des emails n'a pas été altéré en transit.
- DMARC (Domain-based Message Authentication, Reporting, and Conformance) :
Utilise SPF et DKIM pour améliorer la sécurité des emails et fournir des rapports sur les actions prises.
- TLS (Transport Layer Security) : Sécurise les emails en transit entre les serveurs de messagerie.
- S/MIME (Secure/Multipurpose Internet Mail Extensions) et PGP (Pretty Good Privacy) : Chiffrent le contenu des emails pour sécuriser les messages stockés.

##Surveillance
- Systèmes de détection d'intrusion : Surveillent les activités anormales dans le trafic de messagerie.
- Solutions de sécurité des emails : Offrent des tableaux de bord pour le suivi en temps réel.

#Journalisation :
- Conservation des logs : Stockage des logs de transaction et d'activité pour une durée déterminée.
- Analyse des logs : Utilisation d'outils d'analyse pour identifier les tendances ou les anomalies.

#Plan de réponse aux incidents
- Procédures établies : Actions spécifiques à prendre en cas de détection d'une menace.
- Équipes de réponse : Coordination entre les équipes IT et de sécurité pour une réaction rapide.

#Détection avancée et XSOAR

##Utilisation de l'UEBA
- Détecter les anomalies dans le comportement des utilisateurs ou des systèmes, ça peut indiquer une activité louche

##Corrélation multi source
- Analyser les données de sécurité de l'entreprise (pare-feux, IDS, SIEM, antivirus, etc.)

##Analyse des signaux faibles pour la chasse aux menaces
- Détecter les menaces émergentes ou les attaques sophistiquées tôt
- Lancer des campagnes de chasse aux menaces pour trouver les menaces avant qu'elles ne frappent

##SOAR
SOAR intègre des outils pour automatiser la sécurité, accélérer la réponse aux incidents et minimiser l'intervention humaine.

##Importance
Logs système, réseau, endpoint, applications, sécurité physique, vulnérabilités et renseignement sur les menaces sont essentiels pour la détection avancée des menaces.
Données de communication comme emails et messagerie instantanée complètent ces sources d'informations.

##Détection:
- Connexions louches: SOAR a repéré des trucs bizarres dans les logs AD et NetFlow, ça sent le mouvement latéral.
- Credentials piqués: L'EDR a sonné l'alarme, des identifiants compromis sont utilisés sur plusieurs machines.
- Trafic sortant anormal: Analyse NetFlow.
- Accès à des serveurs externes suspects: Listes noires IP.

##Actions Automatisées:
- Changer les mots de passe: SOAR reset les comptes piqués.
- Bloquer les IP suspectes: SOAR barre les adresses IP d'où viennent les connexions louches.
- Analyse approfondie: SOAR lance une collecte de données pour une analyse forensique auto, et ouvre un ticket pour l'équipe forensique.
- Blocage du trafic: Pare-feu.
- Quarantaine de données: Analyse.
- Alertes et rapports: Équipes, audits.

#IA et ML
UEBA (User and Entity Behavior Analytics), c'est de la détection de comportements louches dans ton entreprise. Ça utilise des stats et de l'IA pour repérer ce qui sort de l'ordinaire chez les utilisateurs, les applis, les machines, etc. Pas besoin de règles toutes faites, ça apprend tout seul ce qui est normal.

- Utiliser l'IA pour corréler les données.
- Améliorer la détection avec l'apprentissage automatique.
- Déclencher des actions selon les situations.
- Créer des règles de corrélation automatiquement.
- Adapter les règles en production.