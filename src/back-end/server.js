const userRouter = require("./users/routes");
const cors = require("cors");
const express = require("express");
require("dotenv").config();
require("./db/connection");

const User = require("./users/model");

const app = express();
app.use(cors());
app.use(express.json())
app.use(userRouter);

const port = process.env.PORT ||  5001;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

app.get("/health", (req, res) => {
    res.status(200).json({message:"API is working"})
})
