import React from 'react';
import Products from './Products'

const ProductSection = () => {
    return (
        <div className="productSection">
            <Products title="One" img="https://images.pexels.com/photos/718227/pexels-photo-718227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" info="These are some filler words for number one." price="15"/>
            <Products title="Two" img="https://images.pexels.com/photos/848554/pexels-photo-848554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" info="These are some filler words for number two." price="60"/>
            <Products title="Three" img="https://images.pexels.com/photos/2337848/pexels-photo-2337848.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" info="These are some filler words for number three." price="20"/>
            <Products title="Four" img="https://images.pexels.com/photos/63450/pexels-photo-63450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" info="These are some filler words for number four." price="10"/>
            <Products title="Five" img="https://images.pexels.com/photos/162499/crocheting-yarn-diy-knitting-162499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" info="These are some filler words for number five." price="40"/>
            <Products title="Six" img="https://images.pexels.com/photos/295208/pexels-photo-295208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" info="These are some filler words for number six." price="38"/>
        </div>
    )
}

export default ProductSection;