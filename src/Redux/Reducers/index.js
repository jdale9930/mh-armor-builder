import {combineReducers} from "redux"
import ArmorReducer from "./ArmorReducer"
import DecorationReducer from "./DecorationReducer"
import UserReducer from "./UserReducer"

const rootReducer = combineReducers({
    armor: ArmorReducer,
    deco: DecorationReducer,
    user: UserReducer
})

export default rootReducer;