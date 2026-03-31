export const hero = {
  name: "Ajsal Shereef Palattuparambil",
  tagline:
    "Ph.D. Candidate in Artificial Intelligence & Machine Learning Engineer",
  location: "Geelong, VIC, Australia",
  github: "https://github.com/Ajsal-Shereef",
  linkedin: "https://www.linkedin.com/in/ajsal-2ab698a7/",
  email: "ajsalshereef123@gmail.com",
  phone: "+61 415 140 136",
};

export const about =
  "I bridge deep theoretical expertise in Reinforcement Learning with practical applications in Generative AI and Computer Vision. I possess a strong command of the full AI lifecycle—from building RAG pipelines and Autonomous Agents to fine-tuning LLMs using QLORA. My work is underpinned by a rigorous mathematical foundation in probability, statistics, linear algebra, and optimization.";

export const skills = {
  coreLanguages: ["Python", "C++", "R", "SQL"],
  generativeAI: {
    title: "Generative AI & LLMs",
    items: [
      "RAG",
      "Agents & Tool Use",
      "QLORA Fine-tuning",
      "Prompt Engineering",
      "Vector Embeddings",
    ],
    frameworks: ["LangChain", "Hugging Face", "Gradio"],
  },
  computerVision: {
    title: "Computer Vision & Deep Learning",
    items: [
      "Object Detection",
      "Segmentation (Yolact++, SoloV2, UNet)",
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
  deployment: {
    title: "Deployment",
    items: [
      "On-device Deployment (Edge AI)",
      "Quantization",
      "Model Performance Benchmarking",
    ],
  },
  toolsFoundations: {
    title: "Tools & Foundations",
    items: ["Git", "LaTeX", "Linear Algebra", "Probability & Statistics"],
  },
};

export type Project = {
  title: string;
  description: string;
  github?: string;
  paper?: string;
};

export const projects: Project[] = [
  {
    title: "LLM Engineering",
    description:
      "Hands-on engineering of LLM-powered systems, covering RAG pipelines, tool-using agents, and safe deployment patterns from prototype to production.",
    github: "https://github.com/Ajsal-Shereef",
  },
  {
    title: "ASPECT: Analogical Semantic Policy Execution via Language Conditioned Transfer",
    description:
      "A language-conditioned transfer framework that uses analogical semantics to execute policies in new tasks, extending ideas in knowledge transfer for RL with natural-language grounding.",
    github: "https://github.com/Ajsal-Shereef/LG-MAGIK",
  },
  {
    title: "Dynamic Policy Fusion for User Alignment Without Re-Interaction",
    description:
      "A framework for personalising a pre-trained reinforcement learning policy to align with a user’s intent without re-interaction, using a theoretically grounded dynamic policy fusion approach.",
    github: "https://github.com/Ajsal-Shereef/Personalization",
    paper: "https://arxiv.org/abs/2409.20016",
  },
  {
    title: "MAGIK: Mapping to Analogous Goals via Imagination-enabled Knowledge Transfer",
    description:
      "A zero-shot policy transfer method based on a semi-supervised VAE that imagines source-aligned observations to enable policy reuse in novel tasks without target-environment interaction.",
    github: "https://github.com/Ajsal-Shereef/MAGIK",
    paper: "https://arxiv.org/abs/2506.01623",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Machine Learning Engineer",
    company: "Trenser Technology Solutions",
    period: "2020 – 2022",
    description:
      "Engineered and deployed a real-time glare correction algorithm onto resource-constrained edge devices. Implemented and benchmarked SOTA computer vision models for medical image segmentation.",
  },
  {
    role: "Junior Data Scientist",
    company: "Lotus Interworks",
    period: "2019 – 2020",
    description:
      "Developed mathematical models to evaluate call centre agent performance and contributed to an intelligent marketplace matching algorithm.",
  },
  {
    role: "Project Associate",
    company: "IIT Madras",
    period: "2018 – 2019",
    description:
      "Modelled wicket probability for ESPN Cricinfo's smart stats project. Performed data analysis and statistical inference for environmental monitoring.",
  },
];

export type TeachingItem = {
  role: string;
  institution: string;
  description: string;
};

export const teaching: TeachingItem[] = [
  {
    role: "Graduate Research Teaching Fellow",
    institution: "Deakin University",
    description: "Conducted workshop sessions and marked assessments.",
  },
  {
    role: "Sessional Academic",
    institution: "Deakin University",
    description: "Assisted the lecturer and handled QA sessions for course units.",
  },
  {
    role: "Casual Research Assistant",
    institution: "Deakin University",
    description:
      "Managed robotics lab equipment and demonstrated research prototypes to visiting school students.",
  },
  {
    role: "Maths Tutor",
    institution: "EzyMaths",
    description: "Private mathematics home tutoring for grade 9–12.",
  },
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

export const publications: string[] = [
  "MAGIK: Mapping to analogous goals via imagination-enabled knowledge transfer (ECAI 2025)",
  "Personalisation via dynamic policy fusion (Intl. Conf. on Human-Agent Interaction 2024)",
  "ASPECT: Analogical Semantic Policy Execution via Language Conditioned Transfer (ICML 2026 - Submitted)",
  "Dynamic Policy Fusion for User Alignment Without Re-Interaction (Journal of Ambient Intelligence - Under Review)",
];
