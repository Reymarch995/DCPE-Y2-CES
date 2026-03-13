let countEl = document.getElementById("count-el")
let count = 0

console.log(countEl)

function increment() {
    count++
    countEl.innerText = count
    // set countEl's innerText to the count
}


