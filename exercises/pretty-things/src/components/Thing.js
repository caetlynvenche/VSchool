import React, {Component} from 'react';
import Form from './Form'
// import axios from 'axios';

// const Things = (props) => {
class Things extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      description: props.description,
      imgUrl: props.imgUrl,
      isEditing: false
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
}

  editToggler = () => {
    console.log("edit Toggler")
    this.setState(prevState => ({ 
      isEditing: !prevState.isEditing 
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const id = this.props._id
    const updates = {
      title: this.state.title,
      description: this.state.description,
      imgUrl: this.state.imgUrl
    }

    this.props.handleEdit(id, updates)
    this.editToggler()
  }

  render(){
    return (
      <div>     
        { !this.state.isEditing ?
        <>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <img src={this.props.imgUrl} alt={this.props.title} width={200}/>
        <button onClick={(e)=> this.props.deleteItem()}>Delete</button>
        <button onClick={this.editToggler}>Edit</button>
        </>

        :

        <>
            <div>I'm Editing</div>
            <Form title={this.state.title}
                description={this.state.description}
                imgUrl={this.state.imgUrl}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}/>
            <button onClick={this.editToggler}>Close</button>
        </> 
          
        }
      </div>
  );
  }
  
};

export default Things;