import React, { Component } from 'react'

const TodoItemComponent = (props) => {
    return <li className="list-group-item">{props.description}</li>
}

export default TodoItemComponent
