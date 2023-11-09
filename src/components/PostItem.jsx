import React from "react";
import DangerButton from "./ui/button/DangerButton";

export default function PostItem(props) {
    return (
        <div>
            <h3><strong>{props.number}.</strong> {props.post.title}</h3>
            <p>{props.post.description}</p>
            <DangerButton onClick={() => props.remove(props.post)}>Delete</DangerButton>
        </div>
    )
}