import io from 'socket.io-client'

const socket = io('http://localhost:3001')

const confSocket = dispatch => {
    socket.on('chat message', msg => {
        dispatch({type: 'socket message', msg})
    })

    socket.on('users', users => {
        dispatch({type: 'users', users})
    })

    return socket
}

export default confSocket
