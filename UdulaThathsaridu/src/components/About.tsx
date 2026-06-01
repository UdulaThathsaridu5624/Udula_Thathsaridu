import "./About.css";

const interests = ["Learning new technologies", "Watching movies", "Playing games"];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">

        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">About</span>
            <h2 className="sec-title">Engineer at heart,<br />builder by habit</h2>
          </div>
          <span className="sec-index">01 — Profile</span>
        </div>

        <div className="about__grid">

          {/* Left: education + stats + chips */}
          <div className="about__side reveal">
            <div className="about__block-label">Education</div>
            <div className="about__edu-list">
              <div className="about__edu-item">
                <span className="about__edu-degree">B.Sc. (Hons) IT — Software Engineering</span>
                <span className="about__edu-meta">SLIIT, Malabe · 2022 – 2026</span>
              </div>
              <div className="about__edu-item">
                <span className="about__edu-degree">G.C.E. Advanced Level</span>
                <span className="about__edu-meta">Badulla Central College · 2019 – 2021</span>
              </div>
            </div>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-num">1<span className="about__stat-suffix">yr</span></span>
                <span className="about__stat-label">Production experience</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">10<span className="about__stat-suffix">+</span></span>
                <span className="about__stat-label">Tech stacks</span>
              </div>
            </div>

            <div className="about__off">
              <span className="about__off-heading eyebrow">Off the clock</span>
              <div className="about__chips">
                {interests.map(i => (
                  <span key={i} className="about__chip">{i}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: pull-quote bio */}
          <div className="about__main reveal">
            <p className="about__pull">
              I'm a software engineer who thrives on turning{" "}
              <em className="about__accent">complex</em>{" "}
              problems into clean, scalable solutions.
            </p>
            <p className="about__bio">
              Whether it's building mobile apps, web platforms, or backend systems,
              I focus on writing code that ships and makes an impact. Always curious,
              always learning. I believe the best way to grow is to build, break,
              and build again.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
