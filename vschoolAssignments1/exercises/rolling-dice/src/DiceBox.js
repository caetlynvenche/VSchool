import React from 'react'
import Dice from './Dice'

const DiceBox = (props) => {
    return (
        <div>
            <Dice dice={props.d1}/>
            <Dice dice={props.d2}/>
            <Dice dice={props.d3}/>
            <Dice dice={props.d4}/>
            <Dice dice={props.d5}/>
        </div>
    )
}

export default DiceBox