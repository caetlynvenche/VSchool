import React from 'react'
import Images from './Images'
import Advice from './Advice'
import { withAdvice } from '../context/AdviceProvider'

const Canvas = (props) => {
    return (
        <section>
            canvas
            <h1>Advice: {props.selectedAdvice}</h1>
            <h2> Image: {props.selectedImage}</h2>

            <Images />
            <Advice />
        </section>
        
    )
}

export default withAdvice(Canvas)