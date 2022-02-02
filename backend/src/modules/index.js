const authRouter = require('./auth')
const userRouter = require('./user')
const videoRouter =require('./videos')
const accesRouter = require("./accessory")
module.exports = [
    authRouter,
    userRouter,
    videoRouter,
    accesRouter
]