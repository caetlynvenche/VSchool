import React from 'react';

const Spot = ({style, place, price, timeToGo}) => {
    return (
        <section style={style}>
            <h1>{place}</h1>
            <h4>{price}</h4>
            <h2>{timeToGo}</h2>
        </section>
    )
}

export default Spot;