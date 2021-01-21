import React, { useState }from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk 🐶', 'take the rubbish out', 'This is a test' ]);
  const [input, setInput] = useState('');
  console.log('🔫', input);

  const addTodo =(event) => {
    // this will work when we click the button
    event.preventDefault();
    console.log('👽', 'im working');
    setTodos([...todos, input]); //this will add to the input button
    setInput(''); // clears up the input after clicking add todo button
  }

  return (
    <div className="App">

      <h1>Hello Devs 🚀</h1>

      <form>

      <input value = {input} onChange = { event => setInput(event.target.value)}/>
      <Button type="submit" onClick={addTodo} variant="contained" color="primary">
      Add to do 
      </Button>
      </form>

    <ul>
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
    </ul>

    </div>
  );
}

export default App;
