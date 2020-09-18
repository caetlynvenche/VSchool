

let largeDiv = document.getElementById("largeDiv")

const start = () => {
    axios.get("https://api.vschool.io/caetlyn/todo/")
    .then(response => {
        console.log(response.data)
        loadPage(response)})
    .catch(error => console.log(error))

}

start()



const loadPage = (arr) => {
    for (let i = 0; i < arr.data.length; i++) {
        //create
        let todoContain = document.createElement("div")
        let h2 = document.createElement("h2")
        let checkMe = document.createElement("input")
        let describe = document.createElement("p")
        let price = document.createElement("p")
        let img = document.createElement("img")
        let deleteBtn = document.createElement("button")

        //edit
        h2.textContent = arr.data[i].title
        checkMe.type = "checkbox"
        describe.textContent = arr.data[i].description
        price.textContent = "$" + arr.data[i].price
        img.src = arr.data[i].imgUrl
        deleteBtn.textContent = "DELETE"

        if (arr.data[i].completed) {
            h2.classList.toggle("completedTask")
            checkMe.checked = true
        }
        

        checkMe.addEventListener("click", () => {
            h2.classList.toggle ("completedTask")
            console.log(i)
            updateChecks(arr.data[i]) 
        })

        deleteBtn.addEventListener("click", () => {
            // deletePiece(arr.data[i])
            axios.delete(`https://api.vschool.io/caetlyn/todo/${arr.data[i]._id}`)
            .then(response => {
                console.log(response)
                todoContain.style.display = "none"
            })
            .catch(error => console.log(error))
        })

        //append
        todoContain.appendChild(h2)
        todoContain.appendChild(checkMe) 
        todoContain.appendChild(describe)
        todoContain.appendChild(price)
        todoContain.appendChild(img)
        todoContain.appendChild(deleteBtn)

        largeDiv.appendChild(todoContain)
    }

}

//POST


document.postForm.addEventListener("submit", (e)=> {
    e.preventDefault()

    let newToDo = {
    title: document.postForm.title.value,
    description: document.postForm.description.value,
    price: document.postForm.price.value,
    imgUrl: document.postForm.img.value,
    completed: false
    }
console.log(newToDo)
    axios.post("https://api.vschool.io/caetlyn/todo/", newToDo)
    .then(response => console.log(response))
    .catch(error => console.log(error))

})

//PUT
//checked

const updateBoxToComplete = {
    completed: true
}

const updateBoxToNotDone = {
    completed: false
}

const updateChecks = (todo) => {
    if (todo.completed) {
    console.log("you reached me")
    axios.put(`https://api.vschool.io/caetlyn/todo/${todo._id}`, updateBoxToNotDone)
    .then(response => {
        console.log(response)
        console.log("yes to no")
        todo.completed = false

    })
    .catch(error => console.log(error))
} else {
    console.log("you reached the other me")
    axios.put(`https://api.vschool.io/caetlyn/todo/${todo._id}`, updateBoxToComplete)
    .then(response => {
        console.log(response)
        console.log("no to yes")
        todo.completed = true
    })
    .catch(error => console.log(error))
}

}


