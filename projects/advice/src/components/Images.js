import React from 'react'
import { withAdvice } from '../context/AdviceProvider'
import SingleImage from './SingleImage'

const Images = (props) => {
    const mappedImages = props.savedImages.map((single, i) => <SingleImage key={i} myImage={single.img} id={single.id} local={props.location}/>)
    return (
        <div>
            <h1>Images</h1>
            <div className="imageMap">
                {mappedImages}
            </div>
        </div>
    )
}

export default withAdvice(Images)