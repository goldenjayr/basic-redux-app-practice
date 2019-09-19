import React from 'react'

const Main = (props) => {
    return(
        <div>
            <h1>Main Page</h1>
            <button onClick={() => props.changeUserName('Dongjeee')}>Change the Username</button>
        </div>
    )
}

export default Main