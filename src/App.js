import React, { useState } from 'react'
import './App.css';
import Form from './Components/Form';
import TodoLists from './Components/TodoLists';

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <header>Frank's TO-DO List</header>

      <Form input={input} setInput={setInput}
        todos={todos} setTodos={setTodos} />

      <TodoLists todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
