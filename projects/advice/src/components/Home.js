import React from 'react'
import { withAdvice } from '../context/AdviceProvider'

const Home = (props) => {
    return (
        <main>
            <button onClick={props.handleRandom}>Generate</button>
            <div>
                <button onClick={props.handleBlur}>Blur</button>
                <button onClick={props.handleColor}>Black And White</button>
                {
                    props.randomImage.includes("?blur") && props.randomImage.includes("?grayscale")
                    ? <p>You can only have one effect active at a time</p>
                    : null
                }
            </div>
            <h1>{props.randomAdvice}</h1>
            
            
            <div>
                <img src={props.randomImage} alt="Random"/>
                <button onClick={props.saveAdvice}>Save Advice</button>
                <button onClick={props.saveImage}>Save Image</button>
            </div>
            
        </main>
    )
}

export default withAdvice(Home)