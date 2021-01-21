import React, { useState }from 'react';
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
      <button onClick={addTodo}>Add to do</button>

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
