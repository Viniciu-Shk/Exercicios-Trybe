import { useState } from "react";

export default function useTodoList() {
  const [lista, setLista] = useState([]);
  const [tarefa, setTarefa] = useState('');
return [lista, tarefa, setLista, setTarefa];
}