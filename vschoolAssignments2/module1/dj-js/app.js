const box = document.getElementById("box")

const hover = () => {
    box.style.backgroundColor = "blue"
}

const onClick = () => {
    box.style.backgroundColor = "red"
}

const offClick = () => {
    box.style.backgroundColor = "yellow"
}

const dblClick = () => {
    box.style.backgroundColor = "green"
}

const mouseScroll = () => {
    box.style.backgroundColor = "orange"
}

const onKeyPress = (e) => {
    switch (e.which) {
        case 66:
            hover; //blue
            break
        case 82: 
            onClick(); //red
            break
        case 90:
            offClick(); //yellow
            break
        case 71:
            dblClick(); //green
            break
        case 79: 
            mouseScroll(); //orange
            break
    }
}

box.addEventListener('mousedown', onClick)
box.addEventListener('mouseup', offClick)
box.addEventListener('dblclick', dblClick)
box.addEventListener('mouseover', hover)
document.addEventListener('keydown', onKeyPress)
window.addEventListener('wheel', mouseScroll)
