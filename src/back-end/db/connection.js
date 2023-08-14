require("dotenv").config();
const mongoose = require("mongoose");

const connection = async  () => {
    try {
        await mongoose.connect (
            // process.env.MONGO_URI
            "mongodb+srv://codesnj:brother1@cluster0.ir1xkr9.mongodb.net/?retryWrites=true&w=majority"
        )
    } catch (error) {
        console.log(error)
    }
    console.log("DB connection established.");
};

connection()