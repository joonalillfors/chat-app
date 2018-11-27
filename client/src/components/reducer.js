import {socket} from '../index'

const changeName = (state, name) => {
    const newPersons = state.persons
    if (newPersons.includes(state.user)) {
        newPersons[newPersons.indexOf(state.user)] = name
    } else {
        newPersons.push(name)
    }
    return newPersons
}

const reducer = (
    state = {
        persons: [],
        messages: [],
        message: '',
        user: '',
        logged: false,
        username: '',
        password: '',
        loggedUser: null
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
        case 'TYPING_USERNAME':
            state = {...state, username: action.username}
            break
        case 'TYPING_PASSWORD':
            state = {...state, password: action.password}
            break
        case 'LOGIN':
            socket && socket.emit('log', action.user.username)
            state = {...state, persons: changeName(state, action.user.username), user: action.user.username, username: '', password: '', loggedUser: action.user, logged: true}
            break
        case 'LOGOUT':
            window.localStorage.removeItem('loggedUserJSON')
            socket && socket.emit('log', action.name)
            state = {...state, persons: changeName(state, action.name), user: action.name, loggedUser: null, logged: false}
            break
        case 'FAILED_LOGIN':
            state = {...state, username: '', password: ''}
            break
    }
    return state
}

export default reducer