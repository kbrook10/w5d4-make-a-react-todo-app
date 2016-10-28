import React, { Component } from 'react' //Every component MUST import 'react'
import Post from './Post' //Import our 'Post' individual component we made

const Posts = (props) => { //This 'const' makes a new view of the post...This never modifies...Just pulls out element and inserts a new component...This 'Arrow Function' takes one parameter of 'props'
    console.log(props)
    const PostItems = props.data.map((post, i) =>{ //The 'map' function converts the 'props' object with an array of data from every post...This 'const' is a stateless component
        return <Post post={post} key={i} /> //The 'key' is an optimization to understand where to place content...This helps react to run faster...'post' is the name of the property and {post} is the value
    })
    console.log(PostItems)
    return (
        <div>
            {/* This div allows use to contain everything inside one thing */}
            {/*Can only return (1) thing */}
            {/* <h1>Blog Posts</h1> */}
            <h1>Blog Posts</h1>
            {PostItems}
        </div>
    )
}

export default Posts
