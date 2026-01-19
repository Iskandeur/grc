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
            { term: "DevOps", definition: "Mentalité visant à unir le développement et les opérations. 'Automatisons l'impossible', 'Partageons'." },
            { term: "Shift-Left", definition: "Tester et intégrer la sécurité le plus tôt possible dans le cycle de développement." },
            { term: "IaaC", definition: "Infrastructure as Code : Provisionner et gérer l'infrastructure via du code." },
            { term: "DAST", definition: "Dynamic Application Security Testing : Test 'boîte noire' en temps réel sur l'application en cours d'exécution." },
            { term: "SAST", definition: "Static Application Security Testing : Analyse du code source pour trouver des failles (sans exécuter)." },
            { term: "IAST", definition: "Interactive AST : Observe l'appli en fonctionnement (via agent) pour trouver des failles. Plus rapide que SAST." },
            { term: "CSPM", definition: "Cloud Security Posture Management : Surveille la config cloud et alerte sur les mauvaises configurations." },
            { term: "CASB", definition: "Cloud Access Security Broker : Intermédiaire pour gérer la sécurité entre les utilisateurs et les services Cloud (Shadow IT, DLP)." }
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
            { term: "ASM", definition: "Attack Surface Management : Processus d'identification et gestion de la surface d'attaque (vue attaquant)." },
            { term: "EASM", definition: "External Attack Surface Management : Focus sur les points d'entrée via Internet." },
            { term: "SPF", definition: "Sender Policy Framework : Vérifie que l'IP de l'expéditeur est autorisée pour le domaine." },
            { term: "DKIM", definition: "DomainKeys Identified Mail : Signature crypto pour assurer que le mail n'a pas été altéré." },
            { term: "DMARC", definition: "Utilise SPF + DKIM pour authentifier et définir la politique de rejet/quarantaine." },
            { term: "UEBA", definition: "User and Entity Behavior Analytics : Détection d'anomalies comportementales via IA/ML." },
            { term: "SOAR", definition: "Security Orchestration, Automation and Response : Automatise la réponse aux incidents et l'orchestration des outils." },
            { term: "S/MIME", definition: "Chiffrement de bout en bout du contenu des emails." }
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
