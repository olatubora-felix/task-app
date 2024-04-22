/* eslint-disable react/prop-types */
import "./TodoLists.css";
export const TodoLists = ({ lists }) => {
  return (
    <div>
      <h2 className="todo-heading">Todos List</h2>
      <ul>
        {lists.map((list, index) => (
          <li key={index} className="list">
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
};
