import logo from './logo.svg';
import './App.css';

const listaTarefas = ['lavar a louça', 'tirar o lixo', 'passear com o charles', 'ligar pro mozão'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {listaTarefas.map((tarefa) => Task(tarefa))}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
