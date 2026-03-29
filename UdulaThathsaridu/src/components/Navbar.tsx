import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import profilePhoto from '../assets/UdulaThathsaridu.jpeg'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          <img src={profilePhoto} alt="Udula Thathsaridu" className="navbar__logo-img" />
        </a>

        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a
            href="https://github.com/UdulaThathsaridu5624"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__github"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/udula-thathsaridu-b16428254"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__linkedin"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a href="#contact" className="btn-ghost navbar__hire">
            Contact Me
          </a>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
            Contact Me
          </a>
        </div>
      )}
    </nav>
  )
}
