import profileImage from './assets/profile-placeholder.svg';
import iconGithub from './assets/icon-github.svg';
import iconLinkedin from './assets/icon-linkedin.svg';
import iconMail from './assets/icon-mail.svg';
import iconPhone from './assets/icon-phone.svg';

export const profile = {
  name: 'Gaurav Rozatkar',
  role: 'Senior Backend & DevOps Engineer',
  location: 'Indore, Madhya Pradesh, India',
  summary:
    'Senior Software Engineer with 7+ years delivering distributed backend systems, DevOps pipelines, and modern AI-enabled platforms. I build high-concurrency services with measurable performance gains, secure infrastructure, and reliable delivery workflows.',
  image: profileImage,
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gaurav-rozatkar', icon: iconLinkedin },
    { label: 'GitHub', href: 'https://github.com/Gauzz', icon: iconGithub },
    { label: 'Email', href: 'mailto:gauravrozatkar1@gmail.com', icon: iconMail },
    { label: 'Phone', href: 'tel:+919424890664', icon: iconPhone }
  ]
};

export const skillGroups = [
  {
    title: 'Languages & Frameworks',
    skills: [
      'Node.js',
      'Express',
      'Next.js',
      'React',
      'Python',
      'FastAPI',
      'PHP',
      'Laravel',
      'CodeIgniter',
      'Java',
      'Kotlin',
      'TypeScript',
      'JavaScript',
      'Svelte',
      'Vue.js'
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'AWS (EC2, ECR, ECS, IAM, Route53, S3, CloudWatch)',
      'AWS SQS / SNS / SES',
      'AWS CodeBuild / CodePipeline / CDK',
      'Azure (VM, Storage Queue, Blob, ACS)',
      'Google Cloud (Auth, Document AI)',
      'Docker',
      'Docker Compose',
      'Kubernetes',
      'Nginx',
      'GitHub Actions',
      'Jenkins',
      'Bitbucket Pipelines'
    ]
  },
  {
    title: 'Data & Messaging',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'MySQL',
      'DynamoDB',
      'Neo4j',
      'SQLite',
      'Qdrant',
      'Kafka',
      'RabbitMQ',
      'WebSocket / Socket.IO',
      'Webhook',
      'REST API',
      'SOAP',
      'GraphQL',
      'Cron'
    ]
  },
  {
    title: 'AI, LLM & Automation',
    skills: [
      'OpenAI',
      'Azure AI Foundry',
      'Gemini',
      'Claude',
      'CrewAI',
      'LangChain',
      'LangGraph',
      'Whisper',
      'FFmpeg',
      'spaCy',
      'Google TTS',
      'Claude Agent SDK',
      'Tesseract OCR'
    ]
  },
  {
    title: 'XR, Web3 & Spatial',
    skills: [
      'ARCore',
      'ARKit',
      'Unity',
      'Three.js',
      'A-Frame',
      'Babylon.js',
      '8thWall',
      'Model Viewer',
      'Web3.js',
      'Ethers.js',
      'MetaMask',
      'OpenSea',
      'Pinata'
    ]
  },
  {
    title: 'Testing & Operations',
    skills: ['Jest', 'Postman', 'ElasticSearch', 'Logstash', 'Kibana', 'PM2', 'Jira', 'Trello', 'Zoho Sprints']
  }
];

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Wow Labz',
    duration: 'May 2020 - Present',
    current: true,
    points: [
      'Architected distributed microservices with Node.js and FastAPI for production platforms across healthcare, finance, and legal domains.',
      'Containerized services with Docker and standardized environments to maintain near-perfect parity across development and production.',
      'Improved deployment velocity by implementing GitHub Actions CI/CD pipelines, reducing release time from 45 minutes to under 10 minutes.',
      'Optimized database and cache-heavy workflows supporting 1M+ daily active records and high-throughput transaction paths.',
      'Managed Ubuntu production servers, Nginx reverse proxying, TLS automation, security hardening, and backup reliability.',
      'Mentored junior developers on backend best practices and engineering quality standards.',
      'Collaborated with product and delivery teams to scale infrastructure during peak traffic periods.'
    ]
  },
  {
    role: 'Founder',
    company: 'LateralX',
    duration: 'Feb 2018 - May 2020',
    current: false,
    points: [
      'Built and scaled AR/VR products from concept to deployment for healthcare, education, and real-estate use cases.',
      'Led engineering and delivery for cross-platform web/mobile/XR products, balancing product quality and team growth.',
      'Developed internal systems and process rigor that contributed to a successful team and technology acquisition.'
    ]
  }
];

export const projects = [
  {
    name: 'The Sleep Diary',
    tag: 'Healthcare / Fullstack',
    description:
      'Delivered a research-grade sleep tracking platform for clinical studies and daily journaling, including structured morning and evening symptom workflows. Built backend and admin modules with Node.js, Vue.js, and MongoDB, and supported production release workflows for both App Store and Play Store availability.',
    stack: ['Node.js', 'Vue.js', 'MongoDB'],
    categories: ['backend', 'fullstack', 'healthcare']
  },
  {
    name: 'Karmeq Trading Platform',
    tag: 'Finance / Backend / DevOps / Compliance',
    description:
      'Engineered backend and DevOps foundations for a stock platform supporting buy/sell flows, custodial gifting for minors, and real-time services for charts, stock prices, trading, and fund management. Built and executed the compliance test suite used for FINRA certification, and implemented resilient backups, logging, and worker pipelines using MySQL, MongoDB, Redis, SQS, SNS, SES, and cron jobs.',
    stack: ['Node.js', 'MongoDB', 'MySQL', 'Redis', 'AWS SQS/SNS/SES', 'Cron'],
    categories: ['backend', 'devops', 'finance', 'compliance']
  },
  {
    name: 'Phygitalize NFT Plugin',
    tag: 'Blockchain / Finance / Backend',
    description:
      'Built core backend services for an Adobe Photoshop plugin that enabled creators to mint and list NFTs through OpenSea workflows. Implemented royalty reconciliation logic to accurately distribute proceeds across both current and historical owners on each trade.',
    stack: ['Node.js', 'MongoDB', 'OpenSea API', 'Web3'],
    categories: ['backend', 'devops', 'finance', 'blockchain']
  },
  {
    name: 'Rekt Blockchain Game',
    tag: 'Blockchain / Architecture / Backend',
    description:
      'Took over a production blockchain gaming backend and rewrote critical game-state and fund reconciliation logic to restore stability. Modernized Python and Web3 service flows, improved wallet accounting correctness, and removed failure-prone legacy paths.',
    stack: ['Python', 'Ethers.js', 'Web3.js', 'MongoDB'],
    categories: ['backend', 'devops', 'finance', 'blockchain', 'architecture']
  },
  {
    name: 'Thumbsup AI Campaign Engine',
    tag: 'AI / MLOps / Backend',
    description:
      "Delivered a real-time AI campaign engine for World Cup social updates, including automated voice generation modeled for Shah Rukh Khan campaign experiences and low-latency Twitter processing workflows. Built data collation, model-training inputs, and backend orchestration with Python, Neo4j, and MongoDB to keep campaign outputs timely and consistent.",
    stack: ['Python', 'Neo4j', 'MongoDB', 'Twitter API', 'AI Pipeline'],
    categories: ['backend', 'ai', 'devops']
  },
  {
    name: 'Dyordex Market Data Engine',
    tag: 'Architecture / Performance',
    description:
      'Architected a low-latency market data backend for token and token-pair analytics, including pricing feeds, chart data, daily gainers, and daily losers. Designed caching and query optimization layers that achieved 90% of requests below 50ms and the remaining 10% below 200ms.',
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'Redis', 'WebSockets'],
    categories: ['backend', 'devops', 'architecture', 'finance']
  },
  {
    name: 'API Migration for FedRAMP',
    tag: 'Healthcare / Compliance / DevOps',
    description:
      'Led backend migration work for 11 applications at a US healthcare enterprise to an AppSync-based architecture aligned with FedRAMP compliance goals. Rebuilt services with TypeScript GraphQL resolvers for queries, mutations, and subscriptions, added automated QA coverage in Postman, and delivered repeatable deployments with AWS CDK pipelines.',
    stack: ['TypeScript', 'GraphQL', 'DynamoDB', 'AWS AppSync', 'AWS CDK', 'Postman Testing'],
    categories: ['backend', 'devops', 'healthcare', 'quality', 'compliance']
  },
  {
    name: 'Optymedge Certification Module',
    tag: 'Healthcare / Backend',
    description:
      'Built the core certification module for a US healthcare lab and study platform, a critical workflow underpinning the main business process. Implemented strongly typed GraphQL services and DynamoDB-backed data models focused on integrity, traceability, and operational reliability.',
    stack: ['TypeScript', 'GraphQL', 'DynamoDB'],
    categories: ['backend', 'healthcare', 'compliance']
  },
  {
    name: 'Legal Register AI Platform',
    tag: 'Legal Tech / AI / DevOps',
    description:
      'Led backend, DevOps, and MLOps for Altamimi\'s legal register automation platform that reduced manual legal research workload by about 95%. Integrated TypeScript and Python services with Azure OpenAI extraction pipelines to improve turnaround speed and output consistency.',
    stack: ['TypeScript', 'Python', 'MongoDB', 'Azure OpenAI', 'Automation Pipelines'],
    categories: ['backend', 'ai', 'devops', 'architecture', 'legal', 'compliance']
  },
  {
    name: 'University Copilot',
    tag: 'EdTech / Multilingual AI',
    description:
      'Built LMS backend capabilities for multilingual lesson delivery and exam workflows, with a pipeline that converts uploaded videos into multiple Indian language tracks. Orchestrated speech recognition, language processing, and synthesis using Whisper, LangChain, spaCy, FFmpeg, Google TTS, and MongoDB.',
    stack: ['Python', 'MongoDB', 'Whisper', 'LangChain', 'FFmpeg', 'spaCy', 'Google TTS'],
    categories: ['backend', 'ai', 'devops', 'architecture', 'edtech']
  },
  {
    name: 'Listapp Pharma Network',
    tag: 'Healthcare / Mobile / Backend',
    description:
      'Maintained and extended a pharma supply-chain application connecting distributors and retailers across Indore and nearby regions. Delivered backend and Android integration updates in PHP CodeIgniter, Java, and MySQL to stabilize daily operations and partner workflows.',
    stack: ['PHP CodeIgniter', 'Java', 'MySQL', 'Android'],
    categories: ['backend', 'healthcare', 'mobile']
  },
  {
    name: 'Classmonitor Magic App',
    tag: 'AR / EdTech / Mobile',
    description:
      'Developed a cross-platform AR learning experience for early education, helping children aged 1-5 learn letters, numbers, and foundational facts through interactive content. Built Unity and Vuforia modules optimized for smooth classroom and home usage across mobile devices.',
    stack: ['Unity', 'Vuforia', 'AR'],
    categories: ['xr', 'edtech', 'mobile']
  },
  {
    name: 'LateralX XR Creator Platform',
    tag: 'XR / Fullstack / Architecture',
    description:
      'Built a no-code XR creation platform that enabled marketers and non-technical users to design AR and VR experiences and publish shareable web links. Combined Node.js, A-Frame, Three.js, and MySQL to support scalable content publishing for a growing real-estate-focused user base.',
    stack: ['Node.js', 'A-Frame', 'Three.js', 'MySQL'],
    categories: ['fullstack', 'backend', 'devops', 'architecture', 'xr', 'edtech']
  },
  {
    name: 'Internal Tool Creator',
    tag: 'Agentic AI / Fullstack',
    description:
      'Designed and implemented an agent-orchestrated internal tool builder that converts user prompts into architecture, task planning, coding, testing, and local deployment workflows. Coordinated multi-agent handoffs with persistent task state in MongoDB to improve delivery speed and quality feedback loops.',
    stack: ['Node.js', 'React', 'Express', 'MongoDB', 'Claude Agent SDK'],
    categories: ['fullstack', 'backend', 'ai', 'devops', 'architecture']
  },
  {
    name: 'API Management Tool Lite',
    tag: 'Fullstack / Backend / DevOps',
    description:
      'Architected and shipped an internal API testing and management platform to reduce dependence on paid tools such as Postman while preserving developer productivity. Built fullstack workflows for request execution, organization, and collaboration using Node.js, React, Express, and MongoDB.',
    stack: ['Node.js', 'React', 'Express', 'MongoDB'],
    categories: ['fullstack', 'backend', 'devops', 'architecture', 'quality']
  }
];

export const education = [
  {
    degree: 'Bachelor of Engineering (IT)',
    institution: 'Samrat Ashok Technological Institute, Vidisha'
  },
  {
    degree: 'High School',
    institution: 'ST. Paul School, Indore'
  }
];
