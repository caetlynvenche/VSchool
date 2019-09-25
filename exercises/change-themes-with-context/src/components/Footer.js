import React from 'react'
import { withTheme } from '../context/ThemeProvider'

const Footer = (props) => {
    return (
        <footer className={`footer-${props.theme}`}>
            Footer
        </footer>
    )
}

export default withTheme(Footer)