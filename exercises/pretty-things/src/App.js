import React, {Component} from 'react';
import axios from 'axios'
import List from './components/List'
import Form from './components/Form'


class App extends Component {
  constructor() {
    super()
    this.state = {
      things: [],
      title: "",
      description: "",
      imgUrl: ""
    }
  }

  componentDidMount(){
    this.getThings()
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newInfo = {
      title: this.state.title,
      description: this.state.description,
      imgUrl: this.state.imgUrl
    }

    axios.post("https://api.vschool.io/caetlyn/todo", newInfo)
    .then(res => {
      this.setState(prevState => ({
        things: [...prevState.things, res.data],
        title: "",
        description: "",
        imgUrl: ""
      }))
    })
    .catch(err => console.log(err))

    
  }

  deleteItem = (id) => {
    axios.delete(`https://api.vschool.io/caetlyn/todo/${id}`)
    .then(() => {
      this.setState(prevState => {
        const filteredArr = prevState.things.filter(thing => {
          return id !== thing._id
        })

        return {things: filteredArr}
      })
    }) 
    .catch(err => console.log(err))
  }

  handleEdit = () => {
    console.log("edit")
    //show edit form or hide edit form

  }

  handleEditSubmit = (e, id) => {
    e.preventDefault()
    console.log("edit submit")

    //how to i specify the parts that are being changed on the Thing that is being changed

    // axios.put(`https://api.vschool.io/caetlyn/todo/${id}`, )
    // .then(res=> console.log(res))
    // .catch(err => console.log(err))
  }

  getThings = () => {
    axios.get("https://api.vschool.io/caetlyn/todo")
    .then(res => {
      this.setState({
      things: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Form 
          title={this.state.title}
          description={this.state.description}
          imgUrl={this.state.imgUrl}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          
          />
          
        <List list={this.state.things} 
          deleteItem={this.deleteItem} 
          handleChange={this.handleChange}
          handleEditSubmit={this.handleEditSubmit}
        />
      </div>
    )
  }  
};

export default App;
