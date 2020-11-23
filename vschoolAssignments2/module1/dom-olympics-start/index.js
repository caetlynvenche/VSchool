const header = document.getElementById('header')
header.classList.add('header')

const headerH1 = document.createElement('h1')
headerH1.textContent = "Javascript Made This!!"
const headerH2 = document.createElement('h2')
const headerSpan = document.createElement('h2')
headerSpan.classList.add('name')
headerSpan.textContent = 'Caetlyn'
headerH2.appendChild(headerSpan)
const headerH2Second = document.createElement('h2')
headerH2Second.textContent = ' wrote the Javascript!'
headerH2.appendChild(headerH2Second)

header.appendChild(headerH1)
header.appendChild(headerH2)

const msgs = document.getElementsByClassName('message')
msgs[0].textContent = "I appreciate you."
msgs[1].textContent = "I appreciate you too!"
msgs[2].textContent = "What are you doing today?"
msgs[3].textContent = "Nothing really."

const clearButton = document.getElementById('clear-button')
const messagesDiv = document.getElementsByClassName('messages')

const clearText = () => {
    messagesDiv[0].innerHTML = ''
}

clearButton.onclick = () => clearText()

const themeDropDown = document.getElementById('theme-drop-down')
console.log(themeDropDown.value)

const rightMsgs = document.getElementsByClassName('right')
const leftMsgs = document.getElementsByClassName('left')

const blueBrown = () => {
    console.log(rightMsgs)
    for (let i = 0; i < rightMsgs.length; i++) {
        rightMsgs[i].style.backgroundColor = 'lightblue'
    }
    for (let i = 0; i < leftMsgs.length; i++) {
        leftMsgs[i].style.backgroundColor = 'burlywood'
    }
}

const redBlack = () => {
    for (let i = 0; i < rightMsgs.length; i++) {
        rightMsgs[i].style.backgroundColor = 'red'
    }
    for (let i = 0; i < leftMsgs.length; i++) {
        leftMsgs[i].style.backgroundColor = 'gray'
    }
}

// redBlack()