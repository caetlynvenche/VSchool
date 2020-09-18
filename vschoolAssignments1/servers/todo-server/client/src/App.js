import React, {Component} from 'react'
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get("/") 
            .then(res => this.setState({todos: res.data}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {/* {this.state.todos.map(todo => )} */}
                hi
            </div>
        )
        
    }
}

export default App