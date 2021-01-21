import React, { useState }from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState(['abc','def' ]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() =>{
    // this line of code ..fires when the app.js loads
    db.collection('todos').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

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

      <FormControl>
        <InputLabel> ✅ Write todo</InputLabel>
        <input value = {input} onChange = { event => setInput(event.target.value)}/>
      </FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
      Add to do 
      </Button>
      </form>

    <ul>
      {todos.map(todo => (
        <Todo text = {todo}/>
        // <li>{todo}</li>
      ))}
    </ul>

    </div>
  );
}

export default App;
