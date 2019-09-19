import React, {useState} from 'react'

import Main from './pages/Main'
import User from './pages/User'

import {connect} from 'react-redux'

const App = (props) => {


    return(
        <div>
            <Main changeUserName={props.setUserName} />
            <User userName={props.userName} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userName: state.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserName: (name) => {
            dispatch({
                type: 'SET_NAME',
                payload: name
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
