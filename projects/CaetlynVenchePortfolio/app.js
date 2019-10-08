const nav = document.getElementById("nav")
const aTag = document.getElementById("aTag")
// const navItem = document.getElementsByClassName("navItem")

// aTag.textContent = hamMenu

// nav.appendChild(aTag)

aTag.addEventListener("click", () => {
    navItem1.classList.toggle("none")
    navItem2.classList.toggle("none")
    navItem3.classList.toggle("none")
    navItem4.classList.toggle("none")
    navItem5.classList.toggle("none")
    console.log("a tag")
})

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 600px)").matches) {
        navItem1.classList.remove("none")
        navItem2.classList.remove("none")
        navItem3.classList.remove("none")
        navItem4.classList.remove("none")
        navItem5.classList.remove("none")

        aTag.classList.add("none")
        nav.classList.remove("navList")

    } else {
        navItem1.classList.add("none")
        navItem2.classList.add("none")
        navItem3.classList.add("none")
        navItem4.classList.add("none")
        navItem5.classList.add("none")

        aTag.classList.remove("none")
        nav.classList.add("navList")
    }
    });