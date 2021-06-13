import { vol } from './settings.js'

let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

const move = new Audio('/assets/sound/movement.mp3')
move.volume = vol

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'k':
        case 'w':
        case 'W':
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            move.play()
            break
        case 'j':
        case 's':
        case 'S':
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            move.play()
            break
        case 'h':
        case 'a':
        case 'A':
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            move.play()
            break
        case 'l':
        case 'd':
        case 'D':
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            move.play()
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}