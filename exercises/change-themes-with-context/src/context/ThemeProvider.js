import React, {Component} from 'react'

const ThemeContext = React.createContext()

class ThemeProvider extends Component {
    constructor() {
        super()
        this.state = {
            theme: "dark"
        }
    }

    changeTheme = () => {
        if (this.state.theme === "dark") {
            this.setState(() => ({
                theme: "light"
            }))
        } else if (this.state.theme === "light") {
            this.setState(() => ({
                theme: "violet"
            }))
        } else if (this.state.theme === "violet") {
            this.setState(() => ({
                theme: "dark"
            }))
        }


        //theme: prevState.theme === "dark" ? "light" : "dark"
    }

    render() {
        return (
            <ThemeContext.Provider value={{
                theme: this.state.theme,
                changeTheme: this.changeTheme
                }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export const withTheme = C => props => (
    <ThemeContext.Consumer>
        {value => <C {...value} {...props} />}
    </ThemeContext.Consumer>
)

export default ThemeProvider