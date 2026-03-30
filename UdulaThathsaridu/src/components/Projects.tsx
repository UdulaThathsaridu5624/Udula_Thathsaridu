import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { useState } from "react";
import "./Projects.css";

type ProjectType = "Web App" | "Mobile App" | "Plugin";

interface Project {
  title: string;
  description: string;
  type: ProjectType | ProjectType[];
  tags: string[];
  repo: string;
  repoFrontend?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "SpringForge",
    description:
      "IntelliJ IDEA plugin automating CI/CD pipeline generation for Spring Boot projects. Integrates with AWS Bedrock and Claude to produce Dockerfiles, Docker Compose files, and GitHub Actions workflows. Includes MCP Server integration and a PostgreSQL-backed audit service.",
    type: "Plugin",
    tags: ["Kotlin", "IntelliJ SDK", "AWS Bedrock", "Claude AI", "PostgreSQL"],
    repo: "https://github.com/springforgeecosystem-prog/Spring-Forge",
    live: "https://www.springforge.dev/",
  },
  {
    title: "HireFlow",
    description:
      "End-to-end recruitment management system with applicant tracking, interview scheduling, and role pipelines. Java Spring Boot backend with a Vue 3 frontend deployed live on Google Cloud Run.",
    type: "Web App",
    tags: [
      "Java",
      "Spring Boot",
      "Next.js",
      "Vue 3",
      "REST API",
      "Google Cloud",
    ],
    repo: "https://github.com/UdulaThathsaridu5624/HireFlow",
    repoFrontend: "https://github.com/UdulaThathsaridu5624/HireFlow-Frontend",
    live: "https://hireflow-frontend-d4p3jeyvfa-el.a.run.app",
  },
  {
    title: "Food Delivery System",
    description:
      "Microservices-based food delivery platform for customers, restaurant owners, and delivery personnel. Real-time order tracking, live map navigation, JWT auth, OTP validation, and centralised email/SMS notifications.",
    type: "Web App",
    tags: [
      "Node.js",
      "Express.js",
      "Next.js",
      "Microservices",
      "Docker",
      "JWT",
    ],
    repo: "https://github.com/UdulaThathsaridu5624?tab=repositories",
  },
  {
    title: "YC Directory",
    description:
      "Y Combinator-inspired startup listing platform. Users can explore, search, and filter startups. Full frontend interface, robust backend, and production deployment optimised for performance and scalability.",
    type: "Web App",
    tags: ["Next.js 15", "React", "Tailwind CSS", "Sanity.io", "Vercel"],
    repo: "https://github.com/UdulaThathsaridu5624?tab=repositories",
  },
  {
    title: "LogicLens",
    description:
      "Advanced static code analyser with an admin panel for configuring rules, tracking complexity and maintainability metrics, and ML-powered custom rule recommendations. Built on the MERN stack with Azure.",
    type: "Web App",
    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Machine Learning",
      "Azure",
    ],
    repo: "https://github.com/UdulaThathsaridu5624?tab=repositories",
  },
  {
    title: "EVChargingBookingApp",
    description:
      "Station Operator module for an Android EV Charging Booking app. Role-based auth, ZXing QR code scanning to validate bookings in real time, and a session completion workflow with ASP.NET Core backend. Includes a companion web app for admin and user management.",
    type: ["Mobile App", "Web App"],
    tags: ["Kotlin", "Jetpack Compose", "ZXing", "ASP.NET Core", "MongoDB"],
    repo: "https://github.com/UdulaThathsaridu5624/EVChargingBookingApp",
    repoFrontend:
      "https://github.com/UdulaThathsaridu5624/EVChargingBookingApp-WebApp",
  },
  {
    title: "GeoVault",
    description:
      "World countries explorer built with React and Vite. Browse detailed country info including borders, population, and languages. Features search, region and language filtering, a favourites system with user authentication, and a fully responsive design.",
    type: "Web App",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "REST Countries API",
      "React Router",
    ],
    repo: "https://github.com/UdulaThathsaridu5624/GeoVault",
    live: "https://geo-vault.vercel.app",
  },
];

const typeColors: Record<ProjectType, string> = {
  "Web App": "#3b82f6",
  "Mobile App": "#10b981",
  Plugin: "#a855f7",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "All">("All");

  const hasType = (p: Project, t: ProjectType) =>
    Array.isArray(p.type) ? p.type.includes(t) : p.type === t;

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => hasType(p, activeFilter));

  const projectTypes: (ProjectType | "All")[] = [
    "All",
    "Web App",
    "Mobile App",
    "Plugin",
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <div>
            <span className="section-label">// featured_work</span>
            <h2 className="projects__heading">Selected Projects</h2>
          </div>
          <a
            href="https://github.com/UdulaThathsaridu5624?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tertiary"
          >
            View All on GitHub <ArrowRight size={15} strokeWidth={2} />
          </a>
        </div>

        <div className="projects__filters">
          {projectTypes.map((type) => (
            <button
              key={type}
              className={`projects__filter-btn ${activeFilter === type ? "active" : ""}`}
              onClick={() => setActiveFilter(type)}
            >
              {type}
              {type !== "All" && (
                <span className="projects__filter-count">
                  {projects.filter((p) => hasType(p, type)).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <a
              key={project.title}
              href={project.live ?? project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              aria-label={`Open ${project.title}`}
            >
              <div className="project-card__top">
                <div className="project-card__types">
                  {(Array.isArray(project.type) ? project.type : [project.type]).map((t) => (
                    <span
                      key={t}
                      className="project-card__type"
                      style={{ "--type-color": typeColors[t] } as React.CSSProperties}
                    >
                      <span className="project-card__type-dot" />
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__icon-link"
                      aria-label="Live demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={15} strokeWidth={1.5} />
                    </a>
                  )}
                  {project.repoFrontend && (
                    <a
                      href={project.repoFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__icon-link project-card__icon-link--label"
                      aria-label="Frontend repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon size={13} />
                      <span>FE</span>
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__icon-link project-card__icon-link--label"
                    aria-label={
                      project.repoFrontend
                        ? "Backend repository"
                        : "GitHub repository"
                    }
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon size={13} />
                    {project.repoFrontend && <span>BE</span>}
                  </a>
                </div>
              </div>

              <h3 className="project-card__title">
                {project.title}
                {project.live && (
                  <span className="project-card__live-badge">Live</span>
                )}
              </h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
