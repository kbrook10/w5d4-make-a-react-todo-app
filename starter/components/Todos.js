import React, { Component } from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    const VarItems = props.data.map((input, i) =>{
        return <TodoItem data={input} key={i} />
    })
    return (
        <div>
            {VarItems}
        </div>
    )
}
export default Todos
