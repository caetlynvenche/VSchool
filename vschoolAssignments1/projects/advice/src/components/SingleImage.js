import React, { Component } from 'react'
import { withAdvice } from '../context/AdviceProvider'

class SingleImage extends Component {
    render() {
        return (
            <div className="myImage">

                {
                    (this.props.local.pathname === "/images")
                    ?
                    <div>
                    <img src={this.props.myImage} alt="Random"/>
                        <button><a href={this.props.myImage}>Link</a></button>
                    <button onClick={() =>  this.props.handleDeleteImg(this.props.id) }>Delete</button>
                    </div>
                    :
                    <button onClick={() => this.props.handleSelectedImage(this.props)}><img src={this.props.myImage} alt="Random"/></button>
                }

                
            </div>
        )
    }
    
}

export default withAdvice(SingleImage)