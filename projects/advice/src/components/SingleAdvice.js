import React, { Component } from 'react'
import { withAdvice } from '../context/AdviceProvider'

class SingleAdvice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentAdvice: props.test
        }
    }


    render() {
        return (
            <div style={{border: "1px solid black", margin: "20px"}}>
                <h2>{this.props.test}</h2>

                {/* if statement to check what page this is on, and change text accordingly */}
                
                <button onClick={() => this.props.handleCopyAdvice(this.props.test)}>Copy</button>
                <button onClick={() =>  this.props.handleDelete(this.props.id) }>Delete</button>
                
                
            </div>
        )
    }
    
}
    


export default withAdvice(SingleAdvice)