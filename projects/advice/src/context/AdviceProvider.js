import React, { Component } from 'react'
import axios from 'axios'

const AdviceContext = React.createContext()

class AdviceProvider extends Component {
    constructor() {
        super()
        this.state = {
            savedImages: JSON.parse(localStorage.getItem("savedImages")) || [],
            savedAdvice: JSON.parse(localStorage.getItem("savedAdvice")) || [],
            randomAdvice: "",
            randomImage: "",
            adviceID: "",
            selectedImage: "",
            selectedAdvice: ""
        }
    }

    componentDidMount() {
        this.getRandomAdvice()
        this.getRandomImage()
    }

    handleNav = () => {
        const nav = document.getElementById("nav")
        nav.classList.toggle("navOff")
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
            const savedAdvice = JSON.parse(localStorage.getItem("savedAdvice")) || []
            const newAdvice = {
                text: this.state.randomAdvice,
                id: this.state.adviceID
            }
            savedAdvice.push(newAdvice)
            localStorage.setItem("savedAdvice", JSON.stringify(savedAdvice))
            this.setState({savedAdvice})
        }
    }

    saveImage = () => {
        if (this.state.savedImages.some(obj => obj.id === this.state.randomImage)) {
            console.log("you already have it")
        } else {

            const savedImages = JSON.parse(localStorage.getItem("savedImages")) || []
            const newImage = {
                img: this.state.randomImage,
                id: this.state.adviceID
            }
            savedImages.push(newImage)
            localStorage.setItem("savedImages", JSON.stringify(savedImages))
            this.setState({savedImages})
        }  
    }

    handleBlur = () => {
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
        const savedAdvice = this.state.savedAdvice.filter(advice => advice.id !== myTarget)

        localStorage.setItem("savedAdvice", JSON.stringify(savedAdvice))

        this.setState({savedAdvice})
    }

    handleDeleteImg = (myTarget) => {

        const savedImages = this.state.savedImages.filter(img => img.id !== myTarget)
        localStorage.setItem("savedImages", JSON.stringify(savedImages))
        this.setState({savedImages})
    }

    handleCopyAdvice = (myTarget) => {
        window.prompt("Copy to clipboard: Ctrl+C, Enter", myTarget)
    }  
    
    handleSelectedImage = myTarget => {
        this.setState({
            selectedImage: myTarget.myImage
        })
    }

    handleSelectedAdvice = (myTarget) => {
        this.setState({
            selectedAdvice: myTarget.test
        })
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
                handleSelectedAdvice: this.handleSelectedAdvice,
                handleSelectedImage: this.handleSelectedImage,
                selectedAdvice: this.state.selectedAdvice,
                selectedImage: this.state.selectedImage,
                handleNav: this.handleNav
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