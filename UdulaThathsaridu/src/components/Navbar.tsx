import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { label: 'About',      href: '#about',      sectionId: 'about'      },
  { label: 'Experience', href: '#experience', sectionId: 'experience' },
  { label: 'Work',       href: '#projects',   sectionId: 'projects'   },
  { label: 'Stack',      href: '#skills',     sectionId: 'skills'     },
  { label: 'Contact',    href: '#contact',    sectionId: 'contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeId, setActiveId]     = useState<string>('')
  const [theme, setTheme]           = useState<'ink' | 'paper'>(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('portfolio_theme') || '{}')
      return stored.theme === 'paper' ? 'paper' : 'ink'
    } catch {
      return 'ink'
    }
  })

  useEffect(() => {
    const onScroll = () => setScrolled(globalThis.scrollY > 40)
    globalThis.addEventListener('scroll', onScroll)
    return () => globalThis.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const getSections = () =>
      navLinks
        .map(l => document.getElementById(l.sectionId))
        .filter(Boolean) as HTMLElement[]

    const onScroll = () => {
      const triggerY = globalThis.scrollY + globalThis.innerHeight * 0.25
      const sections = getSections().sort((a, b) => a.offsetTop - b.offsetTop)
      let current = ''
      for (const s of sections) {
        if (s.offsetTop <= triggerY) current = s.id
      }
      setActiveId(current)
    }

    globalThis.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => globalThis.removeEventListener('scroll', onScroll)
  }, [])

  function toggleTheme() {
    const next = theme === 'paper' ? 'ink' : 'paper'
    setTheme(next)
    if (next === 'ink') {
      delete document.documentElement.dataset.theme
    } else {
      document.documentElement.dataset.theme = next
    }
    try {
      localStorage.setItem('portfolio_theme', JSON.stringify({ theme: next }))
    } catch { /* storage unavailable */ }
  }

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#hero" className="nav__brand">
          Udula<span className="nav__dot">.</span>Thathsaridu
        </a>

        <ul className="nav__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav__link${activeId === link.sectionId ? ' active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <button
            className="nav__theme"
            onClick={toggleTheme}
            aria-label={theme === 'paper' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            <Sun  size={16} className="i-sun"  strokeWidth={1.5} />
            <Moon size={16} className="i-moon" strokeWidth={1.5} />
          </button>
          <a href="#contact" className="btn btn-line nav__hire">Get in touch</a>
        </div>

        <button
          className="nav__hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {menuOpen && (
        <div className="nav__mobile">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-fill nav__mobile-cta" onClick={() => setMenuOpen(false)}>
            Get in touch
          </a>
        </div>
      )}
    </nav>
  )
}
