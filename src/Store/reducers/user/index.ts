import { SET_USER, UserActionsTypes } from "../../actions/user/types";
import { User } from "./types";

const defaultState : User = {
     name:'',
     timestamp: Date.now(),
     userID:0
}

const userReducer = (state = defaultState, action: UserActionsTypes): User => {
    switch (action.type) {
        case SET_USER:
            let {user} = action
            return{
                ...state,
                ...user
            }
        default:
            return state;
    }
}

export default userReducer;