import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Components/Form';
import TodoLists from './Components/TodoLists';

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodo, setFilteredTodo] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodo(todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodo(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodo(todos)
          break;
      }
    }

    filterHandler();

  }, [status, todos])

  return (
    <div>
      <header>Frank's TO-DO List</header>
      <Form input={input} setInput={setInput}
        todos={todos} setTodos={setTodos}
        setStatus={setStatus} />

      <TodoLists todos={todos} setTodos={setTodos}
        filteredTodo={filteredTodo} />
    </div>
  );
}

export default App;
