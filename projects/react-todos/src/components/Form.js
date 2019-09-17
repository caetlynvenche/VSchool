import React from 'react';

const Form = () => {
    return (
        <form>
            <label>Title: </label>
            <input type="text"></input>
            <br />

            <label>Description: </label>
            <input type="text"></input>
            <br />

            <label>Price: </label>
            <input type="number"></input>
            <br />

            <label>URL: </label>
            <input type="text"></input>
        </form>
    )
}

export default Form;