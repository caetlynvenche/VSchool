import React from 'react'

const Square = (props) => {
    return (
        <>
            <div className="square" style={{background: props.color}}></div>
        </>
    )
}

export default Square