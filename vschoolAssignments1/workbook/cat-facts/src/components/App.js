import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Facts from './Facts'
import Images from './Images'

const App = () => {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/facts" component={Facts} />
                <Route path="/images" component={Images}/>
            </Switch>
        </div>
    )
}

export default App