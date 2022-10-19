// Function to get random numbers for each levels
const computerRandom = (x, y) => {
    const num = Math.floor(Math.random() * (y - x + 1)) + 1
    return num
}

// Fuction to compare guesses
const compareGuess = (computer, user) => {
    if (computer === user) {
        return true
    } else {
        return false
    }
}

// Fuction for Game
const userGuess = (x, y, username) => {
    // start the game

    alert(`Welcome ${username} to Level ${y - 1} of Olakada's Guessing Game`)
    // get computer random
    const computer = computerRandom(x, y)
    // get user input
    const user = Number(prompt(`Choose a number between ${x} & ${y} : `))
    // Compare values
    const result = compareGuess(computer, user)
    if (result) {
        goal++
        points++
        alert(`Congrats...You chose ${user} and computer chose ${computer}, You have ${points} point(s)`)
    }
    if (!result) {
        alert(`Try again...You chose ${user} and computer chose ${computer}, You have ${points} points`)

    }
}

let points = 0
let goal = 2



window.addEventListener('load', () => {
    const username = prompt("Choose your Username: ")
    for (y = 1; y < 50; y++) {
        userGuess(1, goal, username)
    }
})