import React from 'react';

const TodoList = ({ todolists, editHandler, deleteHandler, toggleCompleteHandler }) => {
  return (
    <div>
      {todolists.map((todo, index) => (
        <div key={index} className="todo-item" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => toggleCompleteHandler(index)} 
          />
          <h3>{todo.text}</h3>
          <button className="edit" disabled={todo.completed} onClick={() => editHandler(index)}>Edit</button>
          <button className="delete" disabled={todo.completed} onClick={() => deleteHandler(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
