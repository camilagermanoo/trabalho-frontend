export default function Listagem() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
        Acervo
      </p>
      <h2 className="text-3xl font-bold text-zinc-100 mb-2">Listagem de Filmes</h2>
      <p className="text-zinc-400 mb-10">
        Explore todos os filmes cadastrados e suas avaliações.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 flex flex-col gap-3">
            <div className="h-5 w-3/4 bg-zinc-800 rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-zinc-800 rounded animate-pulse" />
            <div className="h-4 w-full bg-zinc-800 rounded animate-pulse" />
          </div>
        ))}
      </div>
      <p className="text-zinc-600 text-sm text-center mt-10">
        Os filmes cadastrados aparecerão aqui.
      </p>
    </section>
  )
}
