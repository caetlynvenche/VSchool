import React from 'react';

const Pet = ({name, breed}) => {
    return (
        <section>
            <h4>Name: {name}</h4>
            <h4>Breed: {breed}</h4>
        </section>
    )
}

export default Pet;