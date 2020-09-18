import React from 'react'

const Hero = (props) => {
    return (
            <button onClick={() => props.btns(props.catchPhrase)}>
                <h3>{props.heroName}</h3>
            <img src={props.img} alt="Hero"/>
            </button>
            
    )
}

export default Hero