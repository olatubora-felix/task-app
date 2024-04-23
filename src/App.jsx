import { useState } from "react";
import "./App.css";
import { TodoForm } from "./component/TodoForm";
import { TodoLists } from "./component/TodoLists";

function App() {
  const initalTodo = {
    title: "",
    date: "",
    completed: "",
  };
  const [todo, setTodo] = useState(initalTodo);
  const todos = localStorage.getItem("todos");
  const [todoList, setTodoList] = useState(todos ? JSON.parse(todos) : []); // [] is the initial value of todoList

  // handleChnage function to handle the input change
  const handleChnage = (event) => {
    setTodo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // handleSubmit function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.title === "" || todo.date === "" || todo.completed === "") {
      return alert("Please enter a todo list");
    }
    setTodoList((initialState) => [...initialState, todo]);
    localStorage.setItem("todos", JSON.stringify([...todoList, todo]));
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
