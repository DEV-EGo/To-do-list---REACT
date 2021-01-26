import React, { useState, useEffect }from 'react';
import Todo from './Todo';
import { Button, FormControl, input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState(['abc','def' ]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() =>{
    // this line of code ..fires when the app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  }, []);

  const addTodo =(event) => {
    // this will work when we click the button
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); // clears up the input after clicking add todo button
  }

  return (
    <div className="App">

      <h1>Todo List 📝 </h1>

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
        <Todo todo={todo}/>
      ))}
    </ul>

    </div>
  );
}

export default App;
