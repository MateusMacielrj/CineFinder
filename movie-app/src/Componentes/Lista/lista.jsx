import { useState } from "react"

function Lista({ filmes, favoritos, toggleFavorito }) {
  const [expandido, setExpandido] = useState(null)

  return (
    <section className="lista home">
      <div className="lista-topo">
        <h2>Filmes Populares</h2>
        <p>Explore alguns dos filmes mais aclamados de todos os tempos</p>
      </div>

      <div className="lista-filmes">
        {filmes.map((filme) => {
          const ehFavorito = favoritos.includes(filme.id)
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
                className={`botao-favorito ${ehFavorito ? "ativo" : ""}`}
                onClick={() => toggleFavorito(filme.id)}
              >
                {ehFavorito ? "❤️" : "🤍"}
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

export default Lista