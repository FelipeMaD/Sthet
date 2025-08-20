import logo from './logo.svg';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <h1>Tarefa da seção 4: Modulo de CSS</h1>
      <Main/>
      <ul>
          <li>Aqui o css n pega, já que é scoped!</li>
      </ul>
    </div>
  );
}

export default App;
