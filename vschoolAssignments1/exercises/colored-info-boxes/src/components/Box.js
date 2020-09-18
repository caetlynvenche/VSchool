import React from 'react';

const Box = (props) => {
    let style = {
        backgroundColor: props.color
    }
    return (
        <section style={style}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>

            <p>{props.info}</p>
        </section>
    )
}

export default Box;