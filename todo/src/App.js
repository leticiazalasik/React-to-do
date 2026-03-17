import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  //Load todos on page load
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const response = await fetch(API + "/todos");
        const data = await response.json();

        setTodos(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    //Envio para api
    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: { "Content-Type": "application/json" },
    });

    //Atualizar a lista pegando o estado atual da lista e adicionando nela a nova tarefa criada
    setTodos((prevState) => [...prevState, todo]);

    //Limpar states
    setTitle("");
    setTime("");

    console.log(title);
    setTitle("");
    console.log("Enviou!");
  };

  //Função de deletar tarefa:
  const handleDelete = async (id) => {
    //Envio para api
    await fetch(API + "/todos/" + id, {
      method: "DELETE",
    });

    //Atualizar a lista pegando sem a tarefa excluída
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  //Função para editar tarefa
  const handleEdit = async (todo) => {
    todo.done = !todo.done;

    //Envio para api
    const data = await fetch(API + "/todos/" + todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: { "Content-Type": "application/json" },
    });

    //Atualizar a lista pegando sem a tarefa excluída
    setTodos((prevState) =>
      prevState.map((t) => (t.id === data.id ? (t = data) : t)),
    );
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <div className="todo-header">
        <h1>React Todo</h1>
      </div>

      <div className="form-todo">
        <h2>Insira a sua próxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">O que você vai fazer?</label>
            <input
              type="text"
              name="title"
              placeholder="Título da tarefa"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="time">Duração:</label>
            <input
              type="text"
              name="time"
              placeholder="Tempo estimado (em horas)"
              onChange={(e) => setTime(e.target.value)}
              value={time || ""}
              required
            />
          </div>

          <input type="submit" value="Enviar" />
        </form>
      </div>

      <div className="list-todo">
        <h2>Lista de tarefas</h2>
        {todos.length === 0 && <p>Não há tarefas!</p>}
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
            <p>Duração: {todo.time}</p>
            <div className="actions">
              <span onClick={() => handleEdit(todo)}>
                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
              </span>
              <BsTrash onClick={() => handleDelete(todo.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
