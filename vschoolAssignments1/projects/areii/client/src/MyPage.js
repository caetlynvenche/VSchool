import React from "react"
import MyPost from "./MyPost"

class MyPage extends React.Component {
    componentDidMount() {
        this.props.getMyPosts()
    }

    render() {
        const mappedPosts = this.props.feed.map(post => <MyPost key={post._id} text={post.text} date={post.date} username={post.username} deletePost={this.props.deletePost} postId={post._id} id={post._id} editPost={this.props.editPost} hearts={post.hearts} />)
        return (
            <div>
                { mappedPosts }
            </div>
        )
    }
}

export default MyPage