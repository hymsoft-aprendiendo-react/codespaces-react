/* eslint-disable */
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>HyM Shop</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/remeras">
            Remeras
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/chombas">
            Chombas
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/buzos">
            Buzos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/nosotros">
            Nosotros
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/contacto">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
