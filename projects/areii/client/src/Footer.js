import React from "react"

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            text: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const inputs = {
            text: this.state.text
        }
        this.props.addPost(inputs)
        this.setState({
            text: ""
        })
    }

    render() {
        return (
            <footer>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="text" value={this.state.text} onChange={this.handleChange} placeholder="Text"  />
                    <button>Post</button>
                </form>
            </footer>
        )
    }
    
}

export default Footer