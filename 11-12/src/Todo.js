import { useState } from "react";
import Title from "./Title";
import List from "./List";

function App() {

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');

  function submit() {
    todoList.push(todo);
    setTodoList([...todoList]);
    setTodo("");
  }


  return (
    <div className="App">
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Todo" onChange={(e) => setTodo(e.target.value)} value={todo} />
      <button onClick={() => submit()}>Submit Todo</button>
      <Title title={title} />
      <List list={todoList} />
    </div>
  );
}

export default App;
