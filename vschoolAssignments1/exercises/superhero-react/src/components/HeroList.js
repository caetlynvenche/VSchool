import React from 'react'
import Hero from './Hero'

const HeroList = (props) => {
    const mappedHeros = props.info.map((test) => {
        return (
            <Hero  btns={props.btn} key={Math.random()} heroName={test.name} img={test.imageName}/>
        )
        
    })
    return (
        <>
            <h2>Hero List</h2>
            {mappedHeros}
        </>
    )
}

export default HeroList