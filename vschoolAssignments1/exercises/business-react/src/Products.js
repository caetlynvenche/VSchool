import React from 'react';

const Products = (props) => {
    return (
        <section>
            <h3>{props.title}</h3>
            <img src={props.img} className="productImg"/>
            <p>{props.info}</p>
            <p>${props.price}</p>
        </section>
    )
    
}

export default Products;