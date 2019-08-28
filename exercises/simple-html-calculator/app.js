const addResult = document.getElementById("addResult")
const subResult = document.getElementById("subResult")
const multResult = document.getElementById("multResult")


const addForm = document.add
const subForm = document.subtract
const multForm = document.multiply



addForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let aResult = Number(addForm.addOne.value) + Number(addForm.addTwo.value)

    addResult.textContent = aResult
})

subForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let sResult = Number(subForm.subOne.value) - Number(subForm.subTwo.value)

    subResult.textContent = sResult
})

multForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let mResult = Number(multForm.multOne.value) * Number(multForm.multTwo.value)

    multResult.textContent = mResult
})