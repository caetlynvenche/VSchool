import React from 'react'

const Bounty = (props) => {
    return (
        <div>
            <h1>{props.fName} {props.lName}</h1>
            <h2>{props.type}</h2>
            <p>{props.bounty} credits</p>
            {
                props.isLiving 
                ?
                <p>Is Alive</p>
                :
                <p>Is Dead</p>
            }
        </div>
    )
}

export default Bounty