export const writeCookie = (key, value, days) => {
    let date = new Date()
        days = days || 365
        date.setDate(date.getDate() + days)
    let cookie = document.cookie = key + "=" + value + ";  expires=" + date.toGMTString() + "; path=/"
        return cookie
}

export const writeGameCookie = (key, user, days) => {
    let value = user.gameDetails
    let date = new Date()
        days = days || 365
        date.setDate(date.getDate() + days) 
    let cookie = document.cookie = key + "=" + value + ";  expires=" + date.toGMTString() + "; path=/"
        return cookie
}
