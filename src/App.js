import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "RADET",
      isCompleted: false
    },
    {
      text: "TELEKOM",
      isCompleted: false
    },
    {
      text: "ENEL",
      isCompleted: false
    },
    {
      text: "DISTRIGAZ",
      isCompleted: false
    }
  ]);


  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className='my'>
      <div className='title'>AVIZE</div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>

      <div>
        <ul>
           <li><a href='https://www.archdaily.com/946233/indias-new-parametric-temple-to-reinterpret-vernacular-design-in-koppur'>
              Architecture and research firm rat[LAB] Studio and Shilpa Architects have designed a new temple in Koppur that reinterprets India's vernacular through parametric design. </a>
           </li>  
        </ul>  
      </div>
      </div>
    </div>
  );
}

export default App;
