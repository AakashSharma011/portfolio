export const person = {
  name: "Aakash Sharma",
  title: "GenAI Engineer",
  subtitle: "AI ML Developer",
  tagline: "Building Intelligent Systems That Ship",
  email: "sharma.aakash9877@gmail.com",
  linkedin: "linkedin.com/in/aakash-sharma-432a0526a",
  github: "github.com/AakashSharma011",
  location: "Delhi NCR · India",
  available: true,
  stats: [
    { num: "4+", label: "AI Projects" },
    { num: "9.03", label: "CGPA · Rank 1" },
    { num: "1", label: "Live Platform" },
    { num: "100+", label: "Students Taught" },
  ],
  typewriterPhrases: [
    "Building RAG Pipelines & AI Agents",
    "Turning LLMs into Production Systems",
    "FastAPI + Docker + LangChain",
    "Systems That Actually Ship",
  ],
  experience: [
    {
      role: "AI & ML Engineer Intern",
      company: "Softcrayons Tech Solutions Pvt. Ltd.",
      location: "Noida",
      period: "Jan 2026 – May 2026",
      bullets: [
        "End-to-end ML pipelines for real-world AI applications",
        "GenAI project workflows with FastAPI and Docker",
        "Improved system performance 30% on industry analytics project",
      ],
    },
    {
      role: "Online Instructor — Python & Data Analytics",
      company: "Brain Chant",
      period: "Mar 2024 – May 2024",
      bullets: [
        "Delivered lessons to 100+ students",
        "Built interactive dashboards for concept clarity",
      ],
    },
    {
      role: "B.Tech ECE — Rank 1 · CGPA 9.03",
      company: "MAIT · Maharaja Agrasen Institute of Technology",
      period: "Nov 2022 – Aug 2026",
      bullets: ["Rank-1 in batch", "9.03 CGPA"],
    },
  ],
};

export const projects = [
  {
    featured: true,
    name: "NotedNet.com",
    subtitle: "AI-Enhanced Knowledge Platform",
    tag: "LIVE IN PRODUCTION",
    description:
      "Production-live platform with AI-powered backend ML features, " +
      "API optimization, and Docker deployment. Real users, real scale. " +
      "Contributed to model response time improvements across core features.",
    stack: ["Python", "FastAPI", "Docker", "ML Integration", "API Optimization", "CI/CD"],
    liveUrl: "https://notednet.com",
    githubUrl: "https://github.com/AakashSharma011",
    metrics: [
      { val: "Live", label: "Status" },
      { val: "↑30%", label: "Perf Gain" },
      { val: "API", label: "Optimized" },
      { val: "Docker", label: "Deployed" },
    ],
  },
  {
    name: "Explainify AI",
    subtitle: "NLP Intelligence Platform",
    tag: "NLP · RAG · LangChain",
    description:
      "AI agent converting structured and unstructured text into " +
      "concise explanations via RAG pipelines, semantic search, " +
      "and document summarization.",
    stack: ["RAG", "LangChain", "Semantic Search", "Python", "NLP", "HuggingFace", "Vector DB"],
    githubUrl: "https://github.com/AakashSharma011",
  },
  {
    name: "Text-to-SQL Engine",
    subtitle: "AI Business Data Assistant",
    tag: "AI Agent · LLM · SQL",
    description:
      "LLM-powered system converting natural language business " +
      "questions into SQL queries. Schema-aware prompting — " +
      "non-technical users extract insights with zero SQL knowledge.",
    stack: ["LLM", "SQL Generation", "FastAPI", "Prompt Engineering", "Streamlit"],
    githubUrl: "https://github.com/AakashSharma011",
  },
  {
    name: "Personal AI Chatbot",
    subtitle: "Conversational Assistant",
    tag: "Transformers · NLP",
    description:
      "Transformer-based conversational AI with advanced prompt " +
      "engineering. Real-time inference backend, production-deployed.",
    stack: ["Transformers", "Prompt Engineering", "FastAPI", "Python"],
    githubUrl: "https://github.com/AakashSharma011",
  },
];

export const skills = [
  {
    group: "GenAI & LLMs",
    hot: true,
    tags: [
      { label: "RAG Pipelines", hot: true },
      { label: "LangChain", hot: true },
      { label: "AI Agents", hot: true },
      { label: "Prompt Eng.", hot: true },
      { label: "LangGraph", hot: false },
      { label: "Transformers", hot: false },
      { label: "HuggingFace", hot: false },
      { label: "Vector DB", hot: false },
      { label: "Groq API", hot: false },
      { label: "OpenAI API", hot: false },
    ],
  },
  {
    group: "Dev & Deployment",
    hot: true,
    tags: [
      { label: "FastAPI", hot: true },
      { label: "Docker", hot: true },
      { label: "Python", hot: true },
      { label: "Git", hot: false },
      { label: "CI/CD", hot: false },
      { label: "Streamlit", hot: false },
      { label: "Cloud", hot: false },
    ],
  },
  {
    group: "ML & Data",
    tags: [
      { label: "Scikit-Learn", hot: false },
      { label: "Pandas", hot: false },
      { label: "NumPy", hot: false },
      { label: "Feature Eng.", hot: false },
      { label: "Model Evaluation", hot: false },
      { label: "SQL", hot: false },
      { label: "Matplotlib", hot: false },
      { label: "Forecasting", hot: false },
    ],
  },
  {
    group: "AI Dev Tools",
    tags: [
      { label: "Cursor", hot: true },
      { label: "GitHub Copilot", hot: true },
      { label: "Bolt.new", hot: false },
      { label: "Replit AI", hot: false },
      { label: "v0.dev", hot: false },
    ],
  },
  {
    group: "Certifications",
    tags: [
      { label: "Stanford ML · Coursera · Sept 2024", hot: false },
    ],
  },
  {
    group: "Achievements",
    tags: [
      { label: "Rank-1 B.Tech ECE", hot: false },
      { label: "30% Perf Improvement", hot: false },
      { label: "100+ Students Taught", hot: false },
      { label: "Production Deployments", hot: false },
    ],
  },
];
