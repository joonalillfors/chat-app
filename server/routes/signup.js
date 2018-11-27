const signupRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

signupRouter.get('/', (req, res) => {
    res.sendFile(__dirname+'/static/signup.html')
})

signupRouter.post('/', async (req, res) => {
    try {
        const body = req.body
        
        const existingUser = await User.find({username: body.username})
        if (existingUser.length > 0) {
            return res.status(400).json({error: 'username is already taken'})
        }
        
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)
        
        const user = new User({
            username: body.username,
            name: body.name,
            passwordHash: passwordHash
        })

        const savedUser = await user.save()
        console.log(savedUser)
        res.redirect('../../')
    } catch (e) {
        console.log(e)
        res.status(500).json({error: 'something went wrong...'})
    }
})

module.exports = signupRouter