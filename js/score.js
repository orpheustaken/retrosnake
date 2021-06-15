import { encryption, decryption } from './cryptography.js'

let score = 0
let record = recoverRecord()

export function updateScore() {
    score++
}

export function updateRecord() {
    if (score > record) storeNewRecord()
}

export function resetRecord() {
    localStorage.removeItem('record')
}

export function getRecord() {
    return record
}

export function htmlScore() {
    let formatScore = ('00' + score).slice(-3)
    let formatRecord = ('00' + record).slice(-3)
    document.getElementById('score').innerHTML = formatScore
    document.getElementById('record').innerHTML = formatRecord
}

function storeNewRecord() {
    localStorage.setItem('record', encryption(score))
}

function recoverRecord() {
    let hash = localStorage.getItem('record')
    let record = (hash == null) ? score : decryption(hash)
    return record
}