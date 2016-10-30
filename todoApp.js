import React from 'react'
import ReactDOM from 'react-dom' //import the react-dom node library
import TodoItemsComponent from '../components/TodoItemsComponent' //Name filename the same as component name

var todos =[]

var todoItemInput = document.querySelector('#todItemInput')
var todoItemBtn = document.querySelector('#todItemInput')


todoItemInput.addEventListener('keypress', handleEnterKey)
todoItemBtn.addEventListener('click', handleClick)

function handleEnterKey(event){
    if (event.key === 'Enter'){
        addTodoItem()
    }
}

function addTodoItem(){
    var todoItemValue = todoItemInput.value
    todoItemInput.value = ''
    // todos.push(todoItemValue) --> This was the first option...

//Push value onto array
    todos.push({
        item: todoItemValue,
    })
//Render array as visual form
    renderView(todos)
}
function renderView(arrayOfTodoItems){
    ReactDOM.render(
        <TodoItemsComponent todoList={arrayOfTodoItems} />, document.querySelector('#todos') //This is where it mounts the component on the HTML
    )
}
