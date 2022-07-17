import { useState } from "react";
import Title from "./Title";
import List from "./List";

function App() {

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState(localStorage.getItem("todo") ? localStorage.getItem("todo").split(',') : []);
  const [title, setTitle] = useState(localStorage.getItem("title") ? localStorage.getItem("title") : '');

  function myTitle(e) {
    setTitle(e.target.value);
    localStorage.setItem("title", e.target.value);
  }

  function submit() {
    todoList.push(todo);
    setTodoList([...todoList]);
    localStorage.setItem("todo", todoList);
    setTodo("");
  }

  function del(index) {
    todoList.splice(index, 1);
    setTodoList([...todoList]);
    localStorage.setItem("todo", todoList);
  }

  function clear() {
    localStorage.clear();
    window.location.reload();
  }


  return (
    <div className="App">
      <h1>SIMPLE TODO CRUD</h1>
      <input type="text" placeholder="Title" onChange={(e) => myTitle(e)} />
      <br />
      <br />
      <input type="text" placeholder="Todo" onChange={(e) => setTodo(e.target.value)} value={todo} />
      <br />
      <br />
      <button id="submit" onClick={() => submit()}>Submit Todo</button>
      <br/>
      <br/>
      <button onClick={() => clear()}>Clear</button>
      <Title title={title} />
      <List list={todoList} delete={del} />
    </div>
  );
}

export default App;
