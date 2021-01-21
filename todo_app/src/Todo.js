import React from 'react'
import './Todo.css';
import {  Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import db from './firebase.js';

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>  
                </ListItemAvatar>
                <ListItemText primary= {props.todo.todo} secondary="Dummy deadline" />
            </ListItem>
        <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>🪣 Delete</Button>
        </List>
    )
}

export default Todo
// type RFCE (react functional componet with an export) shortcut
// PROPS are propertys that allows to differetiate one component from another