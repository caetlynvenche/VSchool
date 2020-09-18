let display = document.getElementById("number")
let btn = document.getElementById("btn")
let reset = document.getElementById("reset")

let count = Number(localStorage.getItem("count"))
display.textContent = count

reset.addEventListener("click", () => {
    localStorage.setItem("count", 0)
    count = Number(localStorage.getItem("count"))
    display.textContent = count 
})

btn.addEventListener("click", () => {
    count = Number(localStorage.getItem("count"))
    count += 1
    localStorage.setItem("count", count)
    display.textContent = count
    
})