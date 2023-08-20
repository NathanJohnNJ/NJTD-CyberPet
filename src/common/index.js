export const writeCookie = (key, value, days) => {
    let date = new Date()
        days = days || 365
        date.setDate(date.getDate() + days)
    let cookie = document.cookie = key + "=" + value + ";  expires=" + date.toGMTString() + "; path=/"
        return cookie
}

export const writeGameCookie = async (user, gameDetails) => {
    let date = new Date()
    let days = 28 || 365
        date.setDate(date.getDate() + days) 
    let pet = gameDetails.pet
    let petName = gameDetails.petName
    let level = gameDetails.level
    let hunger = gameDetails.stats.hunger
    let thirst = gameDetails.stats.thirst
    let energy = gameDetails.stats.energy
    let happiness = gameDetails.stats.happiness
    let difficulty = gameDetails.stats.difficulty
    let cookie = document.cookie = "user=" + user + "; gameDetails=" + pet + "; " + petName + "; " + level + "; " + hunger + "; " + thirst + "; " + energy + "; " + happiness + ";" + difficulty  + ";  expires=" + date.toGMTString() + "; path=/"
    return cookie
}