import profilePhoto from "../assets/UdulaThathsaridu.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="hero__grid container">
        {/* Left column */}
        <div className="hero__left">
          <span className="eyebrow reveal">Software Engineer · Full-Stack</span>

          <h1 className="hero__name reveal">
            <span className="hero__line">Udula</span>
            <em className="hero__line hero__surname">Thathsaridu</em>
          </h1>

          <div className="hero__role reveal">
            <span className="hero__dot" />
            Software Engineer · Full-Stack
          </div>

          <p className="hero__bio reveal">
            I build mobile and web products that actually <strong>ship,</strong>{" "}
            taking them from first commit to production. I am a final-year
            software engineering student at SLIIT, fluent in{" "}
            <strong>React Native, TypeScript,</strong> and whatever backend fits
            the job.
          </p>

          <div className="hero__actions reveal">
            <a href="#projects" className="btn btn-fill">
              View selected work
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="16"
                height="16"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="https://github.com/UdulaThathsaridu5624"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.85 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.93.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Right column */}
        <aside className="hero__right reveal">
          <figure className="portrait">
            <span className="portrait__tick pt-tl" />
            <span className="portrait__tick pt-tr" />
            <span className="portrait__tick pt-bl" />
            <span className="portrait__tick pt-br" />
            <img src={profilePhoto} alt="Udula Thathsaridu" />
          </figure>

          <div className="hero__facts">
            <div className="hero__fact">
              <span className="hero__fact-label">Currently</span>
              <span className="hero__fact-value">Open to new roles</span>
            </div>
            <div className="hero__fact">
              <span className="hero__fact-label">Focus</span>
              <span className="hero__fact-value">Full-Stack &amp; Mobile</span>
            </div>
            <div className="hero__fact">
              <span className="hero__fact-label">Education</span>
              <span className="hero__fact-value">SLIIT, 2022–2026</span>
            </div>
            <div className="hero__fact">
              <span className="hero__fact-label">Experience</span>
              <span className="hero__fact-value">1 yr production</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
