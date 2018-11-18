import {socket} from '../index'

const reducer = (
    state = {
        persons: [],
        messages: [],
        message: '',
        user: ''
    },
    action
) => {
    switch (action.type) {
        case 'chat message':
            state = {...state, message: ''}
            socket && socket.emit('chat message', action.msg)
            break
        case 'username':
            state = {...state, user: action.name}
            socket && socket.emit('connected', state.user)
            break
        case 'typing':
            state = {...state, message: action.msg}
            break
        case 'socket message':
            state = {...state, messages: state.messages.concat(action.msg)}
            break
        case 'users':
            state = {...state, persons: action.users}
            break
    }
    return state
}

export default reducer