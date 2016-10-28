import React, { Component } from 'react' //This is were we import react

const Post = (props) => //If immediately doing something we don't need {} brackets must change class to 'className'
(
    <div className="post">
        <img src={props.post.image} alt={props.post.title} />
        <h3>{props.post.title}</h3>
        <p className="lead">
          Published On {props.post.date} at {props.post.time}
        </p>
        <p>
            {props.post.body}
        </p>
        <p>
          <span className="small">Author: {props.post.author}</span>
        </p>
    </div>
)
export default Post
