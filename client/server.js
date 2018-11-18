const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('build'))

var users = []

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

    socket.on('disconnect', () => {
        console.log('user disconnected')
        if (name !== '') {
            socket.broadcast.emit('chat message', name+' disconnected')
            users.splice(users.indexOf(name), 1)
            io.sockets.emit('users', users)
        }
    })
})

http.listen(3001, () => {
    console.log('listening on: 3001')
})