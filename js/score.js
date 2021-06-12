let score = 0
let formatScore = ('0' + 0).slice(-2)
let record = ('0' + Number(localStorage.getItem('record'))).slice(-2)

export function updateScore() {
    score++
    formatScore = ('0' + score).slice(-2)
    console.clear()
    console.log("score: " + score)
}

export function updateRecord() {
    if (score > record && record != 0) {
        console.log("you achieved a new record\n\n")
        console.log("previous record: " + record)
        newRecord()
        console.log("new record: " + record)
    }
    else if (record != 0) {
        console.log("\ncurrent record: " + record)
    }
    else {
        newRecord()
        console.log("\nfirst game? keep playing")
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