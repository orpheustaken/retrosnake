import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
import { vol } from './settings.js'
import { recordScore } from './score.js'

const eat = new Audio('/assets/sound/eat.mp3')
eat.volume = vol

let food = getRandomFoodPosition()
const EXPANSION_RATE = 1

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        eat.play()
        food = getRandomFoodPosition()
        recordScore()
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