const amounts = document.amounts
const totalCost = document.getElementById("totalCost")

amounts.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("hi")
    let mCost = (Number(amounts.goomba.value) * 5) + (Number(amounts.bobomb.value) * 7) + (Number(amounts.cheepcheep.value) * 11)

    totalCost.textContent = mCost
})