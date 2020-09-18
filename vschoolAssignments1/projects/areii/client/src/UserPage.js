import React from "react"
import Post from "./Post"

class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            feed: [], 
            username: ""
        }
    }

    componentDidMount() {
        this.findUsername()
    }

    findUsername = () => {
        let path = this.props.location.pathname
        path = path.split("/")
        const username = path[path.length - 1]
        console.log(username)
        this.setState({
            username: username
        })

        this.getUserFeed(username)
    }

    getUserFeed = username => {
        this.props.userAxios.get(`/user/${username}`)
            .then(res => {
                this.setState({
                    feed: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const mappedFeed = this.state.feed.map(post => <Post key={post._id} text={post.text} postId={post._id} addComment={this.props.addComment} deleteComment={this.props.deleteComment} />)
        return (
            <div>
                user page
                <button onClick={this.findUsername}>Log</button>

                { mappedFeed }
            </div>
        )
    }
    
}

export default UserPage