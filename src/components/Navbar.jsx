import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="Navigator">
      <h2 id="logo">Nu!</h2>
      <ul className="menu-list">
        <li className="menu-list-item">
          <a href="#">Referências</a>
        </li>
        <li className="menu-list-item">
          <a href="#">Sobre</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
