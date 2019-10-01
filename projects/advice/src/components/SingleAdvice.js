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
            <div className="myAdvice">
                {
                    (this.props.local.pathname === "/advice")
                    ?
                    <>
                        <h2>{this.props.test}</h2>
                        <div>
                            <button onClick={() => this.props.handleCopyAdvice(this.props.test)}>Copy</button>
                        <button onClick={() =>  this.props.handleDelete(this.props.id) }>Delete</button>
                        </div>
                        
                        
                    </>
                    
                    :
                    <button onClick={() => this.props.handleSelectedAdvice(this.props)}><h2>{this.props.test}</h2></button>
                    
                }
                
                

            </div>
        )
    }
    
}
    


export default withAdvice(SingleAdvice)