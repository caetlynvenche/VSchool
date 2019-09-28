import React, { Component } from 'react'
import axios from 'axios'

const AdviceContext = React.createContext()

class AdviceProvider extends Component {
    constructor() {
        super()
        this.state = {
            savedImages: [],
            savedAdvice: [],
            randomAdvice: "",
            randomImage: "",
            adviceID: "",
            selectedImage: "test image",
            selectedAdvice: "test advice"
        }
    }

    componentDidMount() {
        this.getRandomAdvice()
        this.getRandomImage()
    }

    getRandomAdvice = () => {
        axios.get("	https://api.adviceslip.com/advice")
        .then(res => {
            this.setState({
                randomAdvice: res.data.slip.advice,
                adviceID: res.data.slip.slip_id
            })
        })
        .catch(err => console.log(err))
    }

    getRandomImage = () => {
        axios.get("https://picsum.photos/300/200")
        .then(res => {
            this.setState({
                randomImage: res.request.responseURL
            })
        })
        .catch(err => console.log(err))
    }

    handleRandom = () => {
        this.setState({
            randomAdvice: "",
            randomImage: "",
            adviceID: ""
        })
        this.getRandomImage()
        this.getRandomAdvice()
    }

    saveAdvice = () => {
        if (this.state.savedAdvice.some(obj => obj.id === this.state.adviceID)) {
                console.log("you already have it")
        } else {
            this.setState(prevState => ({
                savedAdvice: [...prevState.savedAdvice, {
                    text: this.state.randomAdvice,
                    id: this.state.adviceID
                    }]
            }))
        }
    }

    saveImage = () => {
        if (this.state.savedImages.some(obj => obj.id === this.state.randomImage)) {
            console.log("you already have it")
        } else {
            this.setState(prevState => ({
                savedImages: [...prevState.savedImages, {
                    img: this.state.randomImage,
                    id: this.state.randomImage
                }]
            }))
        }  
    }

    handleBlur = () => {
        console.log("bluuuuuurrr")
        if(this.state.randomImage.includes("?blur")) {
            this.setState(prevState => ({
                randomImage: prevState.randomImage.replace("?blur", "")
            }))
        } else {
            this.setState(prevState => ({
                randomImage: prevState.randomImage.concat("?blur")
            }))
        }
    }

    handleColor = () => {
        console.log("colooooooor")
        if(this.state.randomImage.includes("?grayscale")) {
            this.setState(prevState => ({
                randomImage: prevState.randomImage.replace("?grayscale", "")
            }))
        } else {
            this.setState(prevState => ({
                randomImage: prevState.randomImage.concat("?grayscale")
            }))
        }
    }

    handleDelete = (myTarget) => {
        this.setState(prev => {
            return {
                savedAdvice: prev.savedAdvice.filter(advice => advice.id !== myTarget)
            }
        })
    }

    handleDeleteImg = (myTarget) => {
        this.setState(prev => {
            return {
                savedImages: prev.savedImages.filter(img => img.id !== myTarget)
            }
        })
    }

    handleCopyAdvice = (myTarget) => {
        window.prompt("Copy to clipboard: Ctrl+C, Enter", myTarget)
    }  
    
    handleSelectedImage = () => {

    }

    handleSelectedAdvice = () => {

    }

    render() {
        return (
            <AdviceContext.Provider value={{
                savedImages: this.state.savedImages,
                savedAdvice: this.state.savedAdvice,
                randomAdvice: this.state.randomAdvice,
                adviceID: this.state.adviceID,
                randomImage: this.state.randomImage,
                handleRandom: this.handleRandom,
                saveAdvice: this.saveAdvice,
                saveImage: this.saveImage,
                handleDelete: this.handleDelete,
                handleDeleteImg: this.handleDeleteImg,
                handleBlur: this.handleBlur,
                handleColor: this.handleColor,
                handleCopyAdvice: this.handleCopyAdvice,
                selectedAdvice: this.state.selectedAdvice,
                selectedImage: this.state.selectedImage
            }}>
                {this.props.children}
            </AdviceContext.Provider>
        )
    }
}

export const withAdvice = C => props => (
    <AdviceContext.Consumer>
        {value => <C {...value} {...props} />}
    </AdviceContext.Consumer>
)

export default AdviceProvider