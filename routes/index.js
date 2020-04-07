const express = require('express')
const router = express.Router();

const channelRouter = require('./channel')
const userRouter = require('./user')
// http://localhost:3000/
router.get('/', (req,res,next)=>{
    res.send('index page')
})

router.use('/channel',channelRouter)
router.use('/user',userRouter)

module.exports = router;