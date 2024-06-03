import React, { useState } from "react";
import './App.css';
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState(""); 
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    setTodo(e.target.value);
    if (e.target.value.trim() !== "") {
      setError("");
    }
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      setError("Invalid!! list is empty");
      return;
    }
    if (editIndex !== null) {
      const updatedTodos = todos.map((item, index) => 
        index === editIndex ? { ...item, text: todo } : item
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      const newTodos = [...todos, { text: todo, completed: false }];
      setTodos(newTodos);
    }
    setTodo("");
  }

  const editHandler = (index) => {
    setTodo(todos[index].text);
    setEditIndex(index);
  }

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((_, index) => index !== indexValue);
    setTodos(newTodos);
  }

  const toggleCompleteHandler = (index) => {
    const updatedTodos = todos.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
  }

  return (
    <div className="input">
      <h1>REACT TODO APP</h1>
      <form onSubmit={submitHandler}>
        <input 
          type="text"
          name="todo"
          value={todo}
          onChange={changeHandler}
          placeholder="Add your todo list..."
        />
        <button className="button">{editIndex !== null ? "Update" : "Add"}</button>
      </form>
      {error && <div className="error">{error}</div>}
      <TodoList 
        todolists={todos} 
        editHandler={editHandler} 
        deleteHandler={deleteHandler}
        toggleCompleteHandler={toggleCompleteHandler}
      />
    </div>
  );
};

export default App;
