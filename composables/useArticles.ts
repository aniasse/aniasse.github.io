export type ArticleCategory = 'System Design' | 'Performance' | 'Tendances' | 'DevOps' | 'Sécurité'

export interface Article {
  slug: string
  title: string
  description: string
  category: ArticleCategory
  date: string
  readTime: string
  tags: string[]
  icon: string
  content: ArticleSection[]
}

export interface ArticleSection {
  title: string
  body: string
  code?: { lang: string; content: string }
  list?: string[]
  diagram?: string
}

export const ARTICLE_CATEGORIES: { label: ArticleCategory; icon: string; color: string }[] = [
  { label: 'System Design', icon: 'material-symbols:hub', color: 'bg-orange-100 text-orange-700' },
  { label: 'Performance', icon: 'material-symbols:speed', color: 'bg-blue-100 text-blue-700' },
  { label: 'Tendances', icon: 'material-symbols:trending-up', color: 'bg-purple-100 text-purple-700' },
  { label: 'DevOps', icon: 'material-symbols:cloud', color: 'bg-green-100 text-green-700' },
  { label: 'Sécurité', icon: 'material-symbols:security', color: 'bg-red-100 text-red-700' },
]

export const ALL_ARTICLES: Article[] = [
  // ───── System Design ─────
  {
    slug: 'microservices-vs-monolithe',
    title: 'Microservices vs Monolithe : guide de décision architecturale',
    description: 'Analyse approfondie des deux architectures dominantes. Quand choisir l\'une ou l\'autre, patterns de migration, et retours d\'expérience.',
    category: 'System Design',
    date: '2026-04-05',
    readTime: '12 min',
    tags: ['Microservices', 'Architecture', 'Scalabilité'],
    icon: 'material-symbols:hub',
    content: [
      {
        title: 'Introduction',
        body: 'Le choix entre microservices et monolithe est l\'une des décisions architecturales les plus impactantes d\'un projet. Ce n\'est pas un choix binaire — c\'est un spectre. Un monolithe bien conçu surpassera toujours des microservices mal implémentés. La question n\'est pas "quel est le meilleur ?" mais "quel est le plus adapté à mon contexte ?".',
      },
      {
        title: 'Architecture Monolithique',
        body: 'Un monolithe est une application déployée comme une seule unité. Tout le code partage le même processus, la même base de données et le même déploiement. Contrairement aux idées reçues, un monolithe n\'est pas synonyme de code spaghetti — un monolithe modulaire avec des bounded contexts clairs est une architecture parfaitement valide.',
        list: [
          'Simplicité de développement et de déploiement — un seul artifact à gérer',
          'Transactions ACID natives — pas besoin de sagas ou de compensation',
          'Debugging facilité — stack trace unique, pas de tracing distribué nécessaire',
          'Latence minimale — appels en mémoire au lieu d\'appels réseau',
          'Idéal pour les équipes de 1 à 15 développeurs',
        ],
      },
      {
        title: 'Architecture Microservices',
        body: 'Les microservices décomposent une application en services indépendants, chacun responsable d\'un domaine métier. Chaque service a sa propre base de données, son propre déploiement et communique via API ou message broker. Cette architecture brille quand l\'organisation scale — pas quand le trafic scale.',
        list: [
          'Déploiement indépendant — une équipe peut releaser sans bloquer les autres',
          'Scalabilité granulaire — scale uniquement le service sous pression',
          'Résilience — un service en panne n\'affecte pas les autres (si bien conçu)',
          'Polyglottisme — chaque service peut utiliser le langage le plus adapté',
          'Complexité opérationnelle élevée — nécessite Kubernetes, service mesh, observabilité',
        ],
      },
      {
        title: 'Patterns de communication',
        body: 'La communication entre microservices est le point critique de l\'architecture. Il existe deux paradigmes principaux : synchrone (REST/gRPC) et asynchrone (message broker). Le choix impacte directement la résilience et la latence du système.',
        code: {
          lang: 'text',
          content: `Synchrone (REST/gRPC)
┌──────────┐  HTTP/gRPC  ┌──────────┐
│ Service A │────────────►│ Service B │
└──────────┘             └──────────┘
  Avantage : simple, réponse immédiate
  Risque : couplage temporel, cascade failures

Asynchrone (Event-Driven)
┌──────────┐   publish   ┌───────────┐  consume  ┌──────────┐
│ Service A │────────────►│ Message Q │──────────►│ Service B │
└──────────┘             └───────────┘           └──────────┘
  Avantage : découplage, résilience
  Risque : complexité, eventual consistency`,
        },
      },
      {
        title: 'Quand migrer du monolithe aux microservices',
        body: 'La migration ne devrait jamais être motivée par la hype technologique. Elle se justifie quand l\'organisation scale (multiple équipes travaillant sur le même codebase), quand des parties de l\'application ont des besoins de scalabilité très différents, ou quand le cycle de release est bloqué par des dépendances inter-équipes.',
        list: [
          'Pattern Strangler Fig : extraire progressivement des services du monolithe',
          'Commencer par les bounded contexts les plus indépendants',
          'Mettre en place l\'observabilité AVANT de découper',
          'Ne jamais faire un "big bang" rewrite — c\'est la recette du désastre',
          'Prévoir 6-12 mois de productivité réduite pendant la migration',
        ],
      },
    ],
  },
  {
    slug: 'event-driven-architecture',
    title: 'Event-Driven Architecture : systèmes réactifs à grande échelle',
    description: 'Comment concevoir des systèmes événementiels avec CQRS, Event Sourcing et message brokers pour des applications temps réel.',
    category: 'System Design',
    date: '2026-03-28',
    readTime: '15 min',
    tags: ['Event-Driven', 'CQRS', 'Kafka', 'RabbitMQ'],
    icon: 'material-symbols:bolt',
    content: [
      {
        title: 'Pourquoi l\'Event-Driven Architecture',
        body: 'L\'architecture événementielle (EDA) est un paradigme où les composants communiquent par émission et consommation d\'événements plutôt que par appels directs. Un événement représente un fait qui s\'est produit : "CommandeValidée", "PaiementReçu", "StockMisÀJour". Cette approche découple naturellement les producteurs des consommateurs.',
      },
      {
        title: 'Les trois piliers de l\'EDA',
        body: 'L\'architecture événementielle repose sur trois concepts fondamentaux qui, combinés, permettent de construire des systèmes hautement scalables et résilients.',
        list: [
          'Event Notification : un service émet un événement minimal, les consommateurs décident de la réaction',
          'Event-Carried State Transfer : l\'événement contient toutes les données nécessaires, éliminant les callbacks',
          'Event Sourcing : l\'état du système est reconstruit à partir de la séquence d\'événements, pas d\'une base mutable',
        ],
      },
      {
        title: 'CQRS : Command Query Responsibility Segregation',
        body: 'CQRS sépare les opérations d\'écriture (Commands) des opérations de lecture (Queries) en deux modèles distincts. Le modèle d\'écriture optimise la validation et la cohérence, le modèle de lecture optimise les performances de requêtage. Combiné avec Event Sourcing, CQRS permet de maintenir des vues matérialisées optimisées pour chaque cas d\'usage.',
        code: {
          lang: 'text',
          content: `                    ┌─────────────┐
   Command ────────►│ Write Model │──── Events ────┐
                    └─────────────┘                │
                                                   ▼
                                           ┌──────────────┐
                    ┌─────────────┐        │ Event Store  │
   Query ──────────►│ Read Model  │◄───────└──────────────┘
                    └─────────────┘
                    (Vue matérialisée
                     optimisée lecture)`,
        },
      },
      {
        title: 'Kafka vs RabbitMQ : quel broker choisir',
        body: 'Apache Kafka et RabbitMQ sont les deux brokers les plus utilisés, mais ils répondent à des besoins différents. Kafka est un log distribué optimisé pour le streaming haute performance — il conserve les messages et permet le replay. RabbitMQ est un message broker classique optimisé pour le routage flexible et la consommation garantie.',
        list: [
          'Kafka : streaming haute performance, replay d\'événements, ordre garanti par partition, idéal pour l\'event sourcing',
          'RabbitMQ : routage flexible (fanout, topic, direct), acknowledgment par message, idéal pour les tâches asynchrones',
          'Kafka brille à >100K messages/sec, RabbitMQ brille pour le routage complexe avec <10K msg/sec',
          'Kafka nécessite Zookeeper/KRaft et plus d\'ops, RabbitMQ est plus simple à opérer',
        ],
      },
      {
        title: 'Pièges et bonnes pratiques',
        body: 'L\'EDA introduit de la complexité. L\'eventual consistency signifie que les lectures peuvent être temporairement incohérentes. Les événements doivent être idempotents car ils peuvent être délivrés plusieurs fois. Le debugging est plus complexe car le flux est distribué et asynchrone.',
        list: [
          'Rendre chaque consumer idempotent — utiliser un ID d\'événement unique pour la déduplication',
          'Versionner les schémas d\'événements — utiliser Avro ou Protobuf avec un schema registry',
          'Implémenter le pattern Outbox pour garantir la cohérence entre DB et broker',
          'Mettre en place du distributed tracing (Jaeger, Zipkin) pour suivre le flux des événements',
          'Prévoir des Dead Letter Queues pour les messages non traitables',
        ],
      },
    ],
  },
  {
    slug: 'load-balancing-strategies',
    title: 'Load Balancing : stratégies et algorithmes pour la haute disponibilité',
    description: 'Round Robin, Least Connections, Consistent Hashing — comprendre les algorithmes de répartition de charge et quand les utiliser.',
    category: 'System Design',
    date: '2026-03-15',
    readTime: '10 min',
    tags: ['Load Balancing', 'NGINX', 'HAProxy', 'Haute Disponibilité'],
    icon: 'material-symbols:balance',
    content: [
      {
        title: 'Pourquoi le Load Balancing',
        body: 'Le load balancing distribue le trafic entrant entre plusieurs serveurs pour éviter la surcharge d\'un seul nœud. C\'est la première ligne de défense pour la haute disponibilité et la scalabilité horizontale. Sans load balancer, votre application a un Single Point of Failure.',
      },
      {
        title: 'Couches de Load Balancing',
        body: 'Le load balancing peut opérer à différentes couches du modèle OSI, chacune avec ses avantages.',
        list: [
          'Layer 4 (Transport) : route basée sur IP/port, très rapide, pas d\'inspection du contenu (ex: AWS NLB)',
          'Layer 7 (Application) : route basée sur le contenu HTTP (URL, headers, cookies), plus flexible (ex: NGINX, HAProxy, AWS ALB)',
          'DNS Load Balancing : distribue au niveau DNS, simple mais peu de contrôle (ex: Route 53 weighted routing)',
        ],
      },
      {
        title: 'Algorithmes de répartition',
        body: 'Le choix de l\'algorithme impacte directement la distribution de charge et les performances perçues par les utilisateurs.',
        code: {
          lang: 'text',
          content: `Round Robin         → Distribution séquentielle, simple et équitable
                      Idéal : serveurs homogènes, requêtes similaires

Weighted Round Robin → Poids proportionnel à la capacité du serveur
                      Idéal : serveurs hétérogènes

Least Connections   → Route vers le serveur avec le moins de connexions actives
                      Idéal : requêtes de durée variable (WebSocket, uploads)

IP Hash             → Hash de l\'IP client → même serveur (sticky sessions)
                      Idéal : applications stateful sans session store externe

Consistent Hashing  → Minimise la redistribution quand un nœud est ajouté/retiré
                      Idéal : caches distribués (Redis cluster, CDN)`,
        },
      },
      {
        title: 'Health Checks et Failover',
        body: 'Un load balancer ne sert à rien s\'il envoie du trafic vers des serveurs morts. Les health checks sont essentiels : le LB interroge périodiquement chaque backend et retire automatiquement les nœuds en échec du pool.',
        list: [
          'Health check actif : le LB envoie des requêtes périodiques (GET /health) — délai de détection configurable',
          'Health check passif : le LB analyse les réponses du trafic réel — détection plus rapide mais moins fiable',
          'Graceful degradation : en cas de surcharge, servir une version dégradée plutôt qu\'une erreur 503',
          'Circuit breaker : couper le trafic vers un backend qui échoue trop souvent, réessayer périodiquement',
        ],
      },
    ],
  },

  // ───── Performance ─────
  {
    slug: 'caching-strategies',
    title: 'Stratégies de Caching : de Redis aux CDN',
    description: 'Cache-Aside, Write-Through, Write-Behind — maîtriser les patterns de cache pour des applications ultra-rapides.',
    category: 'Performance',
    date: '2026-04-01',
    readTime: '14 min',
    tags: ['Redis', 'CDN', 'Cache', 'Performance'],
    icon: 'material-symbols:speed',
    content: [
      {
        title: 'Le cache est partout',
        body: 'Le caching est la technique d\'optimisation la plus efficace en informatique. Un cache bien placé peut réduire la latence de 100x et le coût infrastructure de 10x. Mais un cache mal géré introduit des bugs de cohérence insidieux. "There are only two hard things in CS: cache invalidation and naming things."',
      },
      {
        title: 'Les couches de cache',
        body: 'Un système moderne utilise plusieurs niveaux de cache, du plus proche du client au plus proche de la donnée.',
        code: {
          lang: 'text',
          content: `Client
  └─ Browser Cache (localStorage, Service Worker)
      └─ CDN Edge Cache (CloudFlare, CloudFront)
          └─ API Gateway Cache
              └─ Application Cache (Redis, Memcached)
                  └─ Database Query Cache
                      └─ OS Page Cache (mmap, disk buffer)`,
        },
      },
      {
        title: 'Patterns de caching',
        body: 'Il existe quatre patterns principaux de caching applicatif. Chacun a ses forces et ses compromis.',
        list: [
          'Cache-Aside (Lazy Loading) : l\'app vérifie le cache, si miss → lit la DB → écrit dans le cache. Simple, risque de données stale.',
          'Read-Through : le cache est responsable de charger depuis la DB en cas de miss. L\'app ne parle qu\'au cache.',
          'Write-Through : chaque écriture passe par le cache PUIS la DB. Cohérence forte mais latence d\'écriture accrue.',
          'Write-Behind (Write-Back) : écriture dans le cache immédiate, flush asynchrone vers la DB. Ultra-rapide mais risque de perte de données.',
        ],
      },
      {
        title: 'Cache Invalidation',
        body: 'Le vrai défi du cache est l\'invalidation : s\'assurer que les données en cache restent cohérentes avec la source de vérité. Il n\'existe pas de solution universelle — chaque stratégie est un compromis entre fraîcheur et performance.',
        list: [
          'TTL (Time-To-Live) : le cache expire après un délai fixe. Simple mais données potentiellement stale.',
          'Event-based invalidation : un événement (write, update) déclenche la suppression du cache. Frais mais complexe.',
          'Version-based : chaque entrée a une version, le client vérifie si sa version est à jour. Utilisé par les ETags HTTP.',
          'Purge sélectif : invalider uniquement les clés affectées par une mutation. Le plus précis mais le plus complexe.',
        ],
      },
      {
        title: 'Redis en production',
        body: 'Redis est le cache applicatif le plus populaire. En production, la configuration par défaut ne suffit pas. Il faut penser à la persistance, au clustering et à l\'éviction.',
        list: [
          'Choisir une politique d\'éviction : allkeys-lru pour un cache général, volatile-ttl pour des données avec expiration',
          'Activer la persistance AOF pour ne pas perdre le cache au redémarrage',
          'Utiliser Redis Cluster pour la scalabilité horizontale (>25GB de données)',
          'Monitorer le hit ratio — un ratio <90% indique un problème de sizing ou de stratégie',
          'Séparer les caches par domaine (prefix keys) pour faciliter l\'invalidation sélective',
        ],
      },
    ],
  },
  {
    slug: 'database-optimization',
    title: 'Optimisation des bases de données : indexation, partitionnement et réplication',
    description: 'Techniques avancées pour des requêtes SQL en millisecondes sur des tables de millions de lignes.',
    category: 'Performance',
    date: '2026-03-20',
    readTime: '13 min',
    tags: ['PostgreSQL', 'Indexation', 'Sharding', 'Réplication'],
    icon: 'material-symbols:storage',
    content: [
      {
        title: 'La base de données est souvent le bottleneck',
        body: 'Dans la plupart des applications, la base de données est le goulot d\'étranglement principal. Une requête mal optimisée peut prendre 10 secondes au lieu de 10 millisecondes — un facteur 1000x. Les trois leviers principaux sont l\'indexation, le partitionnement et la réplication.',
      },
      {
        title: 'Indexation : l\'arme n°1',
        body: 'Un index est une structure de données (B-tree, Hash, GIN, GiST) qui permet à la base de trouver des lignes sans scanner toute la table. Sans index, une recherche sur 10M de lignes nécessite un full table scan. Avec un index B-tree, c\'est un parcours logarithmique — O(log n) au lieu de O(n).',
        list: [
          'Index B-tree : le plus courant, optimal pour =, <, >, BETWEEN, ORDER BY',
          'Index Hash : uniquement pour l\'égalité exacte (=), plus rapide que B-tree pour ce cas',
          'Index GIN : pour les recherches full-text, JSONB et arrays (PostgreSQL)',
          'Index partiel : indexe uniquement un sous-ensemble de lignes (WHERE status = \'active\')',
          'Index composite : plusieurs colonnes, l\'ordre des colonnes est crucial (règle du leftmost prefix)',
        ],
      },
      {
        title: 'EXPLAIN ANALYZE : lire un plan d\'exécution',
        body: 'EXPLAIN ANALYZE est votre meilleur ami pour l\'optimisation. Il montre exactement comment PostgreSQL exécute une requête : quels index sont utilisés, combien de lignes sont scannées, et où se trouve le bottleneck.',
        code: {
          lang: 'sql',
          content: `-- Avant optimisation : Seq Scan (5.2 secondes)
EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 42;
-- Seq Scan on orders (cost=0.00..185432.00 rows=100 width=64)
--   Filter: (user_id = 42)
--   Rows Removed by Filter: 9999900
--   Execution Time: 5234.567 ms

-- Après CREATE INDEX idx_orders_user_id ON orders(user_id);
-- Index Scan using idx_orders_user_id (cost=0.43..12.45 rows=100 width=64)
--   Index Cond: (user_id = 42)
--   Execution Time: 0.234 ms   ← 22000x plus rapide`,
        },
      },
      {
        title: 'Partitionnement et Sharding',
        body: 'Quand une table dépasse les dizaines de millions de lignes, même les index ne suffisent plus. Le partitionnement divise logiquement une table en sous-tables, le sharding distribue physiquement les données sur plusieurs serveurs.',
        list: [
          'Partitionnement par range : par date (logs mensuels), par ID (0-1M, 1M-2M)',
          'Partitionnement par hash : distribution uniforme, bon pour l\'écriture parallèle',
          'Partitionnement par liste : par région, par catégorie',
          'Sharding : chaque shard est une base indépendante, complexité de routing et de joins cross-shard',
        ],
      },
      {
        title: 'Réplication : lecture scalable',
        body: 'La réplication crée des copies de la base pour distribuer la charge de lecture. Le pattern classique est un primary (écritures) avec N replicas (lectures). PostgreSQL supporte la réplication streaming synchrone et asynchrone.',
        list: [
          'Réplication asynchrone : latence minimale en écriture, risque de lecture stale (read-after-write inconsistency)',
          'Réplication synchrone : cohérence forte mais latence d\'écriture accrue (attente de l\'ACK du replica)',
          'Read replicas : router les SELECT vers les replicas, les INSERT/UPDATE vers le primary',
          'Connection pooling (PgBouncer) : réduire le coût des connexions, indispensable à >100 connexions',
        ],
      },
    ],
  },

  // ───── Tendances ─────
  {
    slug: 'webassembly-futur-backend',
    title: 'WebAssembly au-delà du navigateur : le futur du backend ?',
    description: 'WASM côté serveur avec WASI, edge computing et pourquoi Docker pourrait être challengé.',
    category: 'Tendances',
    date: '2026-04-03',
    readTime: '11 min',
    tags: ['WebAssembly', 'WASI', 'Edge Computing', 'Rust'],
    icon: 'material-symbols:deployed-code',
    content: [
      {
        title: 'WebAssembly sort du navigateur',
        body: 'WebAssembly (WASM) a été créé pour exécuter du code natif dans le navigateur. Mais WASI (WebAssembly System Interface) l\'a libéré du browser. Solomon Hykes, co-fondateur de Docker, a déclaré : "Si WASM+WASI avait existé en 2008, nous n\'aurions pas eu besoin de créer Docker." WASM côté serveur est une réalité en 2026.',
      },
      {
        title: 'Pourquoi WASM côté serveur',
        body: 'Les conteneurs Docker démarrent en secondes, WASM démarre en millisecondes. Un module WASM fait quelques MB contre des centaines de MB pour une image Docker. Et WASM offre un sandboxing natif plus sécurisé que les conteneurs.',
        list: [
          'Cold start <1ms vs >100ms pour un container — critique pour le serverless/edge',
          'Taille : module WASM ~1-5MB vs image Docker ~50-500MB',
          'Sécurité : sandboxing par défaut, capabilities-based security (pas d\'accès filesystem/réseau implicite)',
          'Portabilité : compile once, run anywhere — plus portable que les containers',
          'Polyglottisme : Rust, Go, C/C++, AssemblyScript, Python compilent vers WASM',
        ],
      },
      {
        title: 'Edge Computing avec WASM',
        body: 'L\'edge computing exécute du code au plus près de l\'utilisateur (CDN nodes). CloudFlare Workers, Fastly Compute, Vercel Edge Functions utilisent WASM/V8 isolates. La latence passe de ~200ms (serveur centralisé) à <50ms (edge node le plus proche).',
        list: [
          'CloudFlare Workers : JavaScript + WASM, 200+ datacenters, cold start <5ms',
          'Fastly Compute : WASM natif, Rust/Go/JS, cold start <1ms',
          'Spin (Fermyon) : framework open source pour apps WASM serverless',
          'wasmCloud : orchestrateur de microservices WASM distribués',
        ],
      },
      {
        title: 'Rust + WASM : le combo parfait',
        body: 'Rust est le langage le plus adapté à WASM côté serveur. Pas de garbage collector (donc pas de pause GC), binaires compacts, performance native et safety garantie par le compilateur. La majorité des runtimes WASM (Wasmtime, Wasmer) sont écrits en Rust.',
      },
    ],
  },
  {
    slug: 'ai-infrastructure-mlops',
    title: 'Infrastructure IA : MLOps et déploiement de modèles en production',
    description: 'Comment déployer et scaler des modèles ML en production — pipelines, serving, monitoring et GPU management.',
    category: 'Tendances',
    date: '2026-03-25',
    readTime: '12 min',
    tags: ['MLOps', 'AI', 'Kubernetes', 'GPU', 'Infrastructure'],
    icon: 'material-symbols:neurology',
    content: [
      {
        title: 'Le gap entre PoC et Production',
        body: '87% des modèles ML ne passent jamais en production. Le problème n\'est pas le modèle — c\'est l\'infrastructure. MLOps est la discipline qui applique les pratiques DevOps au machine learning : CI/CD pour les modèles, versioning des données, monitoring de la drift, et orchestration des pipelines d\'entraînement.',
      },
      {
        title: 'Pipeline MLOps',
        body: 'Un pipeline MLOps mature automatise tout le cycle de vie du modèle.',
        code: {
          lang: 'text',
          content: `Data Collection → Feature Engineering → Training → Evaluation
       │                                                    │
       ▼                                                    ▼
  Data Versioning                                    Model Registry
  (DVC, LakeFS)                                    (MLflow, Weights&Biases)
                                                         │
                                                         ▼
                                                   Model Serving
                                                (TorchServe, Triton, vLLM)
                                                         │
                                                         ▼
                                                    Monitoring
                                              (data drift, latence, accuracy)`,
        },
      },
      {
        title: 'Model Serving en production',
        body: 'Le serving est le moment critique : le modèle reçoit des requêtes en temps réel et doit répondre en millisecondes. Les contraintes sont différentes de l\'entraînement — optimisation de la latence, batching des requêtes, gestion de la mémoire GPU.',
        list: [
          'vLLM : serving optimisé pour les LLMs avec PagedAttention, throughput 24x supérieur à HuggingFace',
          'NVIDIA Triton : serving multi-framework (PyTorch, TensorFlow, ONNX) avec batching dynamique',
          'TorchServe : serving PyTorch natif avec auto-scaling et logging',
          'Quantization : réduire la précision (FP32 → INT8) pour 2-4x plus de throughput avec <1% de perte de qualité',
        ],
      },
      {
        title: 'GPU Management avec Kubernetes',
        body: 'Les GPUs sont chères et rares. Les partager efficacement entre les workloads est un défi. Kubernetes avec le NVIDIA GPU Operator permet de scheduler des pods sur des nœuds GPU, mais le partage d\'un GPU entre plusieurs pods (MIG, time-slicing) reste complexe.',
        list: [
          'NVIDIA MIG (Multi-Instance GPU) : partitionner un A100 en 7 instances indépendantes',
          'Time-slicing : partager un GPU en alternant les workloads, simple mais moins isolé',
          'Spot instances : utiliser les GPUs spot AWS/GCP pour l\'entraînement (70% moins cher, interruptible)',
          'Serverless GPU : Modal, RunPod, Lambda Labs — pay-per-second pour l\'inférence',
        ],
      },
    ],
  },

  // ───── DevOps ─────
  {
    slug: 'infrastructure-as-code-terraform',
    title: 'Infrastructure as Code avec Terraform : de zéro à la production',
    description: 'Modules, state management, workspaces et bonnes pratiques pour gérer votre infrastructure AWS avec Terraform.',
    category: 'DevOps',
    date: '2026-03-30',
    readTime: '14 min',
    tags: ['Terraform', 'AWS', 'IaC', 'Modules'],
    icon: 'material-symbols:cloud',
    content: [
      {
        title: 'Pourquoi l\'Infrastructure as Code',
        body: 'L\'Infrastructure as Code (IaC) consiste à gérer l\'infrastructure via des fichiers de configuration versionnés plutôt que par des clics manuels dans une console cloud. Les avantages sont la reproductibilité (recréer un environnement identique en une commande), l\'auditabilité (chaque changement est dans le git log) et la collaboration (review de PR sur l\'infra comme sur le code).',
      },
      {
        title: 'Terraform : les concepts clés',
        body: 'Terraform utilise le langage HCL (HashiCorp Configuration Language) pour décrire l\'état désiré de l\'infrastructure. Il calcule le diff entre l\'état actuel et l\'état désiré, puis applique les changements nécessaires.',
        list: [
          'Provider : plugin qui interface avec un cloud (AWS, GCP, Azure, Kubernetes...)',
          'Resource : un objet d\'infrastructure (EC2 instance, S3 bucket, DNS record...)',
          'State : fichier JSON qui stocke l\'état actuel de l\'infra gérée par Terraform',
          'Plan : preview des changements avant application (terraform plan)',
          'Module : bloc de configuration réutilisable et paramétrable',
        ],
      },
      {
        title: 'Structure d\'un projet Terraform',
        body: 'Une bonne structure de projet facilite la maintenance, le travail en équipe et la réutilisation.',
        code: {
          lang: 'text',
          content: `infrastructure/
├── modules/
│   ├── networking/      # VPC, subnets, security groups
│   ├── compute/         # ECS, EC2, Lambda
│   ├── database/        # RDS, ElastiCache
│   └── monitoring/      # CloudWatch, alertes
├── environments/
│   ├── staging/
│   │   ├── main.tf      # Appelle les modules
│   │   ├── variables.tf # Variables spécifiques staging
│   │   └── terraform.tfvars
│   └── production/
│       ├── main.tf
│       ├── variables.tf
│       └── terraform.tfvars
├── backend.tf           # Config du state remote (S3)
└── versions.tf          # Versions des providers`,
        },
      },
      {
        title: 'State Management',
        body: 'Le state Terraform est critique — il mappe les ressources HCL aux ressources réelles dans le cloud. En équipe, le state doit être remote (S3 + DynamoDB pour le locking) pour éviter les conflits et les corruptions.',
        list: [
          'Toujours utiliser un backend remote (S3 + DynamoDB lock) en équipe',
          'Activer le versioning du bucket S3 pour rollback le state en cas de corruption',
          'Ne jamais modifier le state manuellement (sauf terraform state mv/rm)',
          'Séparer les states par environnement ET par domaine pour limiter le blast radius',
          'Utiliser terraform plan en CI avant chaque apply — review obligatoire',
        ],
      },
    ],
  },
  {
    slug: 'observability-monitoring',
    title: 'Observabilité : logs, métriques et traces pour le debugging en production',
    description: 'Les trois piliers de l\'observabilité avec Prometheus, Grafana, Jaeger et ELK Stack.',
    category: 'DevOps',
    date: '2026-03-10',
    readTime: '11 min',
    tags: ['Prometheus', 'Grafana', 'Jaeger', 'Observabilité'],
    icon: 'material-symbols:monitoring',
    content: [
      {
        title: 'Monitoring vs Observabilité',
        body: 'Le monitoring répond à "est-ce que le système fonctionne ?". L\'observabilité répond à "pourquoi le système ne fonctionne pas ?". Le monitoring est réactif (alertes quand un seuil est dépassé), l\'observabilité est exploratoire (investiguer un problème inconnu a priori).',
      },
      {
        title: 'Les trois piliers',
        body: 'L\'observabilité repose sur trois types de données complémentaires qui, corrélés, permettent de diagnostiquer n\'importe quel problème.',
        list: [
          'Logs : événements textuels horodatés — le "quoi s\'est passé". Structurés en JSON pour le parsing automatique.',
          'Métriques : valeurs numériques agrégées dans le temps — le "combien". Latence P99, taux d\'erreur, CPU usage.',
          'Traces : parcours d\'une requête à travers les services — le "où est le bottleneck". Chaque span = une étape.',
        ],
      },
      {
        title: 'Stack d\'observabilité',
        body: 'Une stack moderne d\'observabilité combine plusieurs outils spécialisés.',
        code: {
          lang: 'text',
          content: `Métriques : Prometheus (collecte) → Grafana (visualisation)
Logs     : Fluentd/Vector (collecte) → Elasticsearch (stockage) → Kibana (recherche)
Traces   : OpenTelemetry (instrumentation) → Jaeger/Tempo (stockage/visualisation)

Alternative unifiée : Grafana Stack (Mimir + Loki + Tempo + Grafana)`,
        },
      },
      {
        title: 'Alerting efficace',
        body: 'Les alertes sont la passerelle entre l\'observabilité et l\'action. Trop d\'alertes = alert fatigue = alertes ignorées. L\'objectif est d\'alerter uniquement sur les symptômes (latence élevée, taux d\'erreur) et non sur les causes (CPU élevé, mémoire).',
        list: [
          'Alerter sur les SLO (Service Level Objectives) : "le P99 de latence dépasse 500ms depuis 5 minutes"',
          'Utiliser des burn rates plutôt que des seuils fixes pour éviter les faux positifs',
          'Chaque alerte doit avoir un runbook associé : quoi vérifier, quoi faire, qui contacter',
          'Implémenter des silences programmés pour la maintenance planifiée',
        ],
      },
    ],
  },

  // ───── Sécurité ─────
  {
    slug: 'zero-trust-architecture',
    title: 'Zero Trust Architecture : ne jamais faire confiance, toujours vérifier',
    description: 'Principes, implémentation et outils pour une architecture Zero Trust en 2026.',
    category: 'Sécurité',
    date: '2026-04-02',
    readTime: '13 min',
    tags: ['Zero Trust', 'IAM', 'mTLS', 'RBAC'],
    icon: 'material-symbols:security',
    content: [
      {
        title: 'La fin du périmètre réseau',
        body: 'Le modèle de sécurité traditionnel repose sur un périmètre : tout ce qui est "à l\'intérieur" du réseau est de confiance. Ce modèle est obsolète. Le cloud, le remote work et les microservices ont dissous le périmètre. Zero Trust part du principe qu\'aucune requête n\'est de confiance, peu importe sa provenance.',
      },
      {
        title: 'Les principes Zero Trust',
        body: 'Le framework Zero Trust repose sur plusieurs principes fondamentaux qui s\'appliquent à chaque requête, chaque connexion, chaque accès.',
        list: [
          'Vérifier explicitement : authentifier et autoriser chaque requête basée sur tous les signaux disponibles (identité, device, localisation, comportement)',
          'Moindre privilège : accorder le minimum d\'accès nécessaire, pour la durée minimale, avec des permissions just-in-time',
          'Assumer la brèche : concevoir comme si l\'attaquant est déjà dans le réseau, minimiser le blast radius, segmenter les accès',
        ],
      },
      {
        title: 'mTLS : mutual TLS entre services',
        body: 'Dans une architecture microservices Zero Trust, chaque communication inter-services doit être chiffrée et authentifiée mutuellement. mTLS garantit que les deux parties d\'une connexion sont authentifiées — pas seulement le serveur.',
        list: [
          'Istio / Linkerd : service mesh qui implémente mTLS automatiquement entre tous les pods Kubernetes',
          'SPIFFE/SPIRE : framework d\'identité workload pour émettre des certificats de manière automatisée',
          'Rotation automatique des certificats : renouvellement transparent sans downtime',
          'Network policies Kubernetes : limiter quel pod peut communiquer avec quel autre (micro-segmentation)',
        ],
      },
      {
        title: 'Identity & Access Management',
        body: 'L\'identité est le nouveau périmètre de sécurité. Chaque utilisateur, service et device doit avoir une identité vérifiable.',
        list: [
          'OIDC / OAuth2 : protocole standard pour l\'authentification et l\'autorisation des utilisateurs',
          'RBAC (Role-Based Access Control) : permissions basées sur le rôle de l\'utilisateur',
          'ABAC (Attribute-Based Access Control) : permissions basées sur des attributs dynamiques (heure, IP, device)',
          'OPA (Open Policy Agent) : moteur de politiques centralisé pour unifier les décisions d\'autorisation',
          'MFA obligatoire : l\'authentification simple par mot de passe est insuffisante en 2026',
        ],
      },
    ],
  },
]

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function useCategoryColor(cat: ArticleCategory): string {
  const map: Record<string, string> = {
    'System Design': 'bg-orange-100 text-orange-700',
    'Performance': 'bg-blue-100 text-blue-700',
    'Tendances': 'bg-purple-100 text-purple-700',
    'DevOps': 'bg-green-100 text-green-700',
    'Sécurité': 'bg-red-100 text-red-700',
  }
  return map[cat] ?? 'bg-slate-100 text-slate-600'
}
