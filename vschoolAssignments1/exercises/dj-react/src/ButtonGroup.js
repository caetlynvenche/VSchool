import React from 'react'
import Button from './Button'

const ButtonGroup = (props) => {
    return (
        <section className="grid">
            <Button clickMe={props.button1}/>
            <Button clickMe={props.button2}/>
            <Button clickMe={props.button3}/>
            <Button clickMe={props.button4}/>
            <Button clickMe={props.button5}/>
            <Button clickMe={props.button6}/>
            <Button clickMe={props.button7}/>
            <Button clickMe={props.button8}/>
        </section>
    )
}

export default ButtonGroup