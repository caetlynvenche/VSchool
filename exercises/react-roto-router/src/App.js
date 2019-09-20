import React, {Component} from 'react'
import { Switch, Route, withRouter} from 'react-router-dom'
import Home from './Home'

class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component= {Home} >Home</Route>
                    <Route path="/About">About</Route>
                </Switch>
            </>
        )
    }
    
}

export default withRouter(App)