import React, {Component} from 'react';
import axios from 'axios'
import UglyList from './components/UglyList'


class App extends Component {
  constructor() {
    super()
    this.state = {
      uglyThings: []
    }
  }

  componentDidMount(){
    this.getUglyThings()
  }

  getUglyThings = () => {
    axios.get("https://api.vschool.io/caetlyn/todo")
    .then(res => {
      this.setState({
      uglyThings: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <UglyList uglyList={this.state.uglyThings}/>
      </div>
    )
  }
  
};

export default App;
