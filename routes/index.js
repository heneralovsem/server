const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const commentRouter = require('./commentRouter')
router.use('/user', userRouter)
router.use('/comments', commentRouter)

module.exports = router