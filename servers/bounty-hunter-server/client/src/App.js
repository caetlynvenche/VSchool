import React from 'react'
import axios from 'axios'
import Bounty from './Bounty'
import Form from './Form'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            savedData: [],
            fName: "",
            lName: "",
            type: "",
            isLiving: true,
            bounty: 0
        }
    }

    componentDidMount() {
        this.getBounties()
    }

    handleChange = (e) => {
        //update changed inputs to state
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newInfo = {
            fName: this.state.fName,
            lName: this.state.lName,
            type: this.state.type,
            isLiving: true,
            bounty: this.state.bounty
        }

        axios.post("/bounty", newInfo)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    handleDelete = (id) => {
        console.log("delete", id)
        axios.delete(`/bounty/${id}`)
            .then(() => {
                this.setState({
                    fName: "",
                    lName: "",
                    type: "",
                    isLiving: true,
                    bounty: 0
                })
            })
            .catch(err => console.log(err))
    }

    handleEdit = (e) => {
        e.preventDefault()
        // axios.put(`/${id}`)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))

        console.log("handle edit here")
    }

    getBounties = () => {
        axios.get("/bounty")
        .then(res => {
            this.setState({
                savedData: res.data
            })
            console.log(this.state.savedData)
        })
        .catch(err => console.log(err))
    }


    render() {
        const mappedBounties = this.state.savedData.map(bounty => <Bounty key = {bounty._id} {...bounty} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />)
        return (
            <div>
                <Form {...this.state} handleChange={this.handleChange} handleSubmit = {this.handleSubmit} />
                { mappedBounties }
            </div>
        )
    }
}

export default App