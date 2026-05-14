function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <h2>Descubra Filmes Instantaneamente</h2>

        <p>
          Explore milhares de filmes, encontre seus favoritos e crie sua lista
          personalizada de clássicos do cinema.
        </p>

        <div className="hero-search">
          <input
            type="text"
            className="hero-input"
            placeholder="Buscar filmes..."
          />

          <button className="hero-button">Buscar</button>
        </div>
      </div>
    </section>
  )
}

export default Hero