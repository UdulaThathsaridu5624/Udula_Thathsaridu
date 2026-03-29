import { ArrowRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import profilePhoto from '../assets/UdulaThathsaridu.jpeg'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__container container">
        <div className="hero__left">
          <span className="hero__greeting">// Hi, I'm</span>
          <h1 className="hero__name">
            <span className="hero__name-gradient">Udula</span>
            <br />
            <span className="hero__name-gradient">Thathsaridu</span>
          </h1>
          <div className="hero__role-chip">
            <span className="hero__role-dot" />
            Software Engineer · Full-Stack
          </div>
          <p className="hero__tagline">
            I'm a software engineering student at SLIIT with a passion for
            building things that actually ship. I spend most of my time in the
            mobile and web space, working with React Native, TypeScript, and
            whatever backend makes sense for the job.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a
              href="https://github.com/UdulaThathsaridu5624"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <GithubIcon size={16} /> GitHub
            </a>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__photo-wrap">
            <div className="hero__photo-ring hero__photo-ring--outer" />
            <div className="hero__photo-ring hero__photo-ring--inner" />
            <img
              src={profilePhoto}
              alt="Udula Thathsaridu"
              className="hero__photo"
            />
          </div>
          <div className="hero__glow" />
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">scroll</span>
      </div>
    </section>
  )
}
