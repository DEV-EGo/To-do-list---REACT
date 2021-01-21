import React, { useState } from 'react'
import './Todo.css';
import {  List, Button, ListItemAvatar, ListItem, ListItemText, Modal } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase.js';

function Todo(props) {
    const [open,setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
        <Modal
            open= {open}
            onClose={e => setOpen(false)}
        >
            <div> 
                <h1>I am a modal this works</h1>
                <Button onClick={e => setOpen(false)}></Button>
            </div>
        </Modal>

        <List>
            <ListItem>
                <ListItemAvatar>  
                </ListItemAvatar>
                <ListItemText primary= {props.todo.todo} secondary="Dummy deadline" />
            </ListItem>
            <Button onClick={e => setOpen(true)}>Edit</Button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    )
}

export default Todo
// type RFCE (react functional componet with an export) shortcut
// PROPS are propertys that allows to differetiate one component from another