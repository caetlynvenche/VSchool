import React from "react"
import { Link } from "react-router-dom"

const Comment = (props) => {
    const userLink = `/user/${props.username}`
    return (
        <div style={{border: "1px solid red"}}>
                <Link to={userLink}>{props.username}</Link>
                <h3>{props.text}</h3>

                {
                    (JSON.parse(localStorage.getItem("user")).username === props.username) ? 
                    <button onClick={() => props.handleDelete(props.id)}>delete</button>
                    : 
                    null
                }
        </div>
    )
}

export default Comment