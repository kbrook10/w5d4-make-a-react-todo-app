import React, { Component } from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    const TaskItems = props.data.map((task, i) =>{
        return <TodoItem data={task} key={i} />
    })
    console.log(TaskItems)
    return (
        <div>
            {TaskItems}
        </div>
    )
}
export default Todos
