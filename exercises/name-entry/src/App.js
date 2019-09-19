import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      names: []
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    alert(this.state.name)
    this.setState(prevState => ({
      name: "",
      names: [...prevState.names, this.state.name]
    }))
  }

  render() {
    const mappedNames = this.state.names.map((name, i) => {
      return <li key={i}>{name}</li> 
    })
    return (
      <>
        <h1>Hi</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
          <button>Click Me</button>
        </form>
        <h1>{this.state.name}</h1>
          <ul>
            {mappedNames}
          </ul>
      </>
    );
  }
  
}

export default App;
