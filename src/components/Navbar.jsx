import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/cadastro', label: 'Cadastro' },
  { to: '/listagem', label: 'Listagem' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
      isActive
        ? 'text-amber-400 border-b border-amber-400 pb-0.5'
        : 'text-zinc-400 hover:text-zinc-100'
    }`

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2 group">
            <span className="text-amber-400 text-xl">🎬</span>
            <span className="text-lg font-bold tracking-tight text-zinc-100 group-hover:text-amber-400 transition-colors">
              CineReview
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-zinc-800 py-4 flex flex-col gap-4">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={linkClass} onClick={() => setMenuOpen(false)}>
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
