import React from 'react'

import Main from '../components/Main'
import User from '../components/User'

import {connect} from 'react-redux'


const App = (props) => {

    console.dir(props)

    return(
        <div>
            <Main />
            <User userName={props.userName} />
        </div>
    )
}

// we create a function that maps the state from the store to our Local props.... 
const mapStateToProps = (state) => {
    return {
        userName: state.userName
    }
}

export default connect(mapStateToProps)(App)
