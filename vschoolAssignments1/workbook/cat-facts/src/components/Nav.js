import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/facts">Facts</Link>
            <Link to="/images">Images</Link>
        </nav>
    )
}

export default Nav