import { useState } from "react";

function Todo_list() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      alert("Please Write Your Todos");
      return;
    }
    setTodos((prev) => [todo, ...prev]);
    setTodo("");
  };
  return (
    <div>
      <h1>My Todos</h1>
      <h4>{todos.length} more Todos left!</h4>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write Your todo"
        />
        <button>submit</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo_list;
