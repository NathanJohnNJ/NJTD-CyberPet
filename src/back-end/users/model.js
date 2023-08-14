const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema({ 
    hunger: Number,
    thirst: Number,
    energy: Number,
    happiness: Number,
    difficulty: String
});

const gameDetailsSchema = new mongoose.Schema({
        character: String,
        characterName: String,
        level: Number,
        stats: statsSchema
  });

const userSchema = new mongoose.Schema ({
    userId: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    firstName: {
        type: String,
        required: true,
        unique: false
    },
    lastName: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gameDetails: [gameDetailsSchema],
    token: {
        type: String,
        required: false,
        unique: true
    }
});

const User = mongoose.model("user", userSchema);
module.exports = User;