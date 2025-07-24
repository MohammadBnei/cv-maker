import type { IExperience } from '$lib/component/experience.svelte';

export const experience: IExperience[] = [
  {
    "enterprise": "PerfectStay",
    "position": "Développeur Golang",
    "startDate": new Date("2024-08-26"),
    "endDate": new Date("2025-03-24"),
    "description": "Développement du système de réservation de voyages de PerfectStay, incluant des services d'ingestion de données, de monitoring des requêtes et l'automatisation des déploiements d'infrastructure.",
    "missions": [
      {
        "title": "Service de Monitoring des Requêtes",
        "description": "Conception et développement d'un service de monitoring des requêtes en Go, tirant parti du transport `net/http` pour capturer et analyser le trafic HTTP entrant et sortant des services internes et externes. Visualisation des données via `templ` et persistance des métriques dans Redis, offrant une visibilité en temps réel sur la performance et les dépendances des services. Déploiement du service en tant que fonction AWS Lambda.",
        "skills": [
          {
            "name": "golang",
            "category": "backend"
          },
          {
            "name": "redis",
            "category": "data"
          },
          {
            "name": "aws lambda",
            "category": "devops"
          },
          {
            "name": "templ",
            "category": "frontend"
          }
        ],
        "snapshot": true
      },
      {
        "title": "Services d'Ingestion de Données",
        "description": "Création et mise en œuvre de deux services d'ingestion de données en Go, conçus pour traiter des ensembles de données CSV volumineux (plus d'un million de lignes) et créer des entités dans MongoDB. Intégration avec de multiples APIs externes (Giata, TripAdvisor) afin d'enrichir les données et garantir leur exactitude, en utilisant une combinaison de fonctions AWS Lambda et de conteneurs dans un ECS (Fargate) pour l'orchestration.",
        "skills": [
          {
            "name": "golang",
            "category": "backend"
          },
          {
            "name": "mongodb",
            "category": "data"
          },
          {
            "name": "aws lambda",
            "category": "devops"
          },
          {
            "name": "aws step functions",
            "category": "devops"
          }
        ],
        "snapshot": true
      },
      {
        "title": "Automatisation de l'Infrastructure avec Terraform",
        "description": "Automatisation du déploiement de l'infrastructure AWS à l'aide de Terraform, incluant les fonctions Lambda, les référentiels ECR, les clusters ECS, les buckets S3 et les Step Functions, permettant des déploiements reproductibles et évolutifs à travers différents environnements.",
        "skills": [
          {
            "name": "terraform",
            "category": "devops"
          },
          {
            "name": "aws lambda",
            "category": "devops"
          },
          {
            "name": "aws ecr",
            "category": "devops"
          },
          {
            "name": "aws ecs",
            "category": "devops"
          },
          {
            "name": "aws s3",
            "category": "devops"
          },
          {
            "name": "aws step functions",
            "category": "devops"
          }
        ],
        "snapshot": true
      },
      {
        "title": "Formation Golang pour les Équipes Java et Front-end",
        "description": "Animation de sessions de formation Golang ciblées pour les équipes Java et Front-end, leur permettant de développer et de déboguer de manière autonome leurs propres services Go, favorisant ainsi la collaboration interfonctionnelle et accélérant la livraison de nouvelles fonctionnalités.",
        "skills": [
          {
            "name": "golang",
            "category": "backend"
          },
          {
            "name": "formation",
            "category": "other"
          }
        ],
        "snapshot": true
      }
    ]
  },
  {
    "enterprise": "ESGI (Paris & Lyon) - NextU",
    "position": "Conférencier",
    "startDate": new Date("2021-09-01"),
    "endDate": new Date("2024-02-01"),
    "description": "Conception et auation de cours orientés projets de PerfectStay sur les technologies web modernes pour les étudiants de Master, avec un focus sur le développement Backend, l'architecture Microservices et les pratiques DevOps.",
    "missions": [
      {
        "title": "Architecture Microservices",
        "description": "Direction d'un cours sur l'architecture Microservices où les étudiants ont conçu et mis en œuvre une application de gestion de tâches basée sur gRPC, utilisant NestJS (pour la passerelle API) et Kubernetes pour le déploiement. Ce projet a mis en évidence les défis des systèmes distribués, notamment la sécurité, la conformité ACID, la cohérence des données et l'interopérabilité.",
        "skills": [
          {
            "name": "nestjs",
            "category": "backend"
          },
          {
            "name": "grpc",
            "category": "devops"
          },
          {
            "name": "kubernetes",
            "category": "devops"
          },
          {
            "name": "docker",
            "category": "devops"
          }
        ],
        "snapshot": true
      },
      {
        "title": "Développement Golang",
        "description": "Enseignement d'un cours complet sur Golang, couvrant la syntaxe, les interfaces et le développement d'applications robustes. Les étudiants ont réalisé des projets pratiques, notamment une API utilisateur RESTful avec authentification (utilisant GORM) et un service de chat en temps réel, ainsi que des exercices pour maîtriser la programmation asynchrone en Go.",
        "skills": [
          {
            "name": "golang",
            "category": "backend"
          },
          {
            "name": "gorm",
            "category": "backend"
          },
          {
            "name": "websocket",
            "category": "backend"
          }
        ],
        "snapshot": true
      },
      {
        "title": "Pipelines CI/CD avec GitHub Actions",
        "description": "Accompagnement des étudiants dans la construction de pipelines CI/CD complets à l'aide de GitHub Actions. Les projets comprenaient des tests automatisés, la construction (images dev et Docker), l'évaluation des performances avec Lighthouse et le déploiement continu (CD) sur Vercel avec mises à jour automatiques du journal des modifications et création de versions (à l'aide de Release-it).",
        "skills": [
          {
            "name": "github action",
            "category": "devops"
          },
          {
            "name": "docker",
            "category": "devops"
          },
          {
            "name": "release-it",
            "category": "devops"
          },
          {
            "name": "vercel",
            "category": "devops"
          }
        ],
        "snapshot": true
      },
      {
        "title": "Autres Cours et Activités Pédagogiques",
        "description": "Animation d'autres cours et activités pédagogiques, notamment : Intégration de l'IA (intégration de modèles d'IA via API), Technologies Web Temps Réel, Tests de Performance, Introduction à HTML & CSS, Docker et mentorat pour les mémoires de recherche des étudiants.",
        "skills": [
          {
            "name": "python",
            "category": "backend"
          },
          {
            "name": "redis",
            "category": "data"
          },
          {
            "name": "websocket",
            "category": "backend"
          },
          {
            "name": "socket.io",
            "category": "backend"
          },
          {
            "name": "webRTC",
            "category": "frontend"
          },
          {
            "name": "reactjs",
            "category": "frontend"
          },
          {
            "name": "docker",
            "category": "devops"
          }
        ]
      }
    ]
  },
  {
    "enterprise": "Fastory",
    "startDate": new Date("2021-01-01"),
    "endDate": new Date("2021-07-01"),
    "description": "Participation auéveloppement d'une plateforme de création de PerfectStay de micro-sites avec chatbots, concours et tableaux de bord analytiques, avec un accent sur le développement backend et le traitement des données en temps réel.",
    "position": "Développeur Web",
    "missions": [
      {
        "title": "Webhook",
        "description": "Développement d'un plugin webhook haute performance utilisant Node.js et Hapi.js pour récupérer efficacement les données des chatbots, permettant ainsi des analyses en temps réel pour les clients. Effort particulier porté sur l'optimisation du flux de données et la garantie d'une livraison fiable des données.",
        "skills": [
          {
            "name": "nodejs",
            "category": "backend"
          },
          {
            "name": "hapi",
            "category": "backend"
          },
          {
            "name": "mongodb",
            "category": "data"
          }
        ],
        "snapshot": true
      },
      {
        "title": "Tableau de Bord Temps Réel",
        "description": "Conception et mise en œuvre d'un tableau de bord en temps réel pour les concours, utilisant Node.js, Hapi.js et Redis. Priorité donnée à la création d'une solution évolutive et à faible latence afin de fournir aux participants des classements actualisés en permanence.",
        "skills": [
          {
            "name": "nodejs",
            "category": "backend"
          },
          {
            "name": "hapi",
            "category": "backend"
          },
          {
            "name": "redis",
            "category": "data"
          }
        ],
        "snapshot": true
      },
      {
        "title": "Améliorations Front-end",
        "description": "Correction de bugs et mise en œuvre d'améliorations visuelles sur l'éditeur WYSIWYG et le tableau de bord analytique du site.",
        "skills": [
          {
            "name": "reactjs",
            "category": "frontend"
          }
        ]
      }
    ]
  },
  {
    "enterprise": "Voc On Steroid",
    "position": "Entrepreneur",
    "startDate": new Date("2020-09-01"),
    "description": "Direction de la conception, du développement et du déploiement de Voconsteroid, une application d'apprentissage du vocabulaire, acquérant une vaste expérience en architecture microservices, ingénierie backend et pratiques DevOps (en cours de refonte).",
    "missions": [
      {
        "title": "Architecture et Conception Microservices",
        "description": "Création d'un écosystème microservices résilient sur GCP, exploitant gRPC pour la communication inter-services et mettant en œuvre Kong/Traefik pour le routage des API et les fonctionnalités de reverse proxy. L'architecture a été conçue pour l'évolutivité, la résilience et le déploiement indépendant des services sur des serveurs bare metal.",
        "skills": [
          {
            "name": "microservices",
            "category": "devops"
          },
          {
            "name": "grpc",
            "category": "devops"
          },
          {
            "name": "kong",
            "category": "devops"
          },
          {
            "name": "traefik",
            "category": "devops"
          },
          {
            "name": "gcp",
            "category": "system"
          },
          {
            "name": "bare metal",
            "category": "system"
          }
        ],
        "snapshot": true
      },
      {
        "title": "Développement Backend",
        "description": "Développement de services backend clés en Go et Node.js, en mettant l'accent sur la gestion efficace des données, le développement d'API et l'intégration avec divers systèmes de stockage de données. Technologies utilisées : MongoDB, MySQL, Elasticsearch et Sveltekit pour le frontend.",
        "skills": [
          {
            "name": "golang",
            "category": "backend"
          },
          {
            "name": "nodejs",
            "category": "backend"
          },
          {
            "name": "mongodb",
            "category": "data"
          },
          {
            "name": "mysql",
            "category": "data"
          },
          {
            "name": "elasticsearch",
            "category": "data"
          },
          {
            "name": "sveltekit",
            "category": "frontend"
          }
        ],
        "snapshot": true
      },
      {
        "title": "Logging & Monitoring",
        "description": "Conception et mise en œuvre d'une solution centralisée de logging et de monitoring utilisant la stack ELK (Elasticsearch, Logstash, Kibana). Cela comprenait la création d'un pipeline d'agrégation de logs personnalisé pour une collecte, une analyse et une visualisation efficaces des logs.",
        "skills": [
          {
            "name": "elasticsearch",
            "category": "data"
          },
          {
            "name": "logstash",
            "category": "data"
          },
          {
            "name": "kibana",
            "category": "data"
          },
          {
            "name": "elk",
            "category": "data"
          }
        ],
        "snapshot": true
      },
      {
        "title": "DevOps & Infrastructure",
        "description": "Gestion de tous les aspects du déploiement et de l'infrastructure de l'application, tirant parti de Docker, Kubernetes et GitHub Actions pour automatiser les builds, les déploiements et la mise à l'échelle. Priorité donnée à la garantie d'une haute disponibilité, de performances optimales et de la sécurité, avec l'utilisation de Linux et TLS pour renforcer la sécurité.",
        "skills": [
          {
            "name": "docker",
            "category": "devops"
          },
          {
            "name": "kubernetes",
            "category": "devops"
          },
          {
            "name": "github action",
            "category": "devops"
          },
          {
            "name": "linux",
            "category": "system"
          },
          {
            "name": "tls",
            "category": "devops"
          }
        ],
        "snapshot": true
      },
      {
        "title": "Gestion d'Équipe",
        "description": "Gestion d'une petite équipe, priorisation des tâches et garantie de la qualité du code grâce aux méthodologies Git et Kanban.",
        "skills": [
          {
            "name": "git",
            "category": "other"
          },
          {
            "name": "kanban",
            "category": "other"
          }
        ]
      }
    ]
  },
  {
    "enterprise": "Gymglish",
    "position": "Développeur Web",
    "startDate": new Date("2019-09-01"),
    "endDate": new Date("2020-12-01"),
    "description": "Participation auéveloppement et à la maintenance de de PerfectStay la plateforme Studio de Gymglish, une plateforme de création de cours, avec un accent sur l'optimisation des performances et le développement backend.",
    "missions": [
      {
        "title": "Implémentation de Fonctionnalités et Création de Champs",
        "description": "Conception, développement et mise en œuvre de diverses fonctionnalités et champs au sein de la plateforme Studio, améliorant les capacités de la plateforme et l'expérience utilisateur.",
        "skills": [
          {
            "name": "nodejs",
            "category": "backend"
          },
          {
            "name": "express",
            "category": "backend"
          },
          {
            "name": "reactjs",
            "category": "frontend"
          },
          {
            "name": "mongodb",
            "category": "data"
          }
        ],
        "snapshot": true
      },
      {
        "title": "Optimisation de l'Export CSV",
        "description": "Amélioration des performances du processus d'export CSV en parallélisant le traitement des données et en optimisant les requêtes NoSQL. Mise en œuvre d'agrégations et de filtres MongoDB efficaces afin de minimiser le temps de récupération des données et d'accélérer les vitesses d'exportation.",
        "skills": [
          {
            "name": "nodejs",
            "category": "backend"
          },
          {
            "name": "mongodb",
            "category": "data"
          }
        ],
        "snapshot": true
      },
      {
        "title": "Refonte de Studio V2",
        "description": "Participation à la refonte de la plateforme Studio (Studio V2) en utilisant Python, Flask et AngularJS afin de résoudre les problèmes de performances au sein de l'éditeur WYSIWYG et d'aligner la stack technologique sur l'expertise de l'équipe. Cette refonte visait à améliorer la réactivité de l'éditeur et la maintenabilité globale de la plateforme.",
        "skills": [
          {
            "name": "python",
            "category": "backend"
          },
          {
            "name": "flask",
            "category": "backend"
          },
          {
            "name": "angularjs",
            "category": "frontend"
          },
          {
            "name": "mongodb",
            "category": "data"
          }
        ],
        "snapshot": true
      }
    ]
  },
  {
    "enterprise": "Eudonet",
    "position": "Développeur Web - Stage",
    "startDate": new Date("2018-04-01"),
    "endDate": new Date("2018-07-01"),
    "description": "Participation auéveloppement d'un système CRM (Customer de PerfectStay Relationship Management), avec un accent sur la logique backend et la conception d'algorithmes.",
    "missions": [
      {
        "title": "Gestion de la Relation Utilisateur",
        "description": "Développement d'un système backend en C# .NET pour la gestion des requêtes utilisateurs et la planification, acquérant de l'expérience dans la logique backend et la conception d'algorithmes.",
        "skills": [
          {
            "name": "c# .net",
            "category": "backend"
          }
        ]
      }
    ]
  },
  {
    "enterprise": "Netapsys Paris",
    "position": "Développeur Web",
    "startDate": new Date("2016-09-01"),
    "endDate": new Date("2017-07-01"),
    "description": "Participation auéveloppement backend de systèmes gouvernementaux, de PerfectStay acquérant de l'expérience en Java J2EE et en gestion de bases de données.",
    "missions": [
      {
        "title": "Développement du Système Si-LAV",
        "description": "Participation au backend du système Si-LAV en utilisant Java J2EE, avec un accent sur la gestion des données et l'intégration d'API.",
        "skills": [
          {
            "name": "java j2e",
            "category": "backend"
          }
        ]
      }
    ]
  }
]
