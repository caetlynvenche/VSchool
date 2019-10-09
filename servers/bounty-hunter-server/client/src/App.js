import React from 'react'
import axios from 'axios'
import Bounty from './Bounty'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            savedData: []
        }
    }

    componentDidMount() {
        this.getBounties()
    }

    getBounties = () => {
        axios.get("/bounty")
        .then(res => {
            console.log(res.data)
            this.setState({
                savedData: res.data
            })
        })
        .catch(err => console.log(err))
    }

    postBounty = (newPost) => {
        
    }


    render() {
        const mappedBounties = this.state.savedData.map(bounty => <Bounty key = {bounty._id} {...bounty} />)
        return (
            <div>
                { mappedBounties }
            </div>
        )
    }
}

export default App