import React from 'react'
import { withAdvice } from '../context/AdviceProvider'
import SingleImage from './SingleImage'

const Images = (props) => {
    const mappedImages = props.savedImages.map((single, i) => <SingleImage key={i} myImage={single.img} id={single.id}/>)
    return (
        <div>
            {mappedImages}
        </div>
    )
}

export default withAdvice(Images)