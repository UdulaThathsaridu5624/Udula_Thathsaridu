import "./Skills.css";

interface Skill { name: string; icon: string; }

const groups: { label: string; skills: Skill[] }[] = [
  {
    label: "Languages",
    skills: [
      { name: "TypeScript",  icon: "ts"     },
      { name: "JavaScript",  icon: "js"     },
      { name: "Java",        icon: "java"   },
      { name: "Kotlin",      icon: "kotlin" },
      { name: "Swift",       icon: "swift"  },
      { name: "Python",      icon: "py"     },
      { name: "C#",          icon: "cs"     },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React",        icon: "react"    },
      { name: "Next.js",      icon: "nextjs"   },
      { name: "Vue",          icon: "vue"      },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js",     icon: "nodejs"   },
      { name: "Express",     icon: "express"  },
      { name: "NestJS",      icon: "nestjs"   },
      { name: "Spring Boot", icon: "spring"   },
      { name: "ASP.NET",     icon: "dotnet"   },
      { name: "GraphQL",     icon: "graphql"  },
      { name: "MySQL",       icon: "mysql"    },
      { name: "PostgreSQL",  icon: "postgres" },
      { name: "MongoDB",     icon: "mongodb"  },
    ],
  },
  {
    label: "Data & DevOps",
    skills: [
      { name: "AWS",            icon: "aws"           },
      { name: "Docker",         icon: "docker"        },
      { name: "Git",            icon: "git"           },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Vercel",         icon: "vercel"        },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">Toolbox</span>
            <h2 className="sec-title">Skills &amp; technologies</h2>
          </div>
          <span className="sec-index">04 — Stack</span>
        </div>

        <div className="skills__grid reveal">
          {groups.map(g => (
            <div key={g.label} className="skills__group">
              <div className="skills__group-header">
                <span className="skills__group-label eyebrow">{g.label}</span>
                <span className="sec-index">{g.skills.length}</span>
              </div>
              <ul className="skills__list">
                {g.skills.map(s => (
                  <li key={s.name} className="skills__item">
                    <img
                      src={`https://skillicons.dev/icons?i=${s.icon}`}
                      alt={s.name}
                      width={22}
                      height={22}
                      loading="lazy"
                      className="skills__icon"
                    />
                    <span className="skills__name">{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
