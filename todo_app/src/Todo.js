import React from 'react'
import './Todo.css';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core'

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                    {/* <Avatar>
                        <ImageIcon/>
                    </Avatar> */}
                </ListItemAvatar>
                    <ListItemText primary= {props.text} secondary="Dummy deadline" />
            </ListItem>
        </List>
    )
}

export default Todo
// type RFCE (react functional componet with an export) shortcut
// PROPS are propertys that allows to differetiate one component from another