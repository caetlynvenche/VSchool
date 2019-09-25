import React, {Component} from 'react'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import './styles/styles.css'

class App extends Component {
    render() {
        return (
            <>
                <Nav />
                <Main />
                <Footer />
            </>
        )
    }
    
}

export default App