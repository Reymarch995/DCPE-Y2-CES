// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let name = "Rayhan"
let greeting = "Welcome back, "
let welcomeEl = document.getElementById("welcome-el")

welcomeEl.innerHTML = greeting + name
console.log(welcomeEl)