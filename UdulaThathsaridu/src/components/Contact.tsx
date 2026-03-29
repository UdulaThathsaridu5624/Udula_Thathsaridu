import { Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__grid">
          {/* Left: Info */}
          <div className="contact__left">
            <span className="section-label">// get_in_touch</span>
            <h2 className="contact__heading">Let's build something great</h2>
            <p className="contact__sub">
              Whether you have a project in mind, a collaboration idea, or just want to chat
              about tech — my inbox is always open.
            </p>

            <div className="contact__socials">
              <a
                href="https://github.com/UdulaThathsaridu5624"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/udulathathsaridu"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:udula96@outlook.com"
                className="contact__social-link"
              >
                <Mail size={18} strokeWidth={1.5} />
                <span>Email Me</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact__right">
            <form
              className="contact__form"
              action="mailto:udula96@outlook.com"
              method="GET"
              encType="text/plain"
            >
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact__input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email" className="contact__label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact__input"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="message" className="contact__label">Message</label>
                <textarea
                  id="message"
                  name="body"
                  className="contact__input contact__textarea"
                  placeholder="What's on your mind?"
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="btn-primary contact__submit">
                Send Message <Send size={15} strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
