export const profile = {
  name: 'Ashwabh Bhatnagar',
  shortName: 'Ash',
  title: 'Software & Data Engineer',
  location: 'SF Bay Area',
  email: 'bhatnagarashwabh@gmail.com',
  github: 'https://github.com/AshwabhB',
  githubHandle: 'AshwabhB',
  linkedin: 'https://www.linkedin.com/in/ashwabh',
  medium: 'https://medium.com/@ashwabhbhatnagar',
  avatar: '/images/avatar.jpg',
  availability: 'Open to software engineering and data engineering roles',
  intro:
    'I build data pipelines, cloud-native backends, and the occasional desktop app. Three years as a data and software engineer at Teradata and Cognizant, a master’s in computer science from San Jose State, and currently a founding engineer at Nibit.',
  about: [
    'I have worked as both a data engineer and a software engineer. At Cognizant and Teradata I built streaming and batch pipelines, end-to-end applications, and automation that replaced manual workflows: ingestion frameworks, telemetry streams across thousands of nodes, deployment tooling, and the dashboards teams ran their weekly reviews on. That work taught me to care about idempotent loads, reconciliation checks, clean interfaces, and releases that can be rolled back without losing data.',
    'At San Jose State I went deeper into machine learning, distributed systems, and cloud computing. My master’s project extended the YOLO11 detector with a new attention block, a size-adaptive anchor assigner, and an out-of-distribution head, and I shipped a streaming lakehouse pipeline end to end with Kafka, Spark, Delta Lake, Airflow, dbt, and BigQuery.',
    'Today I am a founding engineer at Nibit, an AI note-taking app for students that is live on desktop and the web. I also build BetterSocial, a friend-first social planning app that is still in development. I like working across the stack, from the schema to the UI, and I like shipping things people actually use.',
  ],
}

export const education = {
  school: 'San Jose State University',
  degree: 'Master of Science, Computer Science',
  period: 'Aug 2024 to May 2026',
  gpa: '3.6 GPA',
  coursework: [
    'Machine Learning',
    'Reinforcement Learning',
    'Artificial Intelligence',
    'Biometric Security Using AI',
    'Cloud Computing',
    'Advanced Parallel Processing',
    'Design and Analysis of Algorithms',
  ],
}

export type SkillGroup = { name: string; skills: string[] }

export const skillGroups: SkillGroup[] = [
  {
    name: 'Languages',
    skills: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'Java', 'Scala', 'Swift', 'C#', 'Bash'],
  },
  {
    name: 'Data Engineering',
    skills: [
      'Apache Kafka',
      'Apache Spark / PySpark',
      'Spark Structured Streaming',
      'Apache Airflow',
      'dbt',
      'Delta Lake',
      'BigQuery',
      'Snowflake',
      'Redshift',
      'Databricks',
      'Azure Data Factory',
      'Teradata',
      'ETL / ELT',
      'Data quality & reconciliation',
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      'AWS (ECS Fargate, Lambda, S3, RDS, ALB, CloudFront, CloudWatch)',
      'GCP (BigQuery)',
      'Azure',
      'Docker',
      'GitHub Actions',
      'Jenkins',
      'CodeQL',
      'Linux',
      'CI/CD',
    ],
  },
  {
    name: 'Backend & Full-stack',
    skills: [
      'FastAPI',
      'REST APIs',
      'PostgreSQL',
      'SQLite',
      'SQLAlchemy',
      'Alembic',
      'Prisma',
      'Next.js',
      'React',
      'Electron',
      'Tailwind CSS',
      'Node.js',
    ],
  },
  {
    name: 'Machine Learning & AI',
    skills: [
      'PyTorch',
      'TensorFlow / Keras',
      'scikit-learn',
      'Computer vision (YOLO)',
      'Attention mechanisms',
      'Contrastive learning',
      'OOD detection',
      'GANs',
      'Whisper / speech-to-text',
      'LLM integration',
      'NumPy / Pandas',
    ],
  },
]
