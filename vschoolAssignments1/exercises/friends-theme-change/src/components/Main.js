import React from 'react'
import { withTheme } from '../context/ThemeProvider'

const Main = (props) => {
    return (
        <main className={`main-${props.theme}`}>
            <h1>Click to Change Theme</h1>
            <button onClick={props.changeTheme}>Click Me</button>
        </main>
    )
}

export default withTheme(Main)