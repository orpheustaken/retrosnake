import { VOL } from './settings.js'

let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

const MOVE = new Audio('src/assets/sound/movement.mp3')
MOVE.volume = VOL

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'k':
        case 'w':
        case 'W':
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            MOVE.play()
            break
        case 'j':
        case 's':
        case 'S':
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            MOVE.play()
            break
        case 'h':
        case 'a':
        case 'A':
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            MOVE.play()
            break
        case 'l':
        case 'd':
        case 'D':
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            MOVE.play()
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}