import rootcodeLogo from "../assets/rootcodelabs_logo.jpg";
import "./Experience.css";

interface Job {
  company: string;
  companyUrl: string;
  logo: string;
  role: string;
  period: string;
  type: string;
  description: string;
  tech: string[];
}

const jobs: Job[] = [
  {
    company: "Rootcode",
    companyUrl: "https://rootcode.io/",
    logo: rootcodeLogo,
    role: "Intern Software Engineer",
    period: "March 2025 – March 2026",
    type: "B2B SaaS · React Native",
    description:
      "Built and shipped production mobile features across e-signature, project management, leave, and authentication modules for a live B2B SaaS platform.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "GraphQL",
      "TanStack Query",
      "Zustand",
      "NestJS",
      "Spring Boot",
      "Next.js",
      "CloudFront",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <span className="section-label">// work_experience</span>
        <h2 className="experience__heading">Work Experience</h2>

        <div className="experience__list">
          {jobs.map((job) => (
            <div key={job.company} className="exp-card">
              <div className="exp-card__header">
                <div className="exp-card__meta">
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-card__company-link"
                  >
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="exp-card__logo"
                    />
                    <h3 className="exp-card__company">{job.company}</h3>
                  </a>
                  <span className="exp-card__type">{job.type}</span>
                </div>
                <div className="exp-card__right">
                  <span className="exp-card__role">{job.role}</span>
                  <span className="exp-card__period">{job.period}</span>
                </div>
              </div>

              <p className="exp-card__desc">{job.description}</p>

              <div className="exp-card__tech">
                {job.tech.map((t) => (
                  <span key={t} className="exp-card__chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
