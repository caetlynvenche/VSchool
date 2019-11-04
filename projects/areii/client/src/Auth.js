import React from "react"

class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            toggle: false
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSignupSubmit = (e) => {
        e.preventDefault()
        const inputs = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signup(inputs)
        this.setState({
            username: "",
            password: ""
        })    
    }

    handleLoginSubmit = (e) => {
        e.preventDefault()
        const inputs = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(inputs)
        this.setState({
            username: "",
            password: ""
        })
    }

    toggleForms = () => {
        this.setState({
            toggle: !this.state.toggle
        })
        this.props.clearAuthErr()
    }

    render() {
        return (
            <div>
                {
                    (this.state.toggle) 
                    ?
                    <>
                        <form onSubmit={this.handleSignupSubmit}>
                            <h2>sign up</h2>
                            <input type="text" onChange={this.handleChange} name="username" value={this.state.username} placeholder="Username" />
                            <input type="text" onChange={this.handleChange} name="password" value={this.state.password} placeholder="Password" />
                            <button>Sign Up</button>

                            
                        </form>
                        <button onClick={this.toggleForms}>Already a Member?</button>
                    </>
                    :
                    <>
                        <form onSubmit={this.handleLoginSubmit}>
                            <h2>login</h2>
                            <input type="text" onChange={this.handleChange} name="username" value={this.state.username} placeholder="Username" />
                            <input type="text" onChange={this.handleChange} name="password" value={this.state.password} placeholder="Password" />
                            <button>Login</button>

                            
                        </form>
                        <button onClick={this.toggleForms}>Not a Member?</button>
                    </>
                }
                

                

                <h2>{this.props.authErrMsg}</h2>

                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}

export default Auth