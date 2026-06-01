import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__copy">© 2026 Udula Thathsaridu</span>
        <button
          className="footer__top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
