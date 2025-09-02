import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Title';
import Menu from './components/Menu';
import Referencias from './Referencias';
import Sobre from './Sobre';
import 'katex/dist/katex.min.css';

function App() {
  return (
    <Router>
      <Navbar />

      <div className="content">
        <Routes>
          {/* Redireciona qualquer rota inválida para Home */}
          <Route path="*" element={<Navigate to="/" />} />

          {/* Página inicial */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Menu />
              </>
            }
          />

          {/* Página de referências */}
          <Route path="/referencias" element={<Referencias />} />

          {/* Página sobre */}
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
