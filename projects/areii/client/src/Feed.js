import React from "react"
import Post from "./Post"

class Feed extends React.Component {
    componentDidMount() {
        this.props.getFeed()
    }

    render() {
        const mappedFeed = this.props.feed.map(post => <Post key={post._id} text={post.text} username={post.username} postId={post._id} addComment={this.props.addComment} deleteComment={this.props.deleteComment} />)
        return (
            <div>
                { mappedFeed }
            </div>
        )
    }
    
}

export default Feed