import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Arvin Mark Atienza — Senior Fullstack Developer",
  author: "Arvin Mark Atienza",
  description:
    "Senior Fullstack Developer experienced in building and scaling fullstack applications across multiple domains including infrastructure, backend systems, and frontend design.",
  lang: "en",
  siteLogo: "/me-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [{ text: "Github", href: "https://github.com/a-3140" }],
  socialImage: "/zen-og.png",
  canonicalURL: "https://a3140.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Arvin Mark Atienza",
    specialty: "Senior Fullstack Developer",
    summary:
      "Fullstack developer with a passion for solving real-world problems through well-engineered software. From infrastructure to design systems, I bring scalable, clean, and testable solutions to production.",
    email: "atienza.new@gmail.com",
  },
  experience: [
    {
      company: "Prostrive (Netherlands)",
      position: "Senior Software Developer",
      startDate: "April 2023",
      endDate: "Present",
      summary: [
        "Led a small team for a real-time online gaming application.",
        "Designed an audit-friendly transactional system for in-game purchases.",
        "Built codebases from scratch, including style guides, CI/CD, and AWS deployments.",
        "Reduced GCP infrastructure costs via optimized autoscaling and storage.",
        "Set up observability using Prometheus and Grafana.",
        "Developed async multi-stage user input processing systems (NDA).",
      ],
    },
    {
      company: "Freelance",
      position: "Fullstack Developer (Contract)",
      startDate: "August 2022",
      endDate: "April 2023",
      summary: [
        "Built a full-stack e-commerce platform.",
        "Created a reusable UI library (Vue 3, Storybook, TailwindCSS).",
        "Customized Django-based headless commerce backends.",
        "Implemented CI/CD for testing and deployment.",
      ],
    },
    {
      company: "Trevipay (Australia)",
      position: "Fullstack Developer",
      startDate: "March 2021",
      endDate: "August 2022",
      summary: [
        "Developed features using Vue2, Quasar, ExpressJS, and Postgres.",
        "Wrote unit and E2E tests (Jest, Cypress).",
        "Integrated third-party analytics and improved i18n support.",
        "Worked on a microservice in NestJS alongside legacy systems.",
        "Improved CI/CD pipelines for staging environments.",
      ],
    },
    {
      company: "ZenRooms",
      position: "Python Developer",
      startDate: "March 2020",
      endDate: "March 2021",
      summary: [
        "Developed finance system features and background automation using Django.",
        "Handled complex business logic and calculations for internal finance tools.",
      ],
    },
    {
      company: "RingCentral",
      position: "Fullstack Developer",
      startDate: "June 2019",
      endDate: "March 2020",
      summary: [
        "Built an HR onboarding system using Django and React.",
        "Deployed applications on AWS EC2 and automated tasks using SharePoint and PowerApps.",
      ],
    },
    {
      company: "Stylist in Pocket",
      position: "Data Specialist",
      startDate: "June 2019",
      endDate: "March 2020",
      summary: [
        "Scraped websites using Python for lead generation.",
        "Cleaned and analyzed data using Pandas.",
        "Built small automation tools using PyQT.",
      ],
    },
  ],

  projects: [
    {
      name: "Quiz App (NextJS)",
      summary:
        "Simple quiz application connected to a free API with a database of questions; gives you a score at the end, supports repeat play and multiplayer features.",
      linkPreview: "/works",
      linkSource: "https://quiz-app-a-3140.vercel.app",
      image: "/quiz.png",
    },
    {
      name: "UI Component Library Starter — Vue3 + TypeScript + Vite + TailwindCSS",
      summary:
        "Starter component library using Storybook as a self‑documenting starter for large projects.",
      linkPreview: "/works",
      linkSource: "https://foam-coffee.vercel.app",
      image: "/foam.png",
    },
  ],
  about: {
    description: `
Hi, I'm Arvin Mark Atienza — a passionate fullstack developer with extensive experience in building robust applications from the ground up. 

With a technical stack ranging from JavaScript, TypeScript, and Python to modern tools like Docker, Kubernetes, and Terraform, I bring cross-functional skills across DevOps, front-end design systems, and scalable backend APIs.

I thrive in environments where technology meets real-world complexity — and where clean defensive programming matters.

Let's build something great!
    `,
    image: "/me-big.png",
  },
};

// #5755ff
