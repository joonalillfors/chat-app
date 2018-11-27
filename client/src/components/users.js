import React from 'react'

const Users = ({users, user}) => {
    var i = 0
    return (
        <ul id="users">
            <li>Online users:</li>
            {users.map(name => 
                {if (name === user)
                    return <li key={i++}>{name} <span id='me'>(you)</span></li>
                else
                    return <li key={i++}>{name}</li>
                }
            )}
        </ul>
    )
}

export default Users