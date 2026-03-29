import { ExternalLink, ArrowRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import './Projects.css'

interface Project {
  title: string
  description: string
  language: string
  tags: string[]
  repo: string
  repoFrontend?: string
  live?: string
}

const projects: Project[] = [
  {
    title: 'SpringForge',
    description:
      'IntelliJ IDEA plugin automating CI/CD pipeline generation for Spring Boot projects — integrates with AWS Bedrock and Claude to produce Dockerfiles, Docker Compose files, and GitHub Actions workflows. Includes MCP Server integration and a PostgreSQL-backed audit service.',
    language: 'Kotlin',
    tags: ['Kotlin', 'IntelliJ SDK', 'AWS Bedrock', 'Claude AI', 'PostgreSQL'],
    repo: 'https://github.com/springforgeecosystem-prog/Spring-Forge',
    live: 'https://www.springforge.dev/',
  },
  {
    title: 'HireFlow',
    description:
      'End-to-end recruitment management system with applicant tracking, interview scheduling, and role pipelines. Java Spring Boot backend with a Vue 3 frontend — deployed live on Google Cloud Run.',
    language: 'Java',
    tags: ['Java', 'Spring Boot', 'Vue 3', 'REST API', 'Google Cloud'],
    repo: 'https://github.com/UdulaThathsaridu5624/HireFlow',
    repoFrontend: 'https://github.com/UdulaThathsaridu5624/HireFlow-Frontend',
    live: 'https://hireflow-frontend-d4p3jeyvfa-el.a.run.app',
  },
  {
    title: 'Food Delivery System',
    description:
      'Microservices-based food delivery platform for customers, restaurant owners, and delivery personnel — real-time order tracking, live map navigation, JWT auth, OTP validation, and centralised email/SMS notifications.',
    language: 'TypeScript',
    tags: ['Node.js', 'Express.js', 'Next.js', 'Microservices', 'Docker', 'JWT'],
    repo: 'https://github.com/UdulaThathsaridu5624?tab=repositories',
  },
  {
    title: 'YC Directory',
    description:
      'Y Combinator-inspired startup listing platform — users can explore, search, and filter startups. Full frontend interface, robust backend, and production deployment optimised for performance and scalability.',
    language: 'TypeScript',
    tags: ['Next.js 15', 'React', 'Tailwind CSS', 'Sanity.io', 'Vercel'],
    repo: 'https://github.com/UdulaThathsaridu5624?tab=repositories',
  },
  {
    title: 'LogicLens',
    description:
      'Advanced static code analyser with an admin panel for configuring rules, tracking complexity and maintainability metrics, and ML-powered custom rule recommendations — built on the MERN stack with Azure.',
    language: 'JavaScript',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Machine Learning', 'Azure'],
    repo: 'https://github.com/UdulaThathsaridu5624?tab=repositories',
  },
  {
    title: 'EVChargingBookingApp',
    description:
      'Station Operator module for an Android EV Charging Booking app — role-based auth, ZXing QR code scanning to validate bookings in real time, and a session completion workflow with ASP.NET Core backend.',
    language: 'Kotlin',
    tags: ['Kotlin', 'Jetpack Compose', 'ZXing', 'ASP.NET Core', 'MongoDB'],
    repo: 'https://github.com/UdulaThathsaridu5624/EVChargingBookingApp',
  },
]

const languageColors: Record<string, string> = {
  Kotlin: '#7f52ff',
  Java: '#f89820',
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Swift: '#f05138',
}

export default function Projects() {
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

        <div className="projects__grid">
          {projects.map(project => (
            <a
              key={project.title}
              href={project.live ?? project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              aria-label={`Open ${project.title}`}
            >
              <div className="project-card__top">
                <span
                  className="project-card__lang"
                  style={{ '--lang-color': languageColors[project.language] } as React.CSSProperties}
                >
                  <span className="project-card__lang-dot" />
                  {project.language}
                </span>
                <div className="project-card__links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__icon-link"
                      aria-label="Live demo"
                      onClick={e => e.stopPropagation()}
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
                      onClick={e => e.stopPropagation()}
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
                    aria-label={project.repoFrontend ? 'Backend repository' : 'GitHub repository'}
                    onClick={e => e.stopPropagation()}
                  >
                    <GithubIcon size={13} />
                    {project.repoFrontend && <span>BE</span>}
                  </a>
                </div>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
