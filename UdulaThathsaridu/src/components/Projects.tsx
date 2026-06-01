import { useState } from "react";
import "./Projects.css";

interface Project {
  title: string;
  description: string;
  types: string[];
  typeLabel: string;
  tags: string[];
  live?: string;
  repo: string;
  repoFrontend?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "SpringForge",
    description:
      "IntelliJ IDEA plugin automating CI/CD pipeline generation for Spring Boot projects. Integrates with AWS Bedrock and Claude to produce Dockerfiles, Docker Compose files, and GitHub Actions workflows. Includes MCP Server integration and a PostgreSQL-backed audit service.",
    types: ["plugin"],
    typeLabel: "Plugin · Featured",
    tags: ["Kotlin", "IntelliJ SDK", "AWS Bedrock", "Claude AI", "PostgreSQL"],
    live: "https://www.springforge.dev/",
    repo: "https://github.com/springforgeecosystem-prog/Spring-Forge",
    featured: true,
  },
  {
    title: "HireFlow",
    description:
      "End-to-end recruitment management system with applicant tracking, interview scheduling, and role pipelines. Java Spring Boot backend with a Vue 3 frontend deployed live on Google Cloud Run.",
    types: ["web"],
    typeLabel: "Web App",
    tags: [
      "Java",
      "Spring Boot",
      "Next.js",
      "Vue 3",
      "REST API",
      "Google Cloud",
    ],
    live: "https://hireflow-frontend-d4p3jeyvfa-el.a.run.app",
    repo: "https://github.com/UdulaThathsaridu5624/HireFlow",
    repoFrontend: "https://github.com/UdulaThathsaridu5624/HireFlow-Frontend",
  },
  {
    title: "Food Delivery System",
    description:
      "Microservices-based food delivery platform for customers, restaurant owners, and delivery personnel. Real-time order tracking, live map navigation, JWT auth, OTP validation, and centralised email/SMS notifications.",
    types: ["web"],
    typeLabel: "Web App · Microservices",
    tags: [
      "Node.js",
      "Express.js",
      "Next.js",
      "Microservices",
      "Docker",
      "JWT",
    ],
    repo: "https://github.com/UdulaThathsaridu5624/food-delivery-system-backend.git",
    repoFrontend: "https://github.com/UdulaThathsaridu5624/food-delivery-system-frontend.git",
  },
  {
    title: "YC Directory",
    description:
      "Y Combinator-inspired startup listing platform. Users can explore, search, and filter startups. Full frontend interface, robust backend, and production deployment optimised for performance and scalability.",
    types: ["web"],
    typeLabel: "Web App",
    tags: ["Next.js 15", "React", "Tailwind CSS", "Sanity.io", "Vercel"],
    repo: "https://github.com/UdulaThathsaridu5624/Startup-App.git",
  },
  {
    title: "LogicLens",
    description:
      "Advanced static code analyser with an admin panel for configuring rules, tracking complexity and maintainability metrics, and ML-powered custom rule recommendations. Built on the MERN stack with Azure.",
    types: ["web"],
    typeLabel: "Web App · ML",
    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Machine Learning",
      "Azure",
    ],
    repo: "https://github.com/UdulaThathsaridu5624/code-analyzer.git",
  },
  {
    title: "EV Charging Booking",
    description:
      "Station Operator module for an Android EV charging booking app — role-based auth, ZXing QR scanning to validate bookings in real time, and a session-completion workflow with an ASP.NET Core backend, plus a companion web app for admin and user management.",
    types: ["mobile", "web"],
    typeLabel: "Mobile + Web",
    tags: ["Kotlin", "Jetpack Compose", "ZXing", "ASP.NET Core", "MongoDB"],
    repo: "https://github.com/UdulaThathsaridu5624/EVChargingBookingApp",
    repoFrontend:
      "https://github.com/UdulaThathsaridu5624/EVChargingBookingApp-WebApp",
  },
  {
    title: "GeoVault",
    description:
      "World countries explorer built with React and Vite. Browse borders, population, and languages with search, region and language filtering, a favourites system with user authentication, and a fully responsive design.",
    types: ["web"],
    typeLabel: "Web App",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "REST Countries API",
      "React Router",
    ],
    live: "https://geo-vault.vercel.app",
    repo: "https://github.com/UdulaThathsaridu5624/GeoVault",
  },
];

type Filter = "all" | "web" | "mobile" | "plugin";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Web App", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Plugin", value: "plugin" },
];

const count = (f: Filter) =>
  f === "all"
    ? projects.length
    : projects.filter((p) => p.types.includes(f)).length;

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");

  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.types.includes(active));

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="sec-title">Things I've built</h2>
          </div>
          <div className="projects__sec-right">
            <span className="sec-index">03 — Work</span>
            <a
              href="https://github.com/UdulaThathsaridu5624?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="projects__all-link"
            >
              All repositories ↗
            </a>
          </div>
        </div>

        <div className="projects__filters reveal">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`projects__tab${active === f.value ? " active" : ""}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
              <sup>{count(f.value)}</sup>
            </button>
          ))}
        </div>

        <div className="projects__list">
          {visible.map((p, i) => (
            <div
              key={p.title}
              className={`project-row${p.featured ? " is-featured" : ""}`}
              data-type={p.types.join(" ")}
            >
              {/* Cover link — whole row clickable */}
              <a
                href={p.live ?? p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-row__cover"
                aria-label={p.live ? `Visit ${p.title} live site` : `View ${p.title} on GitHub`}
              />

              <span className="project-row__num">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="project-row__content">
                <div className="project-row__title-line">
                  <h3 className="project-row__title">{p.title}</h3>
                  {p.live && <span className="project-row__live">Live</span>}
                  <span className="project-row__type">{p.typeLabel}</span>
                </div>
                <p className="project-row__desc">{p.description}</p>
                <p className="project-row__tags">{p.tags.join(" / ")}</p>
              </div>

              <div className="project-row__links">
                <span className="project-row__arrow">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="18"
                    height="18"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </span>

                {/* FE / BE split repos */}
                {p.repoFrontend && (
                  <div className="project-row__sublinks">
                    <a
                      href={p.repoFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-row__sublink"
                    >
                      FE
                    </a>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-row__sublink"
                    >
                      BE
                    </a>
                  </div>
                )}

                {/* Has live site but no FE/BE split → show GitHub repo pill separately */}
                {p.live && !p.repoFrontend && (
                  <div className="project-row__sublinks">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-row__sublink project-row__sublink--gh"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="13"
                        height="13"
                        aria-hidden="true"
                      >
                        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.85 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.93.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                      </svg>
                      Repo
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
