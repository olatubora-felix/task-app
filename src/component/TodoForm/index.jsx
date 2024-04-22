/* eslint-disable react/prop-types */
import "./TodoForm.css";
export const TodoForm = ({ onChange, todo, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="control-input">
        <input
          type="text"
          className="input"
          name="todo"
          placeholder="Enter Todo List"
          onChange={onChange}
          value={todo}
        />
      </div>
      <button className="btn" type="submit">
        Add Todo
      </button>
    </form>
  );
};
