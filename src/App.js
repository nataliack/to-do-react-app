import React from 'react';
import './App.css';
// import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
//  import todoForm from './components/TodoForm';

function App() {
  return (
    <div className="todo-app">
        <div className="container">
          <h1>planner</h1>
        </div>
      <TodoList />
    </div>
    
  );
}

export default App;
