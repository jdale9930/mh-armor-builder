import {combineReducers} from "redux"
import ArmorReducer from "./ArmorReducer"
import DecorationReducer from "./DecorationReducer"

const rootReducer = combineReducers({
    armor: ArmorReducer,
    deco: DecorationReducer
})

export default rootReducer;