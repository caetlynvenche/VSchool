import React from "react"
import { Link } from "react-router-dom"
import Comment from "./Comment"
import axios from "axios"

class MyPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            comments: []
        }
    }

    componentDidMount() {
        this.getComments()
    }

    getComments = () => {
        axios.get(`/comment/${this.props.postId}`)
            .then(res => {
                this.setState({
                    comments: res.data
                })
            })
            .catch(err => console.log(err))
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     //editPost called here
    // }
    render() {
        const mappedComments = this.state.comments.map(myComment => <Comment key={myComment._id} text={myComment.comment} username={myComment.username} />)
        const userLink = `/user/${this.props.username}`
        return (
            <div style={{border: "black solid 2px"}}>
                <Link to={userLink}>{this.props.username}</Link>
                <h2>{this.props.text}</h2>
                <h3>{this.props.date}</h3>
                <h3>{this.props.hearts}</h3>

                <button onClick={() => this.props.deletePost(this.props.id)}>Delete</button>

                { mappedComments }
                
            </div>
        )
    }
}

export default MyPost