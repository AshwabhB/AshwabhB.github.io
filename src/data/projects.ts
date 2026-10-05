export type Category = 'Data Engineering' | 'Backend & Cloud' | 'Full-stack' | 'Machine Learning' | 'Desktop Apps' | 'Tools'

export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  highlights: string[]
  tech: string[]
  category: Category
  featured: boolean
  period: string
  role?: string
  status?: string
  github?: string
  live?: string
  image?: string
  video?: string
  poster?: string
  imageAlt?: string
  pipeline?: { label: string; steps: string[] }
}

export const projects: Project[] = [
  {
    slug: 'streamflow',
    name: 'StreamFlow',
    tagline: 'Real-time e-commerce streaming lakehouse pipeline',
    description:
      'An end-to-end streaming data platform. A Faker-based producer publishes transaction events to Kafka, Spark Structured Streaming validates them against a typed schema and writes Delta Lake tables to S3, and an Airflow DAG loads new data into BigQuery and runs dbt to build staging views and marts.',
    highlights: [
      'Exactly-once semantics through Spark checkpointing and Delta Lake ACID writes',
      'dbt staging-to-marts layer over a JSON-Schema validated 15-field event contract, with partitioned and clustered BigQuery tables',
      'CI/CD on GitHub Actions: six jobs gate every push (ruff, sqlfluff, dbt parse, pytest, PySpark tests, compose validation), plus weekly CodeQL scans, Dependabot, and pre-commit gitleaks',
      'Four Architecture Decision Records documenting tool choices',
    ],
    tech: ['Python', 'Kafka', 'PySpark', 'Delta Lake', 'AWS S3', 'Airflow', 'dbt', 'BigQuery', 'Docker', 'GitHub Actions', 'CI/CD', 'CodeQL'],
    category: 'Data Engineering',
    featured: true,
    period: '2026',
    github: 'https://github.com/AshwabhB/streamflow-data-engineering-pipeline',
    pipeline: {
      label: 'CI/CD',
      steps: ['push', 'GitHub Actions', 'ruff + sqlfluff', 'dbt parse', 'pytest + PySpark tests', 'compose validation', 'weekly CodeQL'],
    },
    image: '/images/projects/streamflow.svg',
    imageAlt: 'StreamFlow architecture: generator to Kafka to Spark to Delta Lake on S3, then Airflow, dbt, and BigQuery',
  },
  {
    slug: 'nibit',
    name: 'Nibit',
    tagline: 'AI note-taking app for students',
    description:
      'An AI note-taking app for students, available on macOS, Windows, and the web. Students write, import, or record their study material, and Nibit turns it into revision notes, flashcards, quizzes, podcasts, and study plans, then answers questions from their own notes. Electron, React, and TipTap on the client and a hosted FastAPI backend on Postgres with pgvector. Every prompt and API key stays on the server.',
    highlights: [
      'Ask Nibit retrieval blends Postgres full-text search with pgvector embeddings through reciprocal rank fusion, and a background worker re-embeds pages after edits',
      'Import PDF, Word, PowerPoint, and Markdown, attach websites and YouTube videos as sources, and record and transcribe lectures',
      'Live co-editing with Yjs and Hocuspocus, sharing with view, comment, and edit roles, and a separate admin portal with analytics',
      'Runs on Railway, Neon, Tigris, and Cloudflare, with Stripe billing and signed, notarized desktop installers that update themselves',
    ],
    tech: ['TypeScript', 'React', 'Electron', 'TipTap', 'FastAPI', 'PostgreSQL', 'pgvector', 'OpenAI API', 'Yjs', 'Cloudflare', 'Railway'],
    category: 'Full-stack',
    featured: true,
    period: '2026 to present',
    role: 'Founding Engineer',
    status: 'Live',
    live: 'https://nibit.ai',
    video: '/images/nibit/tour-dark.mp4',
    poster: '/images/nibit/tour-dark.webp',
    image: '/images/projects/nibit-site.webp',
    imageAlt: 'Nibit app showing a notebook sidebar and an equation editor over a machine learning page',
  },
  {
    slug: 'bettersocial',
    name: 'BetterSocial',
    tagline: 'Friend-first social planning app',
    description:
      'A web app that takes a group from "we should hang out" to a plan that actually happens. It brings availability, budget, distance, and interests together, then turns those signals into a single plan with voting, venue suggestions, and a finalized event.',
    highlights: [
      'Group plans with invitations, availability, voting, Google Places venue suggestions, and calendar export',
      'Compatibility-based people discovery, friend groups, open plans, and stranger matching',
      'Clubs with posts, reactions, roles, moderation tools, and direct, group, plan, and event chat with attachments',
      'Session security with signed cookies, a production CSP, proxy-aware rate limiting, and a separate admin portal',
    ],
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Prisma', 'PostgreSQL', 'Playwright', 'Docker'],
    category: 'Full-stack',
    featured: true,
    period: '2026 to present',
    status: 'Product in development',
    image: '/images/projects/bettersocial-landing.webp',
    imageAlt: 'BetterSocial landing page with the headline From we should hang out to, surrounded by plan cards',
  },
  {
    slug: 'yolo11-enhancements',
    name: 'YOLO11 Architectural Enhancements',
    tagline: 'Dual-stream attention, size-adaptive assignment, and OOD awareness',
    description:
      'Master’s project at SJSU. Three architecture-level changes to the YOLO11 detector, validated first on a from-scratch YOLO11-nano and then injected into the official pretrained Ultralytics model, evaluated on the German Traffic Sign Detection Benchmark.',
    highlights: [
      'C2DSA: parallel spatial and channel attention at P5, gaining +1.8% mAP@0.5 with an ablation proving the gain is architectural',
      'SAAL: size-adaptive SimOTA anchor budgets that raise recall on small signs and precision to 0.974 on the pretrained model',
      'Contrastive out-of-distribution head on frozen backbone features reaching 0.997 AUROC on unseen classes',
      'From-scratch model improved 0.492 to 0.792 mAP@0.5 across 15 documented stages; all enhancements transferred to the production model',
    ],
    tech: ['Python', 'PyTorch', 'Ultralytics YOLO11', 'OpenCV', 'CUDA', 'Contrastive learning'],
    category: 'Machine Learning',
    featured: true,
    period: '2025 to 2026',
    github: 'https://github.com/AshwabhB/yolo11-architectural-enhancements',
    image: '/images/projects/yolo11.svg',
    imageAlt: 'Chart of mAP at 0.5 improving from 0.492 to 0.792 across development stages',
  },
  {
    slug: 'order-api',
    name: 'Cloud-Native Order API',
    tagline: 'FastAPI service on AWS ECS Fargate with idempotent orders and two-tier caching',
    description:
      'A production-style REST API for order management. Idempotent order creation via SHA-256 request fingerprints, multi-table ACID transactions, and a TTL cache in front of read-heavy endpoints, deployed as a container on ECS Fargate behind an Application Load Balancer through a GitHub Actions CI/CD pipeline.',
    highlights: [
      'Idempotency keys with stored responses so retried requests have exactly-once effects',
      'ECS Fargate, RDS PostgreSQL, ALB, CloudFront, CloudWatch logs, and SSM parameter secrets',
      'CI/CD on GitHub Actions: every push spins up the Docker Compose stack and runs pytest against the live API, then builds the image, pushes it to Amazon ECR, forces a new ECS deployment, and waits for service stability',
      'Multi-stage Docker build, Alembic migrations, and k6 load testing',
      'Cache HIT and MISS response headers plus a stats endpoint for observability',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Docker', 'GitHub Actions', 'CI/CD', 'AWS ECS Fargate', 'ECR', 'RDS', 'ALB', 'CloudFront'],
    category: 'Backend & Cloud',
    featured: true,
    period: '2026',
    github: 'https://github.com/AshwabhB/fastapi-docker-aws-ecs-fargate-alb',
    pipeline: {
      label: 'CI/CD',
      steps: ['push', 'GitHub Actions', 'Docker Compose up', 'pytest', 'build image', 'push to ECR', 'ECS deploy', 'stability check'],
    },
    image: '/images/projects/order-api.webp',
    imageAlt: 'Swagger UI listing the order, ledger, item, cache stats, and health endpoints',
  },
  {
    slug: 'parksmart',
    name: 'ParkSmart',
    tagline: 'Serverless parking occupancy prediction for SJSU garages',
    description:
      'A CloudWatch-scheduled AWS Lambda scrapes live occupancy for all four SJSU garages every 15 minutes into S3. Per-garage MLPRegressor models predict future occupancy from temporal features, and a Streamlit dashboard shows trends and recommendations.',
    highlights: [
      'Serverless ETL: Lambda, Boto3, and BeautifulSoup appending time-series CSVs in S3',
      'Four neural-network regressors trained on hour, weekday, and garage features',
      'Best-garage recommendation for any date and hour, with alternatives under 90% full',
    ],
    tech: ['Python', 'AWS Lambda', 'S3', 'CloudWatch', 'scikit-learn', 'Streamlit', 'Pandas', 'Matplotlib'],
    category: 'Data Engineering',
    featured: true,
    period: '2025 to 2026',
    github: 'https://github.com/AshwabhB/ParkSmart',
    image: '/images/projects/parksmart.webp',
    imageAlt: 'ParkSmart dashboard with an hourly occupancy trend chart for the North Garage',
  },
  {
    slug: 'neuratype',
    name: 'NeuraType',
    tagline: 'Offline speech-to-text for Windows with a global hotkey',
    description:
      'Press a hotkey in any app, speak, press again, and the transcription is pasted where the cursor is. Runs Whisper models locally through faster-whisper on CTranslate2 with CUDA acceleration, so no audio ever leaves the machine.',
    highlights: [
      'Six Whisper model sizes with automatic download and GPU or CPU fallback',
      'Local LLM post-processing for grammar, formatting, and filler-word removal via llama-cpp-python',
      'File transcription with optional speaker diarization through WhisperX and pyannote',
      'PyQt6 interface, searchable history, configurable hotkeys, and an Inno Setup installer',
    ],
    tech: ['Python', 'PyQt6', 'Whisper', 'faster-whisper', 'PyTorch', 'CUDA', 'llama-cpp-python', 'FFmpeg'],
    category: 'Desktop Apps',
    featured: true,
    period: '2026',
    image: '/images/projects/neuratype.svg',
    imageAlt: 'Illustration of a hotkey dictation flow: speak, transcribe locally, paste',
  },
  {
    slug: 'clipboard-memory',
    name: 'Clipboard Memory',
    tagline: 'Local-first macOS clipboard manager with on-device AI search',
    description:
      'A menu-bar app that captures text, links, images, files, and screenshots, then makes them findable. Combines SQLite FTS5 with Apple Vision OCR, Natural Language embeddings, and Foundation Models for summaries and query expansion, all on device.',
    highlights: [
      'Hybrid ranking: FTS5, exact and lexical matching, OCR text, entities, sentence embeddings, and image FeaturePrints',
      'Quick picker with direct paste and a sequential paste stack, backed by Accessibility permissions',
      'Privacy controls: app exclusions, confidential pasteboard filtering, pause, retention limits, and storage caps',
    ],
    tech: ['Swift', 'SwiftUI', 'SQLite FTS5', 'Apple Vision', 'Natural Language', 'Foundation Models', 'Xcode'],
    category: 'Desktop Apps',
    featured: true,
    period: '2026',
    status: 'In development',
    image: '/images/projects/clipboard-memory.svg',
    imageAlt: 'Illustration of a clipboard history list with search',
  },
  {
    slug: 'voice-generation',
    name: 'VoiceGeneration',
    tagline: 'GAN-based voice conversion pipeline',
    description:
      'A five-module audio pipeline: Whisper transcription, GPT-2 text continuation, gTTS synthesis, a speaker classifier over 46-dimensional audio features, and a U-Net GAN voice converter with a spectrally normalized discriminator, trained on VoxCeleb1.',
    highlights: [],
    tech: ['Python', 'PyTorch', 'GANs', 'Whisper', 'GPT-2', 'librosa', 'CUDA'],
    category: 'Machine Learning',
    featured: false,
    period: '2025',
    github: 'https://github.com/AshwabhB/VoiceGeneration',
  },
  {
    slug: 'facepoison',
    name: 'FacePoison',
    tagline: 'Poison Frog data-poisoning attack on face recognition',
    description:
      'A ResNet101 face recognizer with channel and spatial attention plus a feature pyramid network, and an implementation of the Poison Frog attack that crafts L-infinity bounded perturbations to align features with a target class in latent space.',
    highlights: [],
    tech: ['Python', 'PyTorch', 'ResNet101', 'Adversarial ML', 'FPN'],
    category: 'Machine Learning',
    featured: false,
    period: '2025',
    github: 'https://github.com/AshwabhB/FacePoison',
  },
  {
    slug: 'serverless-order-api',
    name: 'Serverless Order API',
    tagline: 'Idempotency, retries, and eventual consistency on AWS',
    description:
      'A FastAPI order service designed to stay correct under at-least-once delivery. Idempotency keys with request fingerprints, atomic order and ledger writes, and stored responses for safe retries. Deployed on AWS EC2 for a cloud computing course.',
    highlights: [],
    tech: ['Python', 'FastAPI', 'SQLite', 'AWS EC2'],
    category: 'Backend & Cloud',
    featured: false,
    period: '2026',
    github: 'https://github.com/AshwabhB/CS218-Assignment2',
  },
  {
    slug: 'wellsbot',
    name: 'WellsBot',
    tagline: 'Discord bot suite: polling vs event-driven designs',
    description:
      'Three Python Discord bots: a polling-based AFK mover, an event-driven AFK mover using voice-state WebSocket events, and an interactive soundboard with a button UI and FFmpeg audio streaming.',
    highlights: [],
    tech: ['Python', 'discord.py', 'asyncio', 'WebSocket', 'FFmpeg'],
    category: 'Tools',
    featured: false,
    period: '2025',
    github: 'https://github.com/AshwabhB/WellsBot-Discord-bot',
  },
  {
    slug: 'video-downloader',
    name: 'Simple Video Downloader',
    tagline: 'No-fuss video downloads from 1000+ sites',
    description:
      'Paste a link, pick a quality, get a clean MP4. Wraps yt-dlp and FFmpeg with batch downloads and a download log.',
    highlights: [],
    tech: ['Python', 'yt-dlp', 'FFmpeg'],
    category: 'Tools',
    featured: false,
    period: '2026',
    github: 'https://github.com/AshwabhB/Simple-Video-Downloader',
  },
  {
    slug: 'wine-quality',
    name: 'Wine Quality Classifier',
    tagline: 'Regularized neural network for multi-class quality prediction',
    description:
      'A 64-32-5 Keras network with batch normalization, dropout, L2 regularization, early stopping, and learning-rate scheduling that sorts wine samples into five quality tiers.',
    highlights: [],
    tech: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'Pandas'],
    category: 'Machine Learning',
    featured: false,
    period: '2025',
    github: 'https://github.com/AshwabhB/ML-Model-For-Wine-Quality-Classification',
  },
  {
    slug: 'fundamentals',
    name: 'Algorithms & ML Fundamentals',
    tagline: 'From-scratch implementations with test suites',
    description:
      'A set of small, tested repositories: BFS, DFS, and A* search; Gale-Shapley stable matching with multi-slot quotas; hill climbing and simulated annealing; single and multi-layer perceptrons in NumPy with hand-written backpropagation; and statistical outlier detection.',
    highlights: [],
    tech: ['Python', 'NumPy', 'pytest', 'unittest', 'Matplotlib'],
    category: 'Tools',
    featured: false,
    period: '2025',
    github: 'https://github.com/AshwabhB?tab=repositories&q=&type=source&language=python',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
