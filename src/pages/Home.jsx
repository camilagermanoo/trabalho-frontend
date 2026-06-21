import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <p className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
        Sua crítica importa
      </p>
      <h1 className="text-4xl sm:text-6xl font-bold text-zinc-100 leading-tight mb-6">
        Descubra. Assista. <span className="text-amber-400">Avalie.</span>
      </h1>
      <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Registre suas opiniões sobre os filmes que você assistiu e explore o que a comunidade está dizendo.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/cadastro" className="px-8 py-3 bg-amber-400 text-zinc-950 text-sm font-bold tracking-widest uppercase rounded hover:bg-amber-300 transition-colors w-full sm:w-auto">
          Cadastrar Filme
        </Link>
        <Link to="/listagem" className="px-8 py-3 border border-zinc-700 text-zinc-300 text-sm font-medium tracking-widest uppercase rounded hover:border-zinc-500 hover:text-zinc-100 transition-colors w-full sm:w-auto">
          Ver Listagem
        </Link>
      </div>
    </section>
  )
}
