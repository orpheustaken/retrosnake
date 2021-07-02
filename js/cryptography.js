export function encryption(input) {
    input += 32
    let cipher = String.fromCharCode(input)
    let pubkey = genPseudoHash(20) + cipher + genPseudoHash(14)
    return pubkey
}

export function decryption(output) {
    let privkey = output[20]
    let plainValue = privkey.charCodeAt(0) - 32
    return plainValue
}

function genPseudoHash(length) {
    let hash = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()_-+=`´{}^~:;.,/?|úáéèàùỳý\''
    let charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        hash += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return hash
}