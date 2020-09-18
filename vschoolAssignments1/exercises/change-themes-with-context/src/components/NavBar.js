import React from 'react'
import { withTheme } from '../context/ThemeProvider'

const NavBar = (props) => {
    return (
        <nav className={`nav-${props.theme}`}>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
            </ul>
        </nav>
    )
}

export default withTheme(NavBar)