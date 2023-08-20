import { writeCookie, writeGameCookie } from "../common";

export const registerUser = async (firstName, lastName, username, email, password) => {
    try {
        const response = await fetch('http://localhost:5001/users/register',
        {method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
            "username": username,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
            "email": email
            })
        })
    const data = await response.json()
        console.log(data)
    } catch (error) {
       console.log(error)
    }
}

export const loginUser = async (username, password, setUser, setCookie, setToken) => {
    try {
        const response = await fetch('http://localhost:5001/users/login', {
            method: "PUT",
            headers: {"Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5001"},
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        const data = await response.json()
        console.log(data)
        const token = data.token
        const cookie = writeCookie("jwt_token", token, 28)
        setToken(token)
        setCookie(cookie)
        setUser(data.user)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const saveGame = async (username, setUser, token, gameDetails, user, setGameCookie) => {
    try {
        const response = await fetch('http://localhost:5001/users/savegame', {
            method: "PUT",
            headers: {"Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5001",
            "Authorization": "Bearer ", token},
            body: JSON.stringify({
                username : username,
                gameDetails: gameDetails
            })
        })
        const cookie = await writeGameCookie(user, gameDetails)
        setGameCookie(cookie)
        const data = await response.json()
        setUser(data.user)
        console.log(cookie)
    } catch (error) {
        console.error("error updating user", error);
    }
}

export const handleEdit = async (updateKey, updateValue, userID, setUser, token) => {
    try {
        const response = await fetch('http://localhost:5001/user/edit', {
            method: "PUT",
            headers: {"Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5001",
            "Authorization": "Bearer ", token},
            body: JSON.stringify({
                updateKey : updateKey,
                updateValue: updateValue,
            })
        })
        const data = await response.json()
        setUser(data.user);
    } catch (error) {
        console.error("error updating user", error);
    }
}

export const handleDelete = async (userID, setUser) => {
    try {
        const response = await fetch('http://localhost:5001/user/delete', {
            method: "DELETE",
            headers: {"Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5001"},
            body: JSON.stringify({
                id: userID
            })
        })
        const data = await response.json()
        console.log(data);
        setUser('');
    } catch (error) {
        console.error("error updating user", error);
    }
}