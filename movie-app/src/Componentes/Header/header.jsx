import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <h2>MovieFinder</h2>

      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favoritos" className="nav-link">Favoritos ❤️</Link>
      </nav>
    </header>
  )
}

export default Header