import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/advice">Advice</Link>
            <Link to="/images">Images</Link>
            <Link to="/canvas">Canvas</Link>
        </nav>
    )
}

export default Nav