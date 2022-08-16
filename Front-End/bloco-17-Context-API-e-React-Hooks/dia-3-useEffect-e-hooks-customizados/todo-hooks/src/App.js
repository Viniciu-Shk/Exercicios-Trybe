import './App.css';
import useTodoList from './hooks/useTodoList';

function App() {

  const [lista, tarefa, setLista, setTarefa] = useTodoList();
  return (
    <div>
      <input
      type="text"
      placeholder="Sua tarefa aqui"
      value={tarefa}
      onChange={({target}) => setTarefa(target.value)}
      />
      <button
      type="button"
      onClick={() => setLista([...lista, tarefa])}
      >
      Adicionar tarefa
      </button>
      <ul>
        { lista.length > 0 && lista.map((item, index) => <li key={index}>{ item }</li>)}
      </ul>
    </div>
  );
}

export default App;
