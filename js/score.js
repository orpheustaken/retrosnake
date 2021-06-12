let score = 0
let formatScore = ('0' + 0).slice(-2)
let record = ('0' + Number(localStorage.getItem('record'))).slice(-2)

export function updateScore() {
    score++
    formatScore = ('0' + score).slice(-2)
}

export function updateRecord() {
    if (score > record) {
        newRecord()
    }
}

export function resetRecord() {
    localStorage.removeItem('record')
}

export function getRecord() {
    return record
}

export function htmlScore() {
    document.getElementById('score').innerHTML = formatScore
    document.getElementById('record').innerHTML = record
}

function newRecord() {
    localStorage.setItem('record', score)
    record = ('0' + Number(localStorage.getItem('record'))).slice(-2)
}