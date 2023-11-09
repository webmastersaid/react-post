import React, { Fragment } from "react";
import Post from "./PostItem";

export default function PostList({ posts, title, remove }) {
    if(!posts.length){
        return (
            <div style={{ fontSize: '36px', textAlign: 'center' }}>Empty!</div>
        )
    }
    return (
        <Fragment>
            <h2 style={{ textAlign: 'center' }}>{title}</h2>
            <div>
                {posts.map((post, index) => <Post remove={remove} number={index + 1} post={post} key={post.id} />)}
            </div>
            <br />
        </Fragment>
    )
}