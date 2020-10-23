import { createStore,combineReducers } from 'redux'
import {userReducer} from './reducers/user'
const rootReducers = combineReducers({
    user: userReducer
})

type AppState = ReturnType<typeof rootReducers>;

export const Store = createStore(rootReducers);