import React from 'react'

const Users = ({users}) => {
    var i = 0
    return (
        <ul id="users">
            <li>Connected users:</li>
            {users.map(user => 
                <li key={i++}>{user}</li>
            )}
        </ul>
    )
}

export default Users