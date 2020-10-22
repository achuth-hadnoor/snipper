import { User } from "../../reducers/user/types";
import { AppActionsTypes } from "../types";

export const setUser = (user : User) : AppActionsTypes =>({
    type: "SET_USER",
    user
})


export const updateUser = (user : User) : AppActionsTypes =>({
    type: "UPDATE_USER",
    user
})

export const removeUser = (user : User) : AppActionsTypes =>({
    type: "REMOVE_USER",
    user
})
 