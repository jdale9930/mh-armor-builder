import {LOGIN} from "../Actions"
import {LOGOUT} from "../Actions"

const initialState = {
    username: "",
    id: ""
}

export default function UserReducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            console.log("login")
            return({...state, username: action.user.username, id: action.user.id})
        case LOGOUT:
            return({...state, username: initialState.username, id: initialState.id})
        default:
            return state;
    }
}