import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Favoritos({ filmes, favoritos, toggleFavorito }) {
  const navigate = useNavigate()

  const [expandido, setExpandido] = useState(null)

  const filmesFavoritos = filmes.filter((filme) =>
    favoritos.includes(filme.id)
  )

  return (
    <section className="lista favoritos">

      <button 
        onClick={() => navigate("/")}
        className="botao-voltar"
      >
        ← Voltar para Home
      </button>

      <div className="lista-topo">
        <h2>Meus Favoritos ❤️</h2>
      </div>

      {filmesFavoritos.length === 0 && (
        <p>Você ainda não favoritou nenhum filme.</p>
      )}

      <div className="lista-filmes">
        {filmesFavoritos.map((filme) => {

          const aberto = expandido === filme.id

          const sinopse = filme.overview || "Sinopse não disponível."

          return (
            <div className="card-filme" key={filme.id}>

              <div className="card-imagem">
                <img
                  src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                  alt={filme.title}
                />
                <div className="overlay" />
              </div>

              <button
                className={`botao-favorito ${favoritos.includes(filme.id) ? "ativo" : ""}`}
                onClick={() => toggleFavorito(filme.id)}
              >
                {favoritos.includes(filme.id) ? "❤️" : "🤍"}
              </button>

              <div className="card-info">
                <h3>{filme.title}</h3>

                <p className={`sinopse ${aberto ? "aberto" : ""}`}>
                  {sinopse}
                </p>

                <button
                  className="btn-vermais"
                  onClick={() =>
                    setExpandido(aberto ? null : filme.id)
                  }
                >
                  {aberto ? "Ver menos" : "Ver mais"}
                </button>

              </div>

            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Favoritos