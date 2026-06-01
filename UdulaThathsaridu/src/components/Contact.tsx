import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">

        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="sec-title">
              Let's build something <em className="contact__accent">great.</em>
            </h2>
          </div>
          <span className="sec-index">05 — Contact</span>
        </div>

        <a href="mailto:udula96@outlook.com" className="contact__email reveal">
          udula96@outlook.com
        </a>

        <div className="contact__socials reveal">
          <a
            href="https://github.com/UdulaThathsaridu5624"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__pill"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/udula-thathsaridu-b16428254"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__pill"
          >
            LinkedIn
          </a>
          <a href="mailto:udula96@outlook.com" className="contact__pill">
            Email
          </a>
        </div>

      </div>
    </section>
  );
}
