import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

//Task(): Create event listener for the 'keypress' of enter and the 'add' button
//<---------------------------------------------------------------------------->

//Event Listener for the keyPress on the input field
var keyPress = document.getElementById('addInputField').addEventListener('keypress', pressEnter);

//Event Listener for the Add Button
var clickBtn = document.getElementById('addBtn').addEventListener('click', addTodo);

//Create function for press enter
var pressEnter = function(event){
    if (event.key === 'Enter'){
        addTodo();
    }
}

//Create global array...
var todos = [
    {
    title: " Task Item",
    description: "Go to the groceries",
    startDate: " - 10.28.2016 @ 1000hr.",
}
];
console.log(todos)

//<---------------------------------------------------------------------------->
//<--------------------------End of Task--------------------------------------->

//Task(): Push input field content to global array on click or keypress
//<---------------------------------------------------------------------------->
//Create function to push content to global array...
var addTodo = function(){
    var todosList = document.getElementById('addInputField');
    todos.push(todosList.value);
    todosList.value = '';
    renderView(todos);
    console.log(todos)
}

//<---------------------------------------------------------------------------->
//<--------------------------End of Task--------------------------------------->

//Task(): Create renderView function to refresh the M 'V' C and change the HTML tags on page
//<---------------------------------------------------------------------------->
var renderView = (data) => {
    ReactDOM.render(
        <Todos data={data} />, document.getElementById('todos')
    )
}

renderView(todos)


//<---------------------------------------------------------------------------->
//<--------------------------End of Task--------------------------------------->

//Task():
//<---------------------------------------------------------------------------->

//<---------------------------------------------------------------------------->
//<--------------------------End of Task--------------------------------------->

//Task():
//<---------------------------------------------------------------------------->

//<---------------------------------------------------------------------------->
//<--------------------------End of Task--------------------------------------->

//Task():
//<---------------------------------------------------------------------------->

//<---------------------------------------------------------------------------->
//<--------------------------End of Task--------------------------------------->
