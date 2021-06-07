import { update as updateFood } from './food.js'

let score = 0
let highscore = 0

export function recordScore() {
    if (updateFood) {
        score++
    }
    console.log("score: " + score)
    console.log("current highscore: " + highscore)
}

export function resetScore() {
    if (score > highscore) {
        highscore = score
        score = 0
        console.log("highscore: " + highscore)
    }
}