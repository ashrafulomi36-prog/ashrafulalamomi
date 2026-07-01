// ============================================================================
// data/portfolio.ts
// ----------------------------------------------------------------------------
// Single source of truth for every piece of content on the site.
// To update the portfolio, edit the objects below — no component code
// needs to change. See README.md → "Editing content" for a full guide.
// ============================================================================

export const personal = {
  name: "Ashraful Alam Omi",
  firstName: "Omi",
  location: "Chattogram, Bangladesh",
  role: "AI Engineer & Full-Stack Developer",
  roles: [
    "AI Engineer",
    "ML Enthusiast",
    "Software Developer",
    "Competitive Programmer",
    "Entrepreneur",
    "Research Enthusiast",
  ],
  position: "9th Semester CSE Student, East Delta University",
  email: "hello@opdexstudio.com",
  resumeUrl: "/resume.pdf",
  summary:
    "Analytical Computer Science student passionate about artificial intelligence, machine learning, software engineering, automation, competitive programming, and entrepreneurship. Experienced in building production-ready web applications, AI-powered automation systems, and leading student initiatives. Interested in solving real-world problems through technology while continuously learning modern software engineering practices.",
  aboutParagraphs: [
    "I'm a final-year Computer Science & Engineering student at East Delta University in Chattogram, Bangladesh, currently in my 9th semester with a CGPA of 3.48/4.00. My work sits at the intersection of applied AI, full-stack engineering, and workflow automation — I like taking an idea from a whiteboard sketch to something people actually use.",
    "Outside coursework, I compete in ICPC and NCPC preliminaries, write competitive-programming content for YouTube, and lead technical initiatives through East Delta's Computer Club (AI Research) and Robotics Society. I also run two ventures: DRAPECURVE, a clothing brand I co-founded, and OpdexStudio, an agency delivering web development, UI/UX, and AI automation for small businesses.",
    "Right now I'm focused on shipping polished Next.js products, building n8n-powered automation pipelines around LLM APIs, and preparing research-oriented project work for national AI competitions. I'm looking for AI Engineer, ML Engineer, Software Engineer, or Research Assistant opportunities where I can apply that same build-and-ship instinct at a larger scale.",
  ],
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
    email: "mailto:hello@opdexstudio.com",
  },
};

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "East Delta University",
    location: "Chattogram, Bangladesh",
    period: "2022 — Present",
    detail: "9th Semester · CGPA 3.48 / 4.00",
    status: "current" as const,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "CUET School & College",
    location: "Chattogram, Bangladesh",
    period: "2019 — 2021",
    detail: "Science Group",
    status: "complete" as const,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Noapara High School",
    location: "Bangladesh",
    period: "2017 — 2019",
    detail: "Science Group",
    status: "complete" as const,
  },
];

export const certifications = [
  {
    title: "Winner — 3 Minute Thesis (3MT) Competition 2025",
    issuer: "East Delta University",
  },
  {
    title: "Introduction to Python",
    issuer: "DataCamp",
  },
  {
    title: "Computer Office Application",
    issuer: "Bangladesh Technical Education Board",
  },
];

export type SkillCategory = {
  category: string;
  eyebrow: string;
  skills: { name: string; level: number }[];
};

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    eyebrow: "lang",
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 88 },
      { name: "C", level: 82 },
      { name: "Java", level: 75 },
      { name: "TypeScript / JavaScript", level: 85 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    category: "AI & Machine Learning",
    eyebrow: "ml",
    skills: [
      { name: "NumPy / Pandas", level: 82 },
      { name: "Matplotlib", level: 78 },
      { name: "Scikit-learn", level: 75 },
      { name: "Gemini / LLM APIs", level: 85 },
      { name: "Prompt Engineering", level: 88 },
    ],
  },
  {
    category: "Web Development",
    eyebrow: "web",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
      { name: "Three.js / R3F", level: 68 },
      { name: "Sanity CMS", level: 75 },
    ],
  },
  {
    category: "Automation",
    eyebrow: "auto",
    skills: [
      { name: "n8n", level: 90 },
      { name: "Gmail / Sheets API", level: 82 },
      { name: "Graph API (Meta)", level: 78 },
      { name: "Workflow Orchestration", level: 85 },
    ],
  },
  {
    category: "Cloud & Deployment",
    eyebrow: "infra",
    skills: [
      { name: "Vercel", level: 90 },
      { name: "Cloudflare", level: 75 },
      { name: "GitHub / Git", level: 88 },
    ],
  },
  {
    category: "Tools",
    eyebrow: "tools",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Postman", level: 78 },
    ],
  },
];

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Founder",
    org: "OpdexStudio",
    period: "2024 — Present",
    location: "Chattogram, Bangladesh",
    description:
      "Run a small agency delivering web development, UI/UX design, and AI automation for local and international clients — from Next.js builds to n8n-powered outreach and content pipelines.",
    tags: ["Next.js", "n8n", "UI/UX", "AI Automation"],
  },
  {
    title: "Co-Founder",
    org: "DRAPECURVE",
    period: "2024 — Present",
    location: "Chattogram, Bangladesh",
    description:
      "Co-founded a clothing brand and built its full storefront and brand presence, handling everything from product direction to the production website.",
    tags: ["Entrepreneurship", "Next.js", "Brand"],
  },
  {
    title: "Sub Executive — AI Research",
    org: "Computer Club, East Delta University",
    period: "2025 — Present",
    location: "East Delta University",
    description:
      "Coordinate AI-research programming for the club, including workshops and project mentorship for peers exploring machine learning and applied AI.",
    tags: ["Leadership", "AI Research"],
  },
  {
    title: "Sub Executive",
    org: "Robotics Society, East Delta University",
    period: "2025 — Present",
    location: "East Delta University",
    description:
      "Support technical planning and execution for robotics initiatives and competitions within the university society.",
    tags: ["Leadership", "Robotics"],
  },
  {
    title: "Founder",
    org: "Science Club",
    period: "2019",
    location: "Noapara High School",
    description:
      "Founded the school's first Science Club and organized its inaugural Science Fair, introducing peers to hands-on experimentation and project-based learning.",
    tags: ["Community", "STEM Outreach"],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  challenges: string;
  learned: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "drapecurve",
    title: "DRAPECURVE",
    category: "E-Commerce / Brand",
    description:
      "Premium storefront and brand site for a clothing label I co-founded — built for speed, clean product presentation, and easy content updates.",
    features: [
      "Fully responsive storefront optimized for mobile shopping",
      "Fast, static-first architecture deployed on Vercel",
      "Custom brand identity and product presentation system",
    ],
    challenges:
      "Balancing a premium, editorial feel with the load-time and simplicity a small brand needs to maintain long-term.",
    learned:
      "How to scope a client-style build end-to-end — brand, content structure, and deployment — under real time constraints.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    demo: "https://drapecurvee.vercel.app/",
    featured: true,
  },
  {
    slug: "sumaita-islam-portfolio",
    title: "Sumaita Islam — Portfolio",
    category: "Web Development",
    description:
      "A hardcoded, animation-rich personal portfolio built for a fellow CSE student and web designer, taken from design through a complex production deployment.",
    features: [
      "Custom page transitions and scroll-triggered reveals",
      "3D card-tilt interactions across project cards",
      "Hand-tuned typography and dark, editorial visual system",
    ],
    challenges:
      "Debugging a subtle Vercel deployment issue traced back to ISP-level IP blocking on Bangladeshi mobile networks, solved with a Cloudflare proxy layer.",
    learned:
      "Infrastructure-level debugging skills beyond the codebase — DNS, proxying, and regional network quirks that don't show up in local development.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
  {
    slug: "minimals-by-afroja",
    title: "Minimals By Afroja",
    category: "E-Commerce",
    description:
      "A from-scratch cake shop website with a Sanity-powered content backend, rebuilt after inheriting a mismatched project template.",
    features: [
      "Sanity CMS schemas for products and categories",
      "Clean, minimal storefront layout and navigation",
      "Editable content without redeploying the site",
    ],
    challenges:
      "The original repo shipped as a mismatched Vite template — the whole layout, navigation, and CMS integration had to be rebuilt from zero.",
    learned:
      "How to recover a project cleanly from a broken starting point instead of fighting the wrong foundation.",
    stack: ["Next.js", "Sanity CMS", "Tailwind CSS"],
  },
  {
    slug: "cpu-scheduling-visualizer",
    title: "CPU Scheduling Visualizer",
    category: "Systems / Education",
    description:
      "An interactive visualizer for classic CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority) built for an operating systems course.",
    features: [
      "Step-by-step Gantt chart animation of each algorithm",
      "Configurable process sets, burst times, and quantum",
      "Side-by-side comparison of scheduling outcomes",
    ],
    challenges:
      "Modeling algorithm state transitions in a way that could animate smoothly and stay accurate to the underlying scheduling logic.",
    learned:
      "Turning an abstract systems concept into something visual and intuitive to interact with.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "maze-game",
    title: "Maze Game",
    category: "Game / OOP",
    description:
      "A Java-based maze game built to practice object-oriented design — procedural maze generation, collision handling, and game state management.",
    features: [
      "Procedurally generated maze layouts",
      "Object-oriented entity and collision system",
      "Clean separation between game logic and rendering",
    ],
    challenges:
      "Designing a class hierarchy that stayed maintainable as new game mechanics were added.",
    learned:
      "Practical object-oriented design patterns beyond textbook examples.",
    stack: ["Java", "OOP"],
  },
  {
    slug: "note-summary-quiz-generator",
    title: "Note Summary & Quiz Generator",
    category: "AI / Education",
    description:
      "A Python tool that ingests study notes and generates concise summaries plus auto-generated quiz questions using machine learning techniques.",
    features: [
      "Automatic text summarization pipeline",
      "Quiz-question generation from source notes",
      "Simple CLI / script-based workflow for students",
    ],
    challenges:
      "Getting summarization and question generation to stay faithful to the source notes rather than hallucinating content.",
    learned:
      "Early hands-on experience applying ML/NLP techniques to a real study workflow.",
    stack: ["Python", "AI", "Machine Learning"],
  },
  {
    slug: "facebook-product-automation",
    title: "Facebook Product Automation",
    category: "AI Automation",
    description:
      "An n8n workflow that scrapes products from htbazar.com via the Shopify API, generates AI captions with Gemini, applies a markup margin, and auto-posts to a Facebook Page and Marketplace via the Graph API.",
    features: [
      "Scheduled scraping and product-data normalization",
      "Gemini-generated marketing captions per product",
      "Automated posting to Facebook Page & Marketplace",
    ],
    challenges:
      "Handling Graph API rate limits, token refresh, and inconsistent product data from the source site.",
    learned:
      "How to design resilient, scheduled automation pipelines that chain multiple third-party APIs together.",
    stack: ["n8n", "Gemini API", "Graph API", "Shopify API"],
    featured: true,
  },
  {
    slug: "cartoon-content-automation",
    title: "Cartoon Content Automation",
    category: "AI Automation",
    description:
      "An 18-node n8n pipeline that fully automates kids' cartoon content: Gemini script generation, MagicAI video, edge-tts voiceover, Shotstack merge, and multi-platform publishing.",
    features: [
      "Script generation with Gemini from a content brief",
      "Automated video generation and voiceover synthesis",
      "Shotstack-based merge and upload-post.com publishing to YouTube & Instagram",
      "Google Sheets logging for full pipeline visibility",
    ],
    challenges:
      "Coordinating timing and format compatibility across five separate services in a single automated chain.",
    learned:
      "End-to-end pipeline orchestration — treating a creative workflow as a real, monitorable system.",
    stack: ["n8n", "Gemini API", "MagicAI", "Shotstack", "edge-tts"],
  },
  {
    slug: "cold-email-automation",
    title: "Cold Email Automation",
    category: "AI Automation",
    description:
      "An n8n + Google Sheets + Gmail + AI workflow built for OpdexStudio's outreach, generating and sending personalized cold emails at scale.",
    features: [
      "Sheet-driven contact and personalization pipeline",
      "AI-generated, personalized email copy per lead",
      "Gmail API sending with OAuth2 authentication",
    ],
    challenges:
      "Resolving OAuth2 consent issues, Gmail API quotas, and PowerShell execution-policy restrictions during local automation runs.",
    learned:
      "Practical API authentication and platform-level troubleshooting on Windows automation environments.",
    stack: ["n8n", "Google Sheets", "Gmail API", "Gemini AI"],
  },
];

export type CompetitionItem = {
  title: string;
  org: string;
  year: string;
  result?: string;
};

export const competitions: CompetitionItem[] = [
  {
    title: "SciBlitz AI Challenge 2026",
    org: "IEEE CUET — National Security AI Track",
    year: "2026",
    result: "Project Ideation",
  },
  {
    title: "Hackathon",
    org: "East Delta University",
    year: "2025",
  },
  {
    title: "NSU Business Case Competition",
    org: "North South University",
    year: "2025",
  },
  {
    title: "Hult Prize — Campus Round",
    org: "East Delta University",
    year: "2025",
    result: "Top 5",
  },
  {
    title: "3 Minute Thesis (3MT) Competition",
    org: "East Delta University",
    year: "2025",
    result: "Winner",
  },
  {
    title: "EDU Intra University Coding Competition",
    org: "East Delta University",
    year: "2024",
    result: "Top 10",
  },
  {
    title: "ICPC Preliminary",
    org: "International Collegiate Programming Contest",
    year: "2024",
  },
  {
    title: "NCPC Preliminary",
    org: "National Collegiate Programming Contest",
    year: "2024",
  },
];

export const leadership = [
  {
    role: "Sub Executive — AI Research",
    org: "Computer Club, East Delta University",
  },
  {
    role: "Sub Executive",
    org: "Robotics Society, East Delta University",
  },
  {
    role: "Founder",
    org: "Science Club, Noapara High School",
  },
  {
    role: "Organizer",
    org: "Science Fair, Noapara High School",
  },
];

export const contentCreation = {
  heading: "DSA & Competitive Programming on YouTube",
  description:
    "I create educational video content on Data Structures & Algorithms, competitive-programming techniques, and problem-solving strategies — aimed at helping fellow students build stronger fundamentals for contests and interviews.",
  topics: [
    "Data Structures",
    "Algorithms",
    "Competitive Programming",
    "Problem Solving",
  ],
};

export const achievements = [
  { title: "Winner — 3 Minute Thesis (3MT) Competition", year: "2025" },
  { title: "Top 10 — EDU Intra University Coding Competition", year: "2024" },
  { title: "Top 5 — Hult Prize Campus Round", year: "2025" },
  { title: "Founder — Science Club, Noapara High School", year: "2019" },
  { title: "Organizer — Science Fair, Noapara High School", year: "2019" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Competitions", href: "#competitions" },
  { label: "Contact", href: "#contact" },
];
