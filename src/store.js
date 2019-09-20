import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import reducer, { initialState } from './reducers/userReducer'

export default createStore(reducer, initialState, applyMiddleware(logger))