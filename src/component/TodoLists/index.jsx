/* eslint-disable react/prop-types */
import "./TodoLists.css";
export const TodoLists = ({ lists }) => {
  const handleClearTodos = () => {
    localStorage.clear("todos");
    window.location.reload();
  };
  return (
    <div>
      <div className="wrapper">
        <div>
          <h2 className="todo-heading">Todos List</h2>
        </div>
        <div>
          <button onClick={handleClearTodos}>Clear Todos</button>
        </div>
      </div>
      <ul>
        {lists.map((list, index) => (
          <li key={index} className="list">
            <h3>{list.title}</h3>
            <p>{list.date}</p>
            <p>{list.completed}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
