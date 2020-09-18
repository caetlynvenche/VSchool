import React from 'react'
import { withTheme } from '../context/ThemeProvider'

const Main = (props) => {
    return (
        <main className={`main-${props.theme}`}>
            <h1>Click the button the toggle the other themes!!</h1>
            <select>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="violet">Violet</option>
            </select>
            <button onClick={props.changeTheme}>Change Theme</button>
        </main>
    )
}

export default withTheme(Main)