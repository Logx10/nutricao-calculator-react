import Navbar from './components/Navbar';
import Header from './components/Title';
import Menu from './components/Menu';
import 'katex/dist/katex.min.css';

function App() {
  return (
    <div id="root">
      <Navbar />
      <Header />
      <Menu />
    </div>
  );
}

export default App;
