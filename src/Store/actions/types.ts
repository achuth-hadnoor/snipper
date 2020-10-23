import { userActionsTypes } from "./user/types";

export interface User{
    id:number,
    name:string,
    uid:number,
    darkmode:Boolean
}

export type AppActionTypes = userActionsTypes;// | SnipActionTypes