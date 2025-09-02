import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="Navigator">
      <NavLink to="/" id="logo">
        <h2>Calculorias</h2>
      </NavLink>

      <ul className="menu-list">
        <li className="menu-list-item">
          <NavLink
            to="/referencias"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Referências
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink
            to="/sobre"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
