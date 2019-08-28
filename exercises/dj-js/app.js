const square = document.getElementById("square")

square.addEventListener("mouseover",blue)

square.addEventListener("mousedown", red)

square.addEventListener("mouseup", yellow)

square.addEventListener("dblclick", green)

square.addEventListener("wheel", orange)


function blue(){
    square.style.backgroundColor = "blue"
}

function red(){
    square.style.backgroundColor = "red"
}

function yellow(){
    square.style.backgroundColor = "yellow"
}

function green(){
    square.style.backgroundColor = "green"
}

function orange(){
    square.style.backgroundColor = "orange"
}