import React from 'react';

const Img = (props) => {
    return (
        <div>
            <img src={props.url} alt={props.alt}></img>
        </div>
    );
}

export default Img;