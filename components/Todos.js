import React from 'react'
import TodoItem from './TodoItem'

const Todos = function(props){
    var todosList = props.taskList.map((todoItem, i) => {
            return <TodoItem description={todoItem.item} key={i}/>
    })
    return(
        <ul className="list-group">
            {todosList}
        </ul>
    )
}
export default Todos
