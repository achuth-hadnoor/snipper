import { User } from "../types";


export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const REMOVE_USER = 'REMOVE_USER';


export const set_user = () => ({
    type: SET_USER
})

export const update_user = (user: User) => ({
    type: UPDATE_USER,
    user
})

export const remove_user = (user: User) => ({
    type: REMOVE_USER,
    user
})