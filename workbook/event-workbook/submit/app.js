// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function


let formResult = document.getElementById("submit-me")

formResult.addEventListener("submit", function(e){
    e.preventDefault()
    const firstName = document.getElementById("name").value 
    const age = document.getElementById("age").value
    alert(firstName + " is " + age + " years old.")
})


