import React from 'react';

const Spot = ({place, price, timeToGo}) => {
    return (
        <section>
            <h1>{place}</h1>
            <h4>${price}</h4>
            <p style= {{}}>{timeToGo}</p>
        </section>
    )
}


export default Spot;