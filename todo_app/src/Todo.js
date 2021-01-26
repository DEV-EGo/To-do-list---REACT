import React, { useState } from 'react'
import './Todo.css';
import {  List, Button, ListItemAvatar, ListItem, ListItemText, Modal } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase.js';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width : 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}));

function Todo(props) {
    const classes = useStyles();
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