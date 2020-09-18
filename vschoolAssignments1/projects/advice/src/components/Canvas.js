import React from 'react'
import Images from './Images'
import Advice from './Advice'
import { withAdvice } from '../context/AdviceProvider'

const Canvas = (props) => {
    return (
        <section>
            <header>
                <h1>Canvas</h1>
            </header>
            <div className="showCanvas">
                <h1>{props.selectedAdvice}</h1>
            {
                !(props.selectedImage === "")
                ?
                <img src={props.selectedImage} alt="Selected" />
                :
                null
            }
            </div>
            

            
                <button className="tabLink" onClick={() => props.handleTab("advice", "images")}>Saved Components</button>

            <div id="advice">
                <Advice {...props}/>
            </div>

            <div id="images" className="hideTab">
                <Images {...props} />
            </div>
            
        </section>
        
    )
}

export default withAdvice(Canvas)