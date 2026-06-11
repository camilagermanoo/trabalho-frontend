import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Cadastro() {
  const { cadastrarUsuario } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    await cadastrarUsuario(data);
    reset();
  }

  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
        Novo registro
      </p>

      <h2 className="text-3xl font-bold text-zinc-100 mb-2">
        Cadastro de Usuário
      </h2>

      <p className="text-zinc-400 mb-10">
        Preencha os dados abaixo.
      </p>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          {/* Nome */}
          <div>
            <input
              type="text"
              placeholder="Nome"
              aria-label="nome"
              data-testid="nome-input"
              className="w-full p-3 rounded border border-zinc-700 bg-zinc-800 text-white"
              {...register("nome", {
                required: "Nome é obrigatório",
              })}
            />

            {errors.nome && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nome.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="E-mail"
              aria-label="email"
              data-testid="email-input"
              className="w-full p-3 rounded border border-zinc-700 bg-zinc-800 text-white"
              {...register("email", {
                required: "E-mail é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "E-mail inválido",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div> 
            <select aria-label="categoria" data-testid="categoria-select" className="w-full p-3 rounded border border-zinc-700 bg-zinc-800 text-white" {...register("categoria", { required: "Categoria é obrigatória", })} > 
              <option value="">Selecione uma categoria</option>
              <option value="Livre">Livre</option>
              <option value="10 anos">10 anos</option>
              <option value="12 anos">12 anos</option>
              <option value="14 anos">14 anos</option>
              <option value="16 anos">16 anos</option>
              <option value="18 anos">18 anos</option>
              </select> {errors.categoria && ( 
                <p className="text-red-500 text-sm mt-1"> 
                {errors.categoria.message} 
                </p> 
              )} 
            </div>

          <button
            type="submit"
            data-testid="botao-cadastrar"
            className="bg-amber-400 text-black font-semibold py-3 rounded hover:bg-amber-300 transition"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}
