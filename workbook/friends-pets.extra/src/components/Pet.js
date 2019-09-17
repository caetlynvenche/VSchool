import React from 'react';

const Pet = (props) => {
    return (
        <section>
            <h3>Name: {props.name}</h3>
            <h3>Breed: {props.breed}</h3>
        
        </section>
    )
}

export default Pet;