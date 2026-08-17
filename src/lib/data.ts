export const hero = {
  name: "Ajsal Shereef Palattuparambil",
  tagline:
    "Ph.D. Candidate in AI · Machine Learning Engineer · Shipping ML Systems End-to-End",
  location: "Geelong, VIC, Australia",
  github: "https://github.com/Ajsal-Shereef",
  linkedin: "https://www.linkedin.com/in/ajsal-2ab698a7/",
  email: "ajsalshereef123@gmail.com",
  phone: "+61 415 140 136",
};

export const about =
  "Ph.D. candidate in Artificial Intelligence with 4+ years of prior applied experience across Machine Learning Engineering, Computer Vision, and Data Science roles. I combine deep theoretical expertise in Reinforcement Learning with hands-on delivery of Generative AI systems — RAG pipelines, autonomous agents, and LLM fine-tuning (QLoRA) — through to production: containerization, cloud deployment, CI/CD, and observability. Proficient in Python, PyTorch, LangChain, and C++, with a rigorous mathematical foundation and a track record of shipping ML systems end-to-end, not just prototypes.";

export const skills = {
  coreLanguages: ["Python", "C++", "R", "SQL"],
  generativeAI: {
    title: "Generative AI & LLM Engineering",
    items: [
      "RAG (Retrieval-Augmented Generation)",
      "Agents & Tool Use",
      "QLoRA Fine-tuning",
      "Prompt Engineering",
      "Vector Embeddings & Semantic Search",
      "Multi-modal Interaction (Text/Image/Audio)",
      "Function Calling",
      "Model Evaluation",
    ],
    frameworks: [
      "LangChain",
      "Hugging Face",
      "Sentence-Transformers",
      "Gradio",
      "Frontier APIs",
      "Open-Source Models",
    ],
  },
  computerVision: {
    title: "Computer Vision & Deep Learning",
    items: [
      "Object Detection",
      "Segmentation (Yolact++, SoloV2, UNet)",
      "Image Registration",
      "Image Stitching & Feature Matching (ORB)",
      "GANs",
      "VAEs",
      "Diffusion Models",
    ],
  },
  reinforcementLearning: {
    title: "Reinforcement Learning",
    items: [
      "Policy Optimisation",
      "Knowledge Transfer",
      "Human-Agent Interaction",
    ],
  },
  mlopsCloud: {
    title: "MLOps, Deployment & Cloud",
    items: [
      "Microsoft Azure (Container Apps, Container Registry)",
      "Infrastructure-as-Code (Bicep)",
      "GitHub Actions CI/CD",
      "Docker (multi-stage builds, orchestration)",
      "FastAPI & RESTful API Design",
      "React (full-stack prototyping)",
      "Azure Application Insights & OpenTelemetry",
      "On-device Deployment (Edge AI, TensorFlow Lite)",
      "Model Quantization & Performance Benchmarking",
      "High Performance Computing (HPC)",
    ],
  },
  toolsFoundations: {
    title: "Tools & Foundations",
    items: [
      "Git",
      "LaTeX",
      "PyTorch",
      "Probability & Statistics",
      "Linear Algebra",
      "Optimization",
    ],
  },
};

export type Project = {
  title: string;
  description: string;
  techTags: string[];
  github?: string;
  paper?: string;
};

export const projects: Project[] = [
  {
    title: "AI-Powered Resume-to-Job Matcher",
    description:
      "End-to-end ML web application that parses resumes and semantically ranks live job listings using Sentence-Transformer embeddings and cosine similarity search. Containerized with multi-stage Docker builds and deployed to Azure Container Apps with Infrastructure-as-Code (Bicep) for fully reproducible provisioning. CI/CD pipeline via GitHub Actions automates testing, builds, and redeployment on every commit. Instrumented for production observability with Azure Application Insights and OpenTelemetry.",
    techTags: [
      "FastAPI",
      "React",
      "Docker",
      "Azure",
      "Bicep IaC",
      "GitHub Actions",
      "Sentence-Transformers",
      "OpenTelemetry",
    ],
    github: "https://github.com/Ajsal-Shereef",
  },
  {
    title: "LLM Engineering",
    description:
      "Hands-on engineering of LLM-powered systems, covering RAG pipelines, tool-using agents, and safe deployment patterns from prototype to production.",
    techTags: ["LangChain", "RAG", "Agents", "Prompt Engineering"],
    github: "https://github.com/Ajsal-Shereef",
  },
  {
    title: "PRISM: Policy Reuse via Imagined Semantic Mappings",
    description:
      "A semantic policy reuse framework that leverages imagined mappings to enable zero-shot transfer across reinforcement learning tasks with different observation and action spaces.",
    techTags: ["Reinforcement Learning", "Policy Transfer", "Semantic Mapping"],
    github: "https://github.com/Ajsal-Shereef",
  },
  {
    title:
      "MAGIK: Mapping to Analogous Goals via Imagination-enabled Knowledge Transfer",
    description:
      "A zero-shot policy transfer method based on a semi-supervised VAE that imagines source-aligned observations to enable policy reuse in novel tasks without target-environment interaction.",
    techTags: ["Zero-shot Transfer", "VAE", "Imagination-based RL"],
    github: "https://github.com/Ajsal-Shereef/MAGIK",
    paper: "https://arxiv.org/abs/2506.01623",
  },
  {
    title: "Dynamic Policy Fusion for User Alignment Without Re-Interaction",
    description:
      "A framework for personalising a pre-trained reinforcement learning policy to align with a user's intent without re-interaction, using a theoretically grounded dynamic policy fusion approach.",
    techTags: ["Personalisation", "Policy Fusion", "Human-Agent Interaction"],
    github: "https://github.com/Ajsal-Shereef/Personalization",
    paper: "https://arxiv.org/abs/2409.20016",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Machine Learning Engineer",
    company: "Trenser Technology Solutions",
    period: "2020 – 2022",
    bullets: [
      "Led end-to-end development (PoC → production) of an Instax photo-frame digitization pipeline, partnering with an iOS engineer to ship it inside a mobile application now publicly available.",
      "Re-engineered frame detection — identifying and cropping Instax mini/SQ/wide frames against arbitrary backgrounds — by hardening a classical OpenCV/Hough-Transform baseline and introducing a hybrid fallback to object detection and semantic segmentation, lifting detection accuracy by 20 points (71% → 91%).",
      "Quantized and converted trained models to TensorFlow Lite for real-time, on-device inference on mobile hardware.",
      "Designed a glare-removal method using multi-angle image stitching (ORB feature matching), exploiting the fact that no single frame region is glare-affected across every capture angle to reconstruct a clean composite output.",
      "Analyzed, implemented, and benchmarked SOTA computer vision models (Yolact++, SoloV2, UNet) for medical image segmentation, evaluating performance and efficiency trade-offs.",
    ],
  },
  {
    role: "Junior Data Scientist",
    company: "Lotus Interworks",
    period: "2019 – 2020",
    bullets: [
      "Developed a mathematical model to evaluate call centre agent performance and generated simulation data with Python.",
      "Contributed to an intelligent marketplace algorithm to match user queries with service providers.",
    ],
  },
  {
    role: "Project Associate",
    company: "IIT Madras",
    period: "2018 – 2019",
    bullets: [
      "Contributed to the ESPN Cricinfo smart stats project by modelling wicket probability and optimising constraints using Python.",
      "Performed data analysis, statistical inference, and visualisation for an environmental monitoring project using R.",
    ],
  },
];

export type TeachingItem = {
  role: string;
  institution: string;
  description: string;
  category: "teaching" | "service" | "conference";
};

export const teaching: TeachingItem[] = [
  {
    role: "Graduate Research Teaching Fellow",
    institution: "Deakin University",
    description: "Conducted workshops and marked assessments.",
    category: "teaching",
  },
  {
    role: "Sessional Academic",
    institution: "Deakin University",
    description:
      "Assisted the lecturer and handled Q&A sessions for course units.",
    category: "teaching",
  },
  {
    role: "Casual Research Associate",
    institution: "Deakin University",
    description: "Contributed to a cyber security research project.",
    category: "service",
  },
  {
    role: "Maths Tutor",
    institution: "EzyMaths",
    description: "Private mathematics home tutoring for grade 9–12.",
    category: "teaching",
  },
  {
    role: "Technical Committee Member",
    institution: "HARL Workshop",
    description: "Peer reviewed papers submitted to the HARL workshop.",
    category: "service",
  },
  {
    role: "Reviewer",
    institution: "AAMAS & NeurIPS",
    description: "Reviewed papers submitted to AAMAS 2026 and NeurIPS 2026.",
    category: "service",
  },
];

export const conferences = [
  "International Conference on Human Agent Interaction, 2024, Swansea, UK",
  "Australasian Joint Conference on Artificial Intelligence, 2025, Canberra, Australia",
  "DAIRNet Defence AI Symposium, Canberra, Australia",
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  thesis?: string;
};

export const education: EducationItem[] = [
  {
    degree: "Ph.D. in Reinforcement Learning",
    institution: "Deakin University",
    period: "2022 – 2026",
    thesis: "Towards adapting Reinforcement Learning Agents.",
  },
  {
    degree: "BS-MS, Mathematics (Major) & Physics (Minor)",
    institution: "IISER Trivandrum",
    period: "2013 – 2018",
    thesis: "AKS primality testing and cryptography.",
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: "Published" | "Under Review" | "Submitted";
};

export const publications: Publication[] = [
  {
    title:
      "PRISM: Policy Reuse via Imagined Semantic Mappings",
    authors: "A. Shereef, T. G. Karimpanal, and S. Rana",
    venue: "NeurIPS 2026",
    year: 2026,
    status: "Submitted",
  },
  {
    title:
      "MAGIK: Mapping to analogous goals via imagination-enabled knowledge transfer",
    authors: "A. S. Palattuparambil, T. G. Karimpanal, and S. Rana",
    venue: "European Conference on Artificial Intelligence (ECAI)",
    year: 2025,
    status: "Published",
  },
  {
    title: "Personalisation via dynamic policy fusion",
    authors: "A. Shereef Palattuparambil, T. Karimpanal George, and S. Rana",
    venue:
      "12th International Conference on Human-Agent Interaction (HAI)",
    year: 2024,
    status: "Published",
  },
  {
    title:
      "Dynamic Policy Fusion for User Alignment Without Re-Interaction",
    authors: "A. Shereef, T. G. Karimpanal, and S. Rana",
    venue: "Journal of Ambient Intelligence and Humanized Computing",
    year: 2025,
    status: "Under Review",
  },
];

export type AwardItem = {
  title: string;
  institution: string;
  period: string;
};

export const awards: AwardItem[] = [
  {
    title: "DUPR Scholarship",
    institution: "Deakin University",
    period: "2022 – 2025",
  },
  {
    title: "INSPIRE Fellowship",
    institution: "Department of Science and Technology, India",
    period: "2013 – 2018",
  },
];
