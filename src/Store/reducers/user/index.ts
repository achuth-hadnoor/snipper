import { Reducer, Action } from "redux";
import { SET_USER, UPDATE_USER, REMOVE_USER } from "../../actions/user"; 
import { userActionsTypes } from "../../actions/user/types";
import { User } from "../../actions/types";

const defaultState: User = {
    id: 0,
    name: '',
    uid: 0,
    darkmode: false
}

export const userReducer: Reducer<User, Action> = (state  = defaultState, action: userActionsTypes) => {
 
    switch (action.type) {
        case SET_USER:
            return state; 
        case UPDATE_USER:
            return state;
        case REMOVE_USER:
            return state
        default:
            return state;
    }
}