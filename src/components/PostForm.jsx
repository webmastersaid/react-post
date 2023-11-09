import React, { useRef, useState } from "react";
import DefaultInput from "./ui/input/DefaultInput";
import DefaultButton from './ui/button/DefaultButton'

export default function PostForm({create}) {
    const [post, setPost] = useState({ title: '', description: '' })
    const titleInputRef = useRef()
    const descriptionInputRef = useRef()
    function addNewPost(e) {
        e.preventDefault()
        if (post.title === '') {
            titleInputRef.current.focus()
        } else if (post.description === '') {
            descriptionInputRef.current.focus()
        } else {
            const newPost = { ...post, id: Date.now() }
            create(newPost)
            setPost({ title: '', description: '' })
        }

    }
    return (
        <form>
            <DefaultInput ref={titleInputRef} onChange={e => setPost({ ...post, title: e.target.value })} value={post.title} placeholder="Post title" />
            <DefaultInput ref={descriptionInputRef} onChange={e => setPost({ ...post, description: e.target.value })} value={post.description} placeholder="Post description" />
            <DefaultButton onClick={addNewPost}>Add</DefaultButton>
        </form>
    )
}