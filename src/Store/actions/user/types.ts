import { User } from "../../reducers/user/types";

export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const REMOVE_USER = 'REMOVE_USER';

interface SetUserActions {
    type: typeof SET_USER,
    user: User
}

interface UpdateUserActions {
    type: typeof UPDATE_USER,
    user: User
}
interface RemoveUserActions {
    type: typeof REMOVE_USER,
    user: User
}

export type UserActionsTypes = SetUserActions | UpdateUserActions | RemoveUserActions 