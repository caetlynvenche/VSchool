import React, {Component} from 'react'
import axios from 'axios'

const CatContext = React.createContext()



class CatProvider extends Component {

    componentDidMount() {
        this.getFact()
    }

    getFact = () => {
        axios.get("https://cat-fact.herokuapp.com/facts")
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <CatContext.Provider>
                {this.props.children}
            </CatContext.Provider>
        )
    }
}

export const withAdvice = C => props => (
    <CatContext.Consumer>
        {value => <C {...value} {...props} />}
    </CatContext.Consumer>
)

export default CatProvider