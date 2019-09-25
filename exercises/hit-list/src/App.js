import React, { Component } from 'react'
import axios from 'axios'
import './styles.css'

class App extends Component {
    constructor() {
        super()
        this.state= {
            data: [],
            color: ""
        }
    }
        
    componentDidMount() {
        axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
        .then(response =>{
            this.setState({data: response.data})
        })
        .catch(error => console.log(error))

        axios.get("http://www.colr.org/json/color/random")
        .then(response => this.setState({color: `#${response.data.new_color}`}))
        .catch(error => error)
    }

    render() {
        const mappedData = this.state.data.map((info, i) => 
            <section key={i}>
                <h1>{info.name}</h1>
                <img src={info.image} alt={info.name}/>
            </section>)
        return (
        <div style= {{backgroundColor:  this.state.color}} >
            {mappedData}
        </div>
    )
    }
}

export default App