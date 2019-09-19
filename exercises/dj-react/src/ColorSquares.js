import React from 'react'
import Square from './Square'

const ColorSquares = (props) => {
    return (
    <section className="grid">
        <Square color={props.info.box1}/>
        <Square color={props.info.box2}/>
        <Square color={props.info.box3}/>
        <Square color={props.info.box4}/>
    </section>
    )
}


export default ColorSquares