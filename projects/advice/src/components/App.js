import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom' 
import '../styles/styles.css'
import Nav from './Nav'
import Home from './Home'
import Advice from './Advice'
import Images from './Images'
import Canvas from './Canvas'
import Footer from './Footer'

const App = () => {
    return (
        <div className="page">
            <Nav />

            <div className="content">

            

            <Switch>
                <Route exact path="/"
                render={rProps => <Home {...rProps}/>}></Route>

                <Route path="/advice" render={rProps => <Advice {...rProps}/>}></Route>

                <Route path="/images" render={rProps => <Images {...rProps}/>}></Route>
                
                <Route path="/canvas" render={rProps => <Canvas {...rProps}/>}></Route>
            </Switch>
            </div>

            <Footer />
        </div>
    )
}

export default withRouter(App)