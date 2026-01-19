export const courseContent = [
    {
        id: "part1",
        title: "Part 1: Fondamentaux & Actifs",
        description: "Les bases de la sécurité (CIA), l'identification des actifs critiques et la gestion des vulnérabilités.",
        flashcards: [
            { term: "Confidentialité", definition: "Empêcher les communications d'être observées par un tiers." },
            { term: "Intégrité", definition: "Garantir que les données n'ont pas été altérées." },
            { term: "Disponibilité", definition: "Les données sont accessibles par les utilisateurs autorisés lorsque nécessaire." },
            { term: "Actif Critique", definition: "Ressource vitale pour l'organisation (Activité, Données Sensibles, Réputation...)." },
            { term: "CMBD", definition: "Configuration Management Database : Base de données pour comprendre l'organisation et modifier la configuration." },
            { term: "Golden Source", definition: "Source d'information la plus fiable, précise et à jour, utilisée comme référence." },
            { term: "CVSS", definition: "Score standardisé pour évaluer la gravité d'une vulnérabilité." },
            { term: "EPSS", definition: "Modèle prédictif estimant la probabilité qu'une vulnérabilité soit exploitée dans la nature." },
            { term: "Vulnérabilité", definition: "Faiblesse exploitable affectant la confidentialité, l'intégrité ou la disponibilité." }
        ],
        quiz: [
            {
                question: "Quel critère de sécurité garantit que les données n'ont pas été modifiées ?",
                options: ["Confidentialité", "Intégrité", "Disponibilité", "Traçabilité"],
                answer: "Intégrité"
            },
            {
                question: "Dans le contexte des actifs critiques, que signifie 'Rareté' ?",
                options: ["La donnée est secrète", "L'actif est difficile à remplacer (identique ou alternative)", "L'actif est coûteux", "L'actif est peu utilisé"],
                answer: "L'actif est difficile à remplacer (identique ou alternative)"
            },
            {
                question: "Quelle est la fonction principale d'une CMBD ?",
                options: ["Stocker les mots de passe", "Comprendre l'organisation et gérer les configurations", "Scanner les virus", "Chiffrer les données"],
                answer: "Comprendre l'organisation et gérer les configurations"
            },
            {
                question: "Quelle est la différence majeure entre CVSS et EPSS ?",
                options: ["CVSS est pour le réseau, EPSS pour le code", "CVSS mesure la gravité, EPSS prédit la probabilité d'exploitation", "EPSS est plus ancien que CVSS", "Il n'y en a aucune"],
                answer: "CVSS mesure la gravité, EPSS prédit la probabilité d'exploitation"
            }
        ]
    },
    {
        id: "part2",
        title: "Part 2: DevSecOps & Cloud Sec",
        description: "L'intégration de la sécurité dans le DevOps, les types de scans (DAST/SAST/IAST) et la posture Cloud (CSPM).",
        flashcards: [
            { term: "DevOps", definition: "Approche culturelle unifiant le développement (Dev) et les opérations (Ops). Principes : 'Automatisons l'impossible', 'Partageons', 'Shift-Left'." },
            { term: "Shift-Left", definition: "Intégrer la sécurité le plus tôt possible dans le cycle de développement (dès le design/code) plutôt qu'à la fin." },
            { term: "IaaC", definition: "Infrastructure as Code. Gérer et provisionner l'infrastructure informatique via des fichiers de définition lisibles par machine (ex: Terraform)." },
            { term: "DAST", definition: "Dynamic Application Security Testing. Test de sécurité 'boîte noire' effectué sur l'application en cours d'exécution (ex: scanner web)." },
            { term: "SAST", definition: "Static Application Security Testing. Analyse du code source 'boîte blanche' pour détecter des vulnérabilités sans exécuter le programme." },
            { term: "IAST", definition: "Interactive Application Security Testing. Combine SAST et DAST en analysant l'application de l'intérieur pendant son exécution (via un agent)." },
            { term: "CSPM", definition: "Cloud Security Posture Management. Outils automatisés pour surveiller et corriger les mauvaises configurations dans le cloud (AWS, Azure...)." },
            { term: "CASB", definition: "Cloud Access Security Broker. Point de contrôle entre les utilisateurs et les services cloud pour appliquer les politiques de sécurité (DLP, Shadow IT)." }
        ],
        quiz: [
            {
                question: "Quel principe DevOps suggère que 'ce qui ne peut être mesuré n’existe pas' ?",
                options: ["Mentalité #3", "Mentalité #1", "Shift-Left", "Agile"],
                answer: "Mentalité #3"
            },
            {
                question: "Quelle est la différence entre DAST et SAST ?",
                options: ["DAST est statique, SAST est dynamique", "DAST teste l'app en exécution (dyn), SAST analyse le code (stat)", "SAST est pour le cloud uniquement", "DAST est manuel, SAST est automatique"],
                answer: "DAST teste l'app en exécution (dyn), SAST analyse le code (stat)"
            },
            {
                question: "Quel outil permet de lutter contre le 'Shadow IT' ?",
                options: ["CSPM", "CASB", "WAF", "Antivirus"],
                answer: "CASB"
            },
            {
                question: "Dans un plan de scan, quelle étape consiste à 'Documenter les découvertes et recommander des actions' ?",
                options: ["Planification", "Exécution", "Analyse", "Rapport"],
                answer: "Rapport"
            }
        ]
    },
    {
        id: "part3",
        title: "Part 3: ASM, Email & SOAR",
        description: "Gestion de la surface d'attaque, sécurité des emails et automatisation de la réponse (SOAR/UEBA).",
        flashcards: [
            { term: "ASM", definition: "Attack Surface Management. Processus continu de découverte et de surveillance des actifs exposés d'une organisation (vue attaquant)." },
            { term: "EASM", definition: "External Attack Surface Management. Sous-catégorie de l'ASM focalisée sur les actifs exposés sur Internet." },
            { term: "SPF", definition: "Sender Policy Framework. Système anti-usurpation vérifiant que l'IP de l'expéditeur est autorisée à envoyer des emails pour ce domaine." },
            { term: "DKIM", definition: "DomainKeys Identified Mail. Ajoute une signature cryptographique aux emails pour garantir qu'ils n'ont pas été modifiés en transit." },
            { term: "DMARC", definition: "Domain-based Message Authentication, Reporting, and Conformance. Utilise SPF et DKIM pour donner des instructions au destinataire (ex: rejeter le mail si échec)." },
            { term: "UEBA", definition: "User and Entity Behavior Analytics. Analyse comportementale (basée sur l'IA/ML) pour détecter des anomalies par rapport à une base de référence." },
            { term: "SOAR", definition: "Security Orchestration, Automation and Response. Plateforme pour orchestrer les outils de sécurité et automatiser la réponse aux incidents." },
            { term: "S/MIME", definition: "Secure/Multipurpose Internet Mail Extensions. Standard pour le chiffrement de bout en bout et la signature numérique des courriels." }
        ],
        quiz: [
            {
                question: "Quel protocole email utilise une signature cryptographique pour l'intégrité ?",
                options: ["SPF", "DKIM", "DMARC", "SMTP"],
                answer: "DKIM"
            },
            {
                question: "Que fait le SOAR face à une connexion suspecte identifiée ?",
                options: ["Il l'observe seulement", "Il peut bloquer l'IP ou reset le mot de passe automatiquement", "Il éteint le serveur", "Il envoie un SMS au PDG"],
                answer: "Il peut bloquer l'IP ou reset le mot de passe automatiquement"
            },
            {
                question: "L'EASM se concentre principalement sur :",
                options: ["Le code source interne", "Les points d'entrée via Internet", "La sécurité physique", "Les clés USB"],
                answer: "Les points d'entrée via Internet"
            },
            {
                question: "Quelle technologie utilise l'IA pour détecter qu'un employé se connecte à 3h du matin depuis un pays inhabituel ?",
                options: ["Firewall", "UEBA", "Antivirus", "VPN"],
                answer: "UEBA"
            }
        ]
    }
];
