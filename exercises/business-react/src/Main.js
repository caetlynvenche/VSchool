import React from 'react';
import Img from './Img.js';
import ProductSection from './ProductSection'

const Main = () => {
    return (
        <div>
            <h1>Crochet and Cuddles</h1>
            <Img url = "https://images.pexels.com/photos/2897128/pexels-photo-2897128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt = "Crochet"/>
            <h2>Here at Crochet and Cuddles, we are focused on sharing love and comfort.</h2>
            <div className="info">
                <p>To us, there is nothing better than sitting down after a stressful day and cuddling with something that was made with love.</p>
                <p>A blanket will become like a hug.</p>
                <p>A stuffed toy will become an emotional anchor.</p>
                <p>A frown will become a grin.</p>
            </div>

            <div>

                <h1>Products</h1>
                <ProductSection />

            </div>
        </div>
    );
}

export default Main;