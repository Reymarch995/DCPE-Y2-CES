let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

if (sum < 21){
    console.log("do you want to draw a new card (Y/N): ")
} else if(sum === 21){
    console.log("Blackjack!")
}
else{
    console.log("You're out of the game!")
}