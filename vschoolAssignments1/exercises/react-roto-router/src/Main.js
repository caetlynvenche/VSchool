import React from 'react'
import { Switch, Route, withRouter} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" render={() => <Home />}></Route>
                <Route exact path="/about" render={() => <About />}></Route>
                <Route exact path="/services" render={() => <Services />}></Route>
                
            </Switch>
        </main>
    )
}

export default withRouter(Main)