import { useState, useEffect } from 'react'
import { Settings } from 'lucide-react'
import './TweaksPanel.css'

type Accent = 'cobalt' | 'terracotta' | 'forest' | 'violet' | 'amber'

const accents: { value: Accent; label: string; color: string }[] = [
  { value: 'cobalt',     label: 'Cobalt',     color: 'oklch(0.62 0.155 255)' },
  { value: 'terracotta', label: 'Terracotta', color: 'oklch(0.63 0.145 45)'  },
  { value: 'forest',     label: 'Forest',     color: 'oklch(0.60 0.115 160)' },
  { value: 'violet',     label: 'Violet',     color: 'oklch(0.60 0.155 305)' },
  { value: 'amber',      label: 'Amber',      color: 'oklch(0.74 0.145 70)'  },
]

function loadTweaks() {
  try {
    return JSON.parse(localStorage.getItem('udula_tweaks') || '{}')
  } catch { return {} }
}

function saveTweaks(patch: Record<string, string>) {
  try {
    const s = loadTweaks()
    localStorage.setItem('udula_tweaks', JSON.stringify({ ...s, ...patch }))
  } catch { /* storage unavailable */ }
}

export default function TweaksPanel() {
  const [open, setOpen]     = useState(false)
  const [accent, setAccent] = useState<Accent>(() => loadTweaks().accent ?? 'cobalt')

  useEffect(() => {
    const root = document.documentElement
    if (accent === 'cobalt') {
      root.removeAttribute('data-accent')
    } else {
      root.dataset.accent = accent
    }
    saveTweaks({ accent })
  }, [accent])

  return (
    <div className={`tweaks${open ? ' tweaks--open' : ''}`}>
      <button
        className="tweaks__trigger"
        onClick={() => setOpen(o => !o)}
        aria-label="Open tweaks panel"
      >
        <Settings size={15} strokeWidth={1.5} />
      </button>

      {open && (
        <div className="tweaks__panel">
          <p className="tweaks__label">Accent colour</p>
          <div className="tweaks__accents">
            {accents.map(a => (
              <button
                key={a.value}
                className={`tweaks__swatch${accent === a.value ? ' active' : ''}`}
                style={{ background: a.color }}
                onClick={() => setAccent(a.value)}
                aria-label={a.label}
                title={a.label}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
