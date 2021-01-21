import React, { useState }from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState(['Take dogs for a walk 🐶', 'take the rubbish out' ]);


  return (
    <div className="App">

      <h1>Hello Devs 🚀</h1>

      <input/>

    <button>Add to do</button>


    <ul>
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
        <li></li>
        <li></li>
    </ul>

    </div>
  );
}

export default App;
