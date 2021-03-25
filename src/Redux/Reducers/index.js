import {combineReducers} from "redux"
import ArmorReducer from "./ArmorReducer"

const rootReducer = combineReducers({
    armor: ArmorReducer,
})

export default rootReducer;