import { SET_USER, UPDATE_USER,REMOVE_USER } from "."; 

interface SET_USERACTION{
    type : typeof SET_USER 
}

interface UPDATE_USERACTION{
    type : typeof UPDATE_USER 
}

interface REMOVE_USERACTION{
    type : typeof REMOVE_USER  
}
export type userActionsTypes = SET_USERACTION |  UPDATE_USERACTION | REMOVE_USERACTION;