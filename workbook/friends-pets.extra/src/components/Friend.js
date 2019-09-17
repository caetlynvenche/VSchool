import React from 'react'
import Pet from './Pet'

const Friend = (props) => {
    const cutie = props.pets.map(petList => {
        return (
            <Pet name={petList.name} breed={petList.breed}/>
        )
    })

    return (
        <main>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Pets:</h2>
            {cutie}
        </main>
    )
}

export default Friend;