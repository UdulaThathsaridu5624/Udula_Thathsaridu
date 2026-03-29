import { Rocket, Users } from "lucide-react";
import "./About.css";

const stats = [
  {
    icon: <Rocket size={20} strokeWidth={1.5} />,
    value: "1yr",
    label: "Production Exp.",
  },
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    value: "10+",
    label: "Tech Stacks",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <span className="section-label">// about_me</span>
            <h2 className="about__heading">
              Building software that{" "}
              <span className="about__heading-accent">matters</span>
            </h2>
            <div className="about__edu-block">
              <div className="about__edu">
                <span className="about__edu-label">Degree</span>
                <span className="about__edu-value">
                  B.Sc. (Hons) in IT Specialising in Software Engineering
                </span>
                <span className="about__edu-meta">
                  SLIIT, Malabe · 2022 – 2026
                </span>
              </div>
              <div className="about__edu">
                <span className="about__edu-label">A/Levels</span>
                <span className="about__edu-value">G.C.E. Advanced Level</span>
                <span className="about__edu-meta">
                  Badulla Central College · 2019 – 2021
                </span>
              </div>
            </div>
          </div>

          <div className="about__right">
            <div className="about__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about__stat-card">
                  <div className="about__stat-icon">{stat.icon}</div>
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
