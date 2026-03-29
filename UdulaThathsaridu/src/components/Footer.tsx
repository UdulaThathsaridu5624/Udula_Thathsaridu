import { GithubIcon } from './BrandIcons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__copy">
          © 2026 <span className="footer__name">Udula Thathsaridu</span>
        </span>
        <a
          href="https://github.com/UdulaThathsaridu5624"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__github"
          aria-label="GitHub"
        >
          <GithubIcon size={16} />
          <span>UdulaThathsaridu5624</span>
        </a>
      </div>
    </footer>
  )
}
