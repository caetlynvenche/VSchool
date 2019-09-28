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
        <>
            <Nav />

            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/advice" component={Advice}></Route>
                <Route path="/images" component={Images}></Route>
                <Route path="/canvas" component={Canvas}></Route>
            </Switch>


            <Footer />
        </>
    )
}

export default withRouter(App)