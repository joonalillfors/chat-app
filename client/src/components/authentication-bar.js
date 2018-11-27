import React from 'react'

const AuthBar = ({app}) => {
    const {logged, username, password} = app.props
    if (logged) {
      return (
        <button id="users" onClick={app.logout}>Log out</button>
      )
    }

    return (
      <div>
        <form onSubmit={app.login}>
          Username:
          <input type="text" value={username} onChange={app.handleNameChange}></input>
          Password:
          <input type="password" value={password} onChange={app.handlePwChange}></input>
          <button>Log in</button>
        </form>

        <a href="/api/signup"><button>Register</button></a>
      </div>
    )
  }

  export default AuthBar