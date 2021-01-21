import React from 'react'
import './Todo.css';
import {  List, Button, ListItemAvatar, ListItem, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase.js';

function Todo(props) {
    const [open,setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
        <Modal>
            open= {open}
            onClose={handleClose}

            <div> 
                <h1>I am a modal</h1>
                <button onClick={e => setOpen(false)}></button>
            </div>
        </Modal>

        <List>
            <ListItem>
                <ListItemAvatar>  
                </ListItemAvatar>
                <ListItemText primary= {props.todo.todo} secondary="Dummy deadline" />
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>

        <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    )
}

export default Todo
// type RFCE (react functional componet with an export) shortcut
// PROPS are propertys that allows to differetiate one component from another