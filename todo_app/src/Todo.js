import React from 'react'

function Todo(props) {
    return (
        <div>
             <li>{props.todo}</li>
        </div>
    )
}

export default Todo
// type RFCE (react functional componet with an export) shortcut
// PROPS are propertys that allows to differetiate one component from another