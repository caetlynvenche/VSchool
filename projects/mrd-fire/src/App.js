import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import './styles/styles.css'

const App = () => {
    return(
        <div>
            <Header />
            <Nav />
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/projects"><Projects /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/contact"><Contact /></Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App

// mrd-fire-services inc

// basic
// pages
//     home
//     projects past
//     contact
//     about / locations

// design 
//     red and black logo
//     maybe some green and brown