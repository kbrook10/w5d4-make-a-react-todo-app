import React, { Component } from 'react'

const TodoItem = (props) =>
(
    <div>
        <div className="checkbox">
          <label className="input-group">
            <input type="checkbox" value="" />
            <span id="newTask">{props.todos.title}}</span>
            <span className="input-group-btn">
              <button id="removeTaskItem" class="btn btn-default text-right">Delete</button>
            </span>
          </label>
        </div>
    </div>
)
export default TodoItem
