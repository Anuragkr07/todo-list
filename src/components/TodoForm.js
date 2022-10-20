import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="Enter To Do Item..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="button-add" type="submit">
        {" "}
        {editId ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
