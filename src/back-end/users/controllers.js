const User = require("./model")
const jwt = require("jsonwebtoken");

const addUser = async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        })
        const successResponse = {
            message: `${req.body.name} successfully added.`,
            newUser: newUser
        }
        res.status(200).json(successResponse);
    } catch (error) {
        console.log(error);
    }
};

const login = async (req, res) => {
    try {
        const loggedInUser = await User.findOne(
            { username: req.body.username }
        )
        const token = await jwt.sign({id: loggedInUser.id}, process.env.SECRET);
        console.log ("********* token = ", token, "*********")
        const updatedUser = await User.updateOne(
            { username: req.body.username },
            { $set :{ token: token }}
        )
        const successResponse = {
            message: `${req.body.name} successfully logged in.`,
            user: updatedUser,
            token: token
        }
        res.status(200).json(successResponse);
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const updateKey = req.body.updateKey
        const updatedUser = await User.updateOne(
            { name: req.body.name },
            { $set :{ [updateKey]: req.body.updateValue }
        });
        const successResponse = {
            message: `${req.body.name}'s ${updateKey} field successfully updated to ${req.body.update}.`,
            updatedUser: updatedUser
        }
        res.send(successResponse);
    } catch (error) {
        console.log(error);
    } 
};

const saveGame = async (req, res) => {
    try {
        const savedGame = await User.updateOne(
            { username: req.body.username },
            { $set :{ gameDetails: req.body }
        });
        const successResponse = {
            message: `Game saved for ${req.body.name}.`,
            savedGame: savedGame
        }
        res.send(successResponse);
    } catch (error) {
        console.log(error)
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({
            name: req.body.name,
        })
        const successResponse = {
            message: `${req.body.name} successfully deleted.`,
            deletedUser: deletedUser
        }
        res.send(successResponse);
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    addUser,
    login,
    updateUser,
    saveGame,
    deleteUser
};