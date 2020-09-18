import React from 'react';
import Pet from './Pet'

const Friend = ({name, age, pets}) => {
    const petData = pets.map(pet => {
        return (
            <Pet name={pet.name} breed={pet.breed}/>
            // <h1>hi</h1>
        )
    })

    return (
        <main>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Pets: </h2>
            {petData}
        </main>
    )
}

export default Friend;