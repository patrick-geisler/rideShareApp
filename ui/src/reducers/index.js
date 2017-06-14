import {combineReducers} from 'redux'

import {LoggedInUserReducer as loggedInUser} from './LoggedInUserReducer'

export const reducers = combineReducers({
    loggedInUser
})
