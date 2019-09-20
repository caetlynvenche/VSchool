import React, {Component} from 'react'
import Form from './components/Form'
import './styles/styles.css'

class App extends Component {
    constructor () {
        super()
        this.state = {
            fName: "",
            lName: "",
            email: "",
            birth: "",
            phone: "",
            favFood: "",
            about: "",
            info: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
            
        const newInfo = {
            fName: this.state.fName,
            lName: this.state.lName,
            email: this.state.email,
            birth: this.state.birth,
            phone: this.state.phone,
            favFood: this.state.favFood,
            about: this.state.about
        }
        this.setState(prevState => (
            {
            info: [...prevState.info, newInfo],
            fName: "",
            lName: "",
            email: "",
            birth: "",
            phone: "",
            favFood: "",
            about: ""
        })) 
    }

    render () {
        return (
            <>
            <h1>Name Badge</h1>
                <Form   inform={this.state} cng={this.handleChange}
                sub={this.handleSubmit}
                info={this.state.info}/>
            </>
        )
    }
    
}

export default App