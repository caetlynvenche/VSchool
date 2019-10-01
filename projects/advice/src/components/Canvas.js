import React from 'react'
import Images from './Images'
import Advice from './Advice'
import { withAdvice } from '../context/AdviceProvider'

const Canvas = (props) => {
    return (
        <section>
            <h1>{props.selectedAdvice}</h1>
            {
                !(props.selectedImage === "")
                ?
                <img src={props.selectedImage} alt="Selected" />
                :
                null
            }

            

            <Images {...props}/>
            <Advice {...props}/>
        </section>
        
    )
}

export default withAdvice(Canvas)