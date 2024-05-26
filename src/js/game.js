import { VOL, SNAKE_VELOCITY } from './settings.js'
import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
import { updateRecord, resetRecord, getRecord, htmlScore } from './score.js'

let lastRenderTime = 0
let gameOver = false

const DEAD = new Audio('./assets/sound/gameover.mp3')
DEAD.volume = VOL

const gameBoard = document.getElementById('game-board')

async function main(currentTime) {
    if (gameOver) {
        DEAD.play()
        updateRecord()
        await sleep(500)
        alert("GAME OVER")
        if (getRecord != 0) {
            if (!confirm('Keep your records?')) {
                resetRecord()
            }
        }
        if (confirm('Do you want to play again?')) {
            window.location = './'
        }
    return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_VELOCITY) return
    
    lastRenderTime = currentTime

    update()
    draw()
    htmlScore()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}