import './Marquee.css'

const items = [
  'TypeScript', 'React Native', 'Spring Boot', 'Next.js',
  'Kotlin', 'GraphQL', 'NestJS', 'AWS', 'PostgreSQL', 'Docker',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
