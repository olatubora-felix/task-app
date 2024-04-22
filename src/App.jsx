import { useState } from "react";
import "./App.css";
import { TodoForm } from "./component/TodoForm";
import { TodoLists } from "./component/TodoLists";

function App() {
  const initalTodo = "";
  const [todo, setTodo] = useState(initalTodo);
  const [todoList, setTodoList] = useState([]); // [] is the initial value of todoList

  // handleChnage function to handle the input change
  const handleChnage = (event) => {
    setTodo(event.target.value);
  };

  // handleSubmit function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === "") {
      return alert("Please enter a todo list");
    }
    setTodoList((initialState) => [...initialState, todo]);
    setTodo(initalTodo);
  };

  console.log(todoList);
  return (
    <main className="container">
      <TodoForm onChange={handleChnage} todo={todo} onSubmit={handleSubmit} />
      <TodoLists lists={todoList} />
    </main>
  );
}

export default App;
