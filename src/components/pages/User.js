import React from 'react'

const User = (props) => {
    return (
        <div>
            <h1>The User Page</h1>
            <div>User Name: {props.userName}</div>
        </div>
    )
}

export default User