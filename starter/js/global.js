import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

//Task(): Create event listener for the 'keypress' of enter and the 'add' button
//<---------------------------------------------------------------------------->

//Event Listener for the Button
var keyPress = document.getElementById('addInputField').addEventListener('keypress', pressEnter);

//Event Listener for the keyPress
var clickBtn = document.getElementById('addBtn').addEventListener('click', addTodo);

//Create global array...
var todos = [
    {
    image: "http://unsplash.it/500/500?random=300",
    title: " - pick up the groceries",
    startDate: " - 10.28.2016 @ 1000hr.",
    endDate: " - 10.31.2016 @ 1000hr.",
    descrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.",
},
];
console.log(todos)

//Create function for press enter
var pressEnter = function(event){
    if (event.key === 'Enter'){
        addTodo();
    }
}

//<---------------------------------------------------------------------------->
//<--------------------------End of Task--------------------------------------->

//Task(): Push input field content to global array on click or keypress
//<---------------------------------------------------------------------------->
//Create function to push content to global array...
var addTodo = function(){
    var todosList = document.getElementById('addInputField');
    todos.unshift(todosList.value);
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
        <Todos data={data} />
    )
}


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
