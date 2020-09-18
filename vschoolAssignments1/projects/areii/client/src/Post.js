import React from "react"
import axios from "axios"
import Comment from "./Comment"
import { Link } from "react-router-dom"

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            commentText: ""
        }
    }

    // componentDidMount() {
    //     this.getComments()
    // }

    getComments = () => {
        axios.get(`/comment/${this.props.postId}`)
            .then(res => {
                this.setState({
                    comments: res.data
                })
            })
            .catch(err => console.log(err))
    }


    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        const inputs = {
            comment: this.state.commentText
        }
        
        this.props.addComment(inputs, this.props.postId)
        this.getComments()
    }

    showComments = () => {
        const comments = document.getElementById(`${this.props.postId}`)

        comments.classList.toggle("hide")
        
        if(comments.classList.contains("untouched")) {
            this.getComments()
        }
        comments.classList.remove("untouched")
    }

    handleDelete = id => {
        console.log("my handle delete", id)
        this.props.deleteComment(id)
        this.getComments()
    }

    render() {
        const mappedComments = this.state.comments.map(myComment => <Comment key={myComment._id} text={myComment.comment} username={myComment.username} handleDelete= {this.handleDelete} id={myComment._id} />)
        const userLink = `/user/${this.props.username}`
        return (
            <div style={{border: "1px solid black"}}>
                <Link to={userLink}>{this.props.username}</Link>
                <h1>{this.props.username}</h1>
                <h1>{this.props.text}</h1>
                
                <button onClick={this.showComments}>Show/Hide Comments</button>
                <div className="hide untouched" id={this.props.postId}>
                    { mappedComments }
                </div>
                

                {
                    localStorage.getItem("token")
                    ?
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="commentText" value={this.state.commentText} placeholder="Comment" onChange={this.handleChange} />
                        <button>Reply</button>
                    </form>
                    :
                    null
                }
                
            </div>
        )
    }
    
}

export default Post

//make class comp. do get statement with query for all comments that match post id. map comments