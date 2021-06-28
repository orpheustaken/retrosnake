applyDefaultSettings()

export const VOL = getSetting('VOL')
export const SNAKE_VELOCITY = getSetting('SNAKE_VELOCITY') 
export const EXPANSION_RATE = getSetting('EXPANSION_RATE')

function getSetting(element) {
    const setting = {
        volume: Number(localStorage.getItem('Volume')),
        snake_velocity: Number(localStorage.getItem('Snake Velocity')),
        expansion_rate: Number(localStorage.getItem('Expansion Rate')),
    }

   switch (element) {
        case 'VOL': return setting.volume
        case 'SNAKE_VELOCITY': return setting.snake_velocity
        case 'EXPANSION_RATE': return setting.expansion_rate
   }
}

function applyDefaultSettings() {
    let tmp = localStorage.getItem('Volume')
    if (tmp == null) setDefaults()

    console.log('Tip: Settings can be changed in Local Storage\nThe new configuration is going to be applied once the game is restarted')
}

function setDefaults() {
    localStorage.setItem('Volume', 1)
    localStorage.setItem('Snake Velocity', 15)
    localStorage.setItem('Expansion Rate', 1)
}