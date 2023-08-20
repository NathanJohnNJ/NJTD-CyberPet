export const writeGameCookie = async (pet, petName, difficulty) => {
    let date = new Date()
    let days = 28 || 365
        date.setDate(date.getDate() + days) 
    let cookie = document.cookie = "pet = " + pet + "; petName " + petName + "; diffficulty = " + difficulty  + ";  expires=" + date.toGMTString() + "; path=/"
    return cookie
}