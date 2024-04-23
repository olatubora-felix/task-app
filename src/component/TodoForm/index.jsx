/* eslint-disable react/prop-types */
import "./TodoForm.css";
export const TodoForm = ({ onChange, todo, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="control-input">
        <input
          type="text"
          className="input"
          name="title"
          placeholder="Enter Todo List"
          onChange={onChange}
          value={todo?.title}
        />
      </div>
      <div className="control-input date">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          className="date-input"
          onChange={onChange}
          value={todo?.date}
        />
      </div>
      <div className="control-input date">
        <label htmlFor="completed">Completed:</label>
        <select
          name="completed"
          id="completed"
          className="completed"
          onChange={onChange}
          value={todo?.completed}
        >
          <option value="">Select</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <button className="btn" type="submit">
        Add Todo
      </button>
    </form>
  );
};
