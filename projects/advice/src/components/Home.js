import React from 'react'
import { withAdvice } from '../context/AdviceProvider'

const Home = (props) => {
    return (
        <main>
            <div className="homeBtns">
                <button onClick={props.handleRandom} className="generateBtn">Generate</button>

                
                <div className="imgEffects">
                    <button onClick={props.handleBlur}>Blur</button>
                    <button onClick={props.handleColor}>Black And White</button>
                </div>
            </div>
            

                
            
            <h1>{props.randomAdvice}</h1>
            
            {
                props.randomImage.includes("?blur") && props.randomImage.includes("?grayscale")
                ? <p>You can only have one effect active at a time</p>
                : null
            }
            <div className="newImg">
                <img src={props.randomImage} alt="Random"/>

                <div className="saveStuff">
                    <button onClick={props.saveAdvice}>Save Advice</button>
                    <button onClick={props.saveImage}>Save Image</button>
                </div>
                
            </div>
            
        </main>
    )
}

export default withAdvice(Home)