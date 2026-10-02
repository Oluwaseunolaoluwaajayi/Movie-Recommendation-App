import { useState } from "react"
import { NavLink } from "react-router-dom"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold"
      : "text-white hover:text-yellow-400 transition duration-300"

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Top Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold text-yellow-400"
          >
            My Movie App
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <NavLink to="/" className={linkStyle}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/movies" className={linkStyle}>
                Movies
              </NavLink>
            </li>

            <li>
              <NavLink to="/register" className={linkStyle}>
                Register
              </NavLink>
            </li>

            <li>
              <NavLink to="/login" className={linkStyle}>
                Login
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={linkStyle}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={linkStyle}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 border-t border-gray-700 pt-4">
            <ul className="flex flex-col gap-4">

              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={linkStyle}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/movies"
                  onClick={closeMenu}
                  className={linkStyle}
                >
                  Movies
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/register"
                  onClick={closeMenu}
                  className={linkStyle}
                >
                  Register
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className={linkStyle}
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={linkStyle}
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={linkStyle}
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Nav