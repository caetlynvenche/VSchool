import React from 'react'
import { Link } from 'react-router-dom'
import { withAdvice } from '../context/AdviceProvider'

const Nav = (props) => {
    return (
        <nav id="nav" className="navOff" onClick={props.handleNav}>
            <h3 className="closeBtn"><i className="fa fa-bars"></i></h3>
            <Link to="/">Home</Link>
            <Link to="/advice">Advice</Link>
            <Link to="/images">Images</Link>
            <Link to="/canvas">Canvas</Link>
        </nav>
    )
}

export default withAdvice(Nav)