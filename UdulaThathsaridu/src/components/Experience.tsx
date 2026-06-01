import rootcodeLogo from "../assets/rootcodelabs_logo.jpg";
import "./Experience.css";

const tech = [
  "React Native", "Expo", "TypeScript", "GraphQL",
  "TanStack Query", "Zustand", "NestJS", "Spring Boot", "Next.js", "CloudFront",
];

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">Experience</span>
            <h2 className="sec-title">Where I've shipped</h2>
          </div>
          <span className="sec-index">02 — Work</span>
        </div>

        <div className="exp__row reveal">
          <span className="exp__date">Mar 2025 – Mar 2026</span>

          <div className="exp__body">
            <a
              href="https://rootcode.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="exp__company-link"
            >
              <img src={rootcodeLogo} alt="Rootcode logo" className="exp__logo" />
              <span className="exp__company">Rootcode</span>
            </a>

            <div className="exp__role-line">
              <span className="exp__role">Intern Software Engineer</span>
              <span className="exp__type">B2B SaaS · React Native</span>
            </div>

            <p className="exp__desc">
              Built and shipped production mobile and web features across
              e-signature, project management, leave, and authentication modules
              for a live B2B SaaS platform.
            </p>

            <div className="exp__chips">
              {tech.map(t => (
                <span key={t} className="exp__chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
