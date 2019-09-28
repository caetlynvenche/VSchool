import React, { Component } from 'react'
import { withAdvice } from '../context/AdviceProvider'

class SingleImage extends Component {
    render() {
        return (
            <div style={{border: "1px solid black", margin: "20px"}}>
                <img src={this.props.myImage} alt="Random"/>
                <button><a href={this.props.myImage}>Link</a></button>
                <button onClick={() =>  this.props.handleDeleteImg(this.props.id) }>Delete</button>
            </div>
        )
    }
    
}

export default withAdvice(SingleImage)