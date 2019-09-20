import React from 'react'
import {connect} from 'react-redux'

import {setUserName} from '../actions/userAction'

const Main = (props) => {

    console.dir(props.setUserName)
    return(
        <div>
            <h1>Main Page</h1>
            <button onClick={() => props.setUserName('Dongjeee')}>Change the Username</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        setUserName: (name) => {
            dispatch(setUserName(name))
        }
    }
}

export default connect(null, mapDispatchToProps)(Main)