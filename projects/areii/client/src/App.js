import React from "react"
import axios from "axios"
import { Switch, Route } from "react-router-dom"
import Nav from './Nav'
import Auth from "./Auth"
import Feed from "./Feed"
import MyPage from "./MyPage"
import UserPage from "./UserPage"
import Footer from "./Footer"
import "./styles/styles.css"

const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            authErrMsg: "",
            feed: []
        }
    }

    signup = credentials => {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                this.setState(prevState => ({
                    user,
                    token
                }))
                this.clearAuthErr()
            })
            .catch(err => this.handleAuthErr(err.response.data.errMsg))
    }

    login = credentials => {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                this.setState(prevState => ({
                    user,
                    token
                }))
                this.clearAuthErr()
            })
            .catch(err => this.handleAuthErr(err.response.data.errMsg))
    }

    logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        this.setState({
            user: {},
            token: ""
        })
        this.clearAuthErr()
    }

    handleAuthErr = errMsg => {
        this.setState({
            authErrMsg: errMsg
        })
    }

    clearAuthErr = () => {
        this.setState({
            authErrMsg: ""
        })
    }

    getFeed = () => {
        axios.get("/feed")
            .then(res => {
                this.setState({
                    feed: res.data
                })
            })
            .catch(err => {
                console.log(err.response.data.errMsg)
            })
    }

    getMyPosts = () => {
        userAxios.get("/api/mypage")
            .then(res => {
                this.setState({
                    feed: res.data
                })
            })
            .catch(err => {
                console.log(err.response.data.errMsg)
            })
    }

    addPost = (newPost) => {
        userAxios.post("/api/mypage", newPost)
            .then(res => {
                this.setState(prevState => ({
                    feed: [...prevState.feed, res.data]
                }))
            })
            .catch(err => {
                console.log(err)
            })
    }

    addComment = (newComment, postId) => {
        userAxios.post(`/api/comment/${postId}`, newComment)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    deleteComment = id => {
        userAxios.delete(`/api/comment/${id}`)
        .then(res => {
            console.log(res)
            this.getFeed()
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    deletePost = id => {
        userAxios.delete(`/api/mypage/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data.errMsg))
        this.getMyPosts()
    }

    editPost = (id, updates) => {
        userAxios.put(`/api/mypage/${id}`, updates)
            .then(res => {
                this.setState(prevState => ({
                    feed: [prevState.feed.map(ind => ind._id === id ? res.data : ind)]
                }))
                this.getMyPosts()
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
 

    render() {
        return (
            <main>
                <Nav />

                <Switch>
                    <Route exact path="/"><Feed getFeed={this.getFeed} feed={this.state.feed} addComment={this.addComment} deleteComment={this.deleteComment}  /></Route>
                    <Route path="/mypage"><MyPage getMyPosts={this.getMyPosts} feed={this.state.feed} deletePost={this.deletePost} /></Route>
                    <Route path="/user" render={rProps => <UserPage userAxios={userAxios} {...rProps} addComment={this.addComment} deleteComment={this.deleteComment} />}></Route>

                    <Route path="/auth" render={rProps => <Auth signup={this.signup} login={this.login} authErrMsg={this.state.authErrMsg} clearAuthErr={this.clearAuthErr} logout={this.logout} />} />
                </Switch>

                <Footer addPost={this.addPost} />
            </main>
        )
    }
}

export default App