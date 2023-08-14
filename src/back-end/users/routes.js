const { Router } = require("express");
const userRouter = Router()
const { addUser, updateUser, login, deleteUser, saveGame } = require("./controllers");
const { hashPass, checkPass, checkToken } = require("../middleware")

userRouter.post("/users/register", hashPass, addUser);
userRouter.put("/users/login", checkPass, login);
userRouter.put("/users/updateuser", checkToken, updateUser);
userRouter.put("/users/savegame", checkToken, saveGame);
userRouter.delete("/users/deleteuser", checkToken, deleteUser);

module.exports = userRouter;