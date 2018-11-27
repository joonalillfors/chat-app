const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const mongoose = require('mongoose')
const loginRouter = require('./routes/login')
const signupRouter = require('./routes/signup')
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('../client/build'))

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
mongoose.Promise = global.Promise

var users = []

app.use('/api/login', loginRouter)
app.use('/api/signup', signupRouter)

io.on('connection', (socket) => {
    console.log('a user connected')
    var name = ''

    socket.on('chat message', (msg) => {
        console.log(msg)
        io.sockets.emit('chat message', msg)
    })

    socket.on('connected', (user) => {
        name = user
        users.push(name)
        socket.broadcast.emit('chat message', user+' connected')
        io.sockets.emit('users', users)
    })

    socket.on('log', (user) => {
        if (users.includes(name)) {
            users[users.indexOf(name)]=user
        } else {
            users.push(user)
        }
        name = user
        socket.broadcast.emit('users', users)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
        if (name !== '') {
            socket.broadcast.emit('chat message', name+' disconnected')
            users.splice(users.indexOf(name), 1)
            io.sockets.emit('users', users)
        }
    })
})

http.on('close', () => {
    mongoose.connection.close()
})

http.listen(3001, () => {
    console.log('listening on: 3001')
})
