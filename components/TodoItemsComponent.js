import React, { Component } from 'react'
import TodoItemComponent from './TodoItemComponent'

const TodoItemsComponent = function(props){ //This never gets ran directly...In react we just need to build the constructure fuction..Similar to spaceship exercise
    var todoListOfComponents = props.todoList.map((todoItem, i)
        =>{
            return <TodoItemComponent description={todoItem.description} key={todoItemIndex}/>
    })
    //Takes array and transforms
    // return <h1>It works</h1>; //At bare minimum we need to return one thing
    <ul class="list-group">
        {todoListOfComponents}
    </ul>
}
export default TodoItemsComponent
