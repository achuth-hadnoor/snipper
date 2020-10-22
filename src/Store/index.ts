import {createStore, combineReducers} from 'redux'
import userReducer from './reducers/user'

export const rootReducer = combineReducers({
    user: userReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(
    rootReducer
)