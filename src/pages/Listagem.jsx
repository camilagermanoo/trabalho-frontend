import { useEffect } from "react";
import { useUser } from "../context/UserContext";

export default function Listagem() {
  const { filmes, loading, fetchFilmes } = useUser();

  useEffect(() => {
    fetchFilmes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
        Acervo
      </p>
      <h2 className="text-3xl font-bold text-zinc-100 mb-2">Listagem de Filmes</h2>
      <p className="text-zinc-400 mb-10">
        Explore todos os filmes cadastrados e suas avaliações.
      </p>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <p className="text-2xl font-bold text-amber-400 animate-pulse">Carregando...</p>
        </div>
      ) : filmes.length === 0 ? (
        <div className="flex justify-center items-center py-20">
          <p className="text-xl font-bold text-zinc-500">Lista Vazia. Nenhum filme encontrado no JSON Server.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filmes.map((filme) => (
            <div key={filme.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 flex flex-col gap-3 hover:border-amber-400 transition-colors">
              <h3 className="text-xl font-bold text-zinc-100">{filme.titulo || "Sem título"}</h3>
              
              <div className="flex flex-col text-sm text-zinc-400 mt-2 gap-1">
                <p><span className="font-semibold text-zinc-300">Diretor:</span> {filme.diretor}</p>
                <p><span className="font-semibold text-zinc-300">Gênero:</span> {filme.genero}</p>
              </div>
              
              <div className="mt-auto pt-4 border-t border-zinc-800 flex justify-between items-center">
                 <span className="text-xs text-zinc-500">{filme.email}</span>
                 <span className="text-amber-400 font-bold bg-amber-400/10 px-2 py-1 rounded">
                   ★ {filme.avaliacao}
                 </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}