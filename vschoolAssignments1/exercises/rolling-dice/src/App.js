import React, {Component} from 'react'
import DiceBox from './DiceBox'
import './styles.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            d1: 0,
            d2: 0,
            d3: 0,
            d4: 0,
            d5: 0,
            count: 0
        }
    }

    randomRoll = () => {
        return Math.floor((Math.random() * (6)) + 1)
    }

    rollDice = () => {
        if (this.state.count === 3) {
            return (
                this.setState({
                    d1: 0,
                    d2: 0,
                    d3: 0,
                    d4: 0,
                    d5: 0,
                    count: 0
                })
            )
        }
        return (
            this.setState({
                d1: this.randomRoll(),
                d2: this.randomRoll(),
                d3: this.randomRoll(),
                d4: this.randomRoll(),
                d5: this.randomRoll(),
                count: this.state.count + 1
            })
        )
        
    }



    render () {
        return (
            <main>
                <button onClick={this.rollDice}>ROLL DICE</button>
                <DiceBox d1={this.state.d1} d2={this.state.d2} d3={this.state.d3} d4={this.state.d4} d5={this.state.d5} d6={this.state.d6}/>
            </main>
        )
    }
}

export default App