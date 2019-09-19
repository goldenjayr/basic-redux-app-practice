import React from 'react'
import {render} from 'react-dom'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import App from './components/App'  

const initialState = {
    userName: 'Jahara'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAME': 
            state = {
                ...state,
                userName: action.payload
            }
        break
    }
    return state
}

const store = createStore(reducer, initialState, applyMiddleware(logger))


render(
    <Provider store={store}>
         <App />
    </Provider>, 
    document.getElementById('root'))