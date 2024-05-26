import { VOL, EXPANSION_RATE } from './settings.js'
import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
import { updateScore } from './score.js'

const EAT = new Audio('src/assets/sound/eat.mp3')
EAT.volume = VOL

let food = getRandomFoodPosition()

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        EAT.load()
        EAT.play()
        food = getRandomFoodPosition()
        updateScore()
    }
}
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}