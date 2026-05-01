import { Code2, GitBranch, Layers3 } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTelegram, FaXTwitter } from "react-icons/fa6";
import {
  SiExpress,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const navbarQuickLinks = [
  { label: "GitHub", href: "https://github.com/mikyyDev", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/michael-alula", icon: FaLinkedinIn },
  { label: "Telegram", href: "https://t.me/miky_144", icon: FaTelegram },
];

export const heroData = {
  name: "Michael Alula",
  tagline: "Full Stack Developer",
  eyebrow: "Personal Portfolio",
  description:
    "Information Science student at Addis Ababa University focused on AI, machine learning, and software development. I build practical systems that turn data into useful, real-world intelligence.",
  ctaLabel: "Explore My Projects",
  ctaHref: "#projects",
  cvLabel: "Download CV",
  cvHref: "/Miky-CV.pdf",
};

export const achievements = [
  {
    title: "2+ RAG Systems Built",
    detail: "Delivered practical AI assistants for Ethiopian knowledge and university support.",
  },

];

export const aboutData = {
  title: "About Me",
  initials: "MA",
  bio: "Hi, I am Michael Alula, an Information Science student and a junior full-stack developer based in Addis Ababa, Ethiopia. I enjoy building modern, user-friendly web applications and continuously improving my frontend and backend skills. I am especially interested in full-stack development, artificial intelligence, and emerging technologies. My current focus is advanced JavaScript, modern frameworks, and software engineering best practices. My goal is to become a skilled software engineer who builds impactful and scalable applications while continuously learning and adapting to new technologies.",
  cvNote:
    "Want to know more about what I’ve built and achieved?For a deeper look into my experience — including my projects, certifications, awards, and accomplishments — feel free to view my CV."

};

export const skillsSummary =
  "I am actively building full-stack and AI engineering skills through practical projects, from frontend interfaces to backend APIs and data systems.";

export const skills = [
  { name: "JavaScript", category: "Languages", icon: SiJavascript, level: "Core language for modern web applications" },
  { name: "TypeScript", category: "Languages", icon: SiTypescript, level: "Static typing for scalable and safer codebases" },
  { name: "Python", category: "Languages", icon: SiPython, level: "Used for backend services, AI workflows, and automation" },
  { name: "SQL", category: "Languages", icon: SiMysql, level: "Querying, modeling, and managing relational data" },

  { name: "React.js", category: "Frontend", icon: SiReact, level: "Building interactive, component-driven user interfaces" },
  { name: "Next.js", category: "Frontend", icon: Layers3, level: "Creating full-stack React apps with routing and SSR support" },
  { name: "Vite", category: "Frontend", icon: Layers3, level: "Fast frontend tooling for modern JavaScript projects" },
  { name: "Tailwind CSS", category: "Frontend", icon: Layers3, level: "Utility-first styling for rapid and consistent UI development" },
  { name: "HTML5", category: "Frontend", icon: Code2, level: "Semantic page structure and accessible content markup" },
  { name: "CSS3", category: "Frontend", icon: Code2, level: "Responsive layouts, animations, and modern visual styling" },
  { name: "Responsive Design", category: "Frontend", icon: Layers3, level: "Mobile-first interfaces that adapt across screen sizes" },

  { name: "FastAPI", category: "Backend", icon: SiExpress, level: "Building high-performance Python APIs with clean architecture" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, level: "Server-side JavaScript runtime for scalable backend systems" },
  { name: "JWT Auth", category: "Backend", icon: GitBranch, level: "Token-based authentication and session management" },
  { name: "bcrypt", category: "Backend", icon: GitBranch, level: "Secure password hashing and user credential protection" },
  { name: "SQLAlchemy", category: "Backend", icon: SiMysql, level: "ORM-based database integration and query abstraction" },

  { name: "PostgreSQL", category: "Databases", icon: SiMysql, level: "Relational database design with production-grade performance" },
  { name: "SQLite", category: "Databases", icon: SiMysql, level: "Lightweight embedded database for rapid development and testing" },
  { name: "MySQL", category: "Databases", icon: SiMysql, level: "Schema design, joins, indexing, and performance tuning" },

  { name: "Git", category: "Tools", icon: SiGithub, level: "Version control, branching strategies, and clean commit workflows" },
  { name: "GitHub", category: "Tools", icon: SiGithub, level: "Collaboration, pull requests, and repository management" },
  { name: "Vercel", category: "Tools", icon: Layers3, level: "Frontend deployment and preview environments" },
  { name: "Render", category: "Tools", icon: Layers3, level: "Cloud hosting for web services and backend deployment" },
  { name: "VS Code", category: "Tools", icon: Code2, level: "Productive development workflow with extensions and debugging" },

  { name: "LangChain", category: "AI / ML", icon: SiTensorflow, level: "Composing LLM-powered apps with tool and chain orchestration" },
  { name: "Groq API", category: "AI / ML", icon: SiTensorflow, level: "Low-latency inference integration for AI assistants" },
  { name: "Hugging Face", category: "AI / ML", icon: SiTensorflow, level: "Working with open models, embeddings, and NLP tooling" },
  { name: "RAG Pipelines", category: "AI / ML", icon: SiTensorflow, level: "Retrieval-augmented generation for grounded AI responses" },
];

export const projects = [
  {
    category: "Responsive Website",
    title: "Coffee Landing Page",
    description:
      "A beautiful, responsive landing page for a fictional coffee shop. Built with pure HTML, CSS, and a touch of JavaScript — no frameworks",
    problemSolved:
       "Small businesses often lack an attractive and responsive online presence. This project solves that by providing a clean, mobile-friendly landing page that effectively showcases products and improves user engagement.",
    stack: ["Html","Css"],
    preview: "/coffee.png",
    liveDemo: "https://mikyydev.github.io/coffee-landing-page/",
    github: "https://github.com/mikyyDev/coffee-landing-page.git",
  },
  {
    category: "Responsive Website",
    title: "EduTech Academy Landing Page",
    description:
      "A clean, modern, and fully responsive landing page for EduTech Academy — a fictional online education platform. and professional design built with pure HTML and CSS (no frameworks).",
    problemSolved:
      "This project solves that by providing a structured, responsive landing page that highlights courses, builds trust through testimonials, and encourages user enrollment",
    stack: ["HTML", "Css",],
    preview: "/Edutech.png",
    liveDemo: "https://mikyydev.github.io/EduTech-Acadamy/",
    github: "https://github.com/mikyyDev/EduTech-Acadamy.git",
  },

];

export const contactData = {
  title: "Ready to Collaborate",
  subtitle:
    "I'm currently available for freelance work and full-time opportunities. Whether you have a project in mind or just want to connect, feel free to reach out.",
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/mikyyDev", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/michael-alula", icon: FaLinkedinIn },
  { label: "Telegram", href: "https://t.me/miky_144", icon: FaTelegram },
  { label: "Twitter/X", href: "https://x.com/miky_144", icon: FaXTwitter },
];
