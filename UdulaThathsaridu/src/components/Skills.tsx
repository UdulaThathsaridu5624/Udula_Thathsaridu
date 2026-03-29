import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Skills.css'

interface Skill {
  name: string
  icon: string
}

const skills: Skill[] = [
  { name: 'TypeScript', icon: 'ts' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'Java', icon: 'java' },
  { name: 'Kotlin', icon: 'kotlin' },
  { name: 'Swift', icon: 'swift' },
  { name: 'Python', icon: 'py' },
  { name: 'C#', icon: 'cs' },
  { name: 'React Native', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Vue', icon: 'vue' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Express', icon: 'express' },
  { name: 'NestJS', icon: 'nestjs' },
  { name: 'Spring Boot', icon: 'spring' },
  { name: 'ASP.NET', icon: 'dotnet' },
  { name: 'GraphQL', icon: 'graphql' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'PostgreSQL', icon: 'postgres' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'AWS', icon: 'aws' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub Actions', icon: 'githubactions' },
  { name: 'Vercel', icon: 'vercel' },
]

function getVisibleCount() {
  if (typeof window === 'undefined') return 5
  if (window.innerWidth < 480) return 2
  if (window.innerWidth < 768) return 3
  return 5
}

export default function Skills() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState<'next' | 'prev'>('next')
  const [tick, setTick] = useState(0)
  const [visibleCount, setVisibleCount] = useState(5)
  const resetKeyRef = useRef(0)

  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setDir('next')
      setIndex(i => (i + 1) % skills.length)
      setTick(t => t + 1)
    }, 5000)
    return () => clearInterval(id)
  }, [resetKeyRef.current]) // eslint-disable-line react-hooks/exhaustive-deps

  const go = (direction: 'next' | 'prev') => {
    setDir(direction)
    setIndex(i =>
      direction === 'next'
        ? (i + 1) % skills.length
        : (i - 1 + skills.length) % skills.length
    )
    setTick(t => t + 1)
    resetKeyRef.current += 1 // restart auto-timer on next effect cycle
  }

  const visible = Array.from(
    { length: visibleCount },
    (_, i) => skills[(index + i) % skills.length]
  )

  const progress = ((index + 1) / skills.length) * 100

  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-label">// tech_stack</span>
        <h2 className="skills__heading">Skills &amp; Technologies</h2>

        <div className="skills__carousel">
          <button
            className="skills__arrow"
            onClick={() => go('prev')}
            aria-label="Previous skills"
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>

          <div className="skills__track" key={tick} data-dir={dir}>
            {visible.map((skill, i) => (
              <div
                key={skill.name}
                className="skills__item"
                style={{ '--delay': `${i * 0.06}s` } as React.CSSProperties}
              >
                <div className="skills__icon-wrap">
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={skill.name}
                    className="skills__icon"
                    width={48}
                    height={48}
                    loading="lazy"
                  />
                </div>
                <span className="skills__name">{skill.name}</span>
              </div>
            ))}
          </div>

          <button
            className="skills__arrow"
            onClick={() => go('next')}
            aria-label="Next skills"
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>
        </div>

        <div className="skills__progress">
          <div className="skills__progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </section>
  )
}
