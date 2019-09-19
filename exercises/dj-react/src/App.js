import React, {Component} from 'react'
import './scss/styles.css'
import ButtonGroup from './ButtonGroup'
import ColorSquares from './ColorSquares'



class App extends Component {
  constructor (){
    super()

    this.state = {
      box1:"radial-gradient(white, gray)",
      box2:"radial-gradient(white, gray)",
      box3: "radial-gradient(white, gray)",
      box4: "radial-gradient(white, gray)"
    }
  }

  btn1 = () => {
    if (this.state.box1 ===  "radial-gradient(white, gray)") {
      this.setState(prevState => ({
        box1:"radial-gradient(gray, black)",
        box2:"radial-gradient(gray, black)",
        box3: "radial-gradient(gray, black)",
        box4: "radial-gradient(gray, black)" 
      }))
    } else {
      this.setState(prevState => ({
        box1:"radial-gradient(white, gray)",
        box2:"radial-gradient(white, gray)",
        box3: "radial-gradient(white, gray)",
        box4: "radial-gradient(white, gray)" 
      }))
    }

    
  }

  btn2 = () => {
    this.setState(prevState => ({
      box1: "radial-gradient( violet, purple)",
      box2: "radial-gradient( violet, purple)"
    }))
  }

  btn3 = () => {
    this.setState(prevState => ({
      box3: "radial-gradient(rgb(92, 92, 248), rgb(1, 1, 105))"
    }))
  }

  btn4 = () => {
    this.setState(prevState => ({
      box4: "radial-gradient(rgb(92, 92, 248), rgb(1, 1, 105))"
    }))
  }

  btn5 = () => {
    this.setState(prevState => ({
      box1: "radial-gradient(pink, rgb(165, 99, 110))"
    }))
  }

  btn6 = () => {
    this.setState(prevState => ({
      box2: "radial-gradient(rgb(247, 247, 163), rgb(194, 194, 3))",
      box3: "radial-gradient(rgb(247, 247, 163), rgb(194, 194, 3))"
    }))
  }

  btn7 = () => {
    this.setState(prevState => ({
      box3: "radial-gradient(rgb(247, 95, 95), rgb(177, 0, 0))"
    }))
  }

  btn8 = () => {
    this.setState(prevState => ({
      box4: "radial-gradient(rgb(14, 196, 14), rgb(1, 71, 1))",
      box2: "radial-gradient(rgb(14, 196, 14), rgb(1, 71, 1))"
    }))
  }

  render() {
    return (
      <main>
        <ButtonGroup 
        button1={this.btn1} 
        button2={this.btn2} 
        button3={this.btn3} 
        button4={this.btn4}
        button5={this.btn5}
        button6={this.btn6}
        button7={this.btn7}
        button8={this.btn8}/>
        <ColorSquares info={ this.state }/>
      </main>
    )
    
  }
}


export default App;
