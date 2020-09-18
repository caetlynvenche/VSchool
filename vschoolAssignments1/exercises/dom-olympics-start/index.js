const header = document.getElementById("header")


const h2 = document.createElement("h2")
h2.innerHTML = "JavaScript Made This"
h2.className = "header"


header.appendChild(h2)

const p = document.createElement("p")

const name = document.createElement("span")
name.innerHTML = "Caetlyn"
name.classList = "name header"

const secondChild = document.createElement("span")
secondChild.textContent = "wrote the Javascript"
secondChild.className = "header"

header.appendChild(p)
header.appendChild(name)
header.appendChild(secondChild)


const messages = document.getElementsByClassName("message")

messages[0].textContent = "I need some help for the party."
messages[1].textContent = "What do you need me to do?"
messages[2].textContent = "Could you pick me up some dried rose petals?"
messages[3].textContent = "Sure, I have some from the last equinox!"


const container = document.getElementsByClassName("messages")[0]

const newMessage = document.createElement("div")
newMessage.classList = "message left"
newMessage.textContent = "This is New"

container.appendChild(newMessage)



const leftOne = document.getElementById("leftOne")
const leftTwo = document.getElementById("leftTwo")
const rightOne = document.getElementById("rightOne")
const rightTwo = document.getElementById("rightTwo")




const button = document.getElementById("clear-button")

button.addEventListener("click", function(e){
    leftOne.style.display = 'none'
    leftTwo.style.display = 'none'
    rightOne.style.display = 'none'
    rightTwo.style.display = 'none'
})

let dropDownChoice = document.getElementById("theme-drop-down")
