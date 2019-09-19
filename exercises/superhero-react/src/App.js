import React, {Component} from 'react'
import data from './data.json'
import './styles/styles.css'
import Hero from './components/Hero'


class App extends Component {
    // constructor () {
    //     super()
    // }

    clickMe = (data) => {
        alert(data)
    }

    render() {
        const mappedHeros = data.map((test, i) => {
            return (
                <Hero  btns={this.clickMe} key={i} heroName={test.name} img={test.imageName} catchPhrase={test.catchPhrase}/>
            )
            
        })
        return (
            <>
                {mappedHeros}
            </>
        )
    }
    
}

export default App