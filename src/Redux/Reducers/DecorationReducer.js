import {CLEAR_ALL_DECOS} from "../Actions"
import {CLEAR_DECOS_FROM_PIECE} from "../Actions"
import {EQUIP_DECO} from "../Actions";
import {UNEQUIP_DECO} from "../Actions";

const initialState = {
    HeadDecos: [],
    TorsoDecos: [],
    Arms: [],
    Waist: [],
    Legs: [],
    Talisman: 0
}

export default function DecorationReducer(state = initialState, action){
    switch(action.type){
        case EQUIP_DECO:
            if(action.piece = "Head")
            {return({...state, HeadDecos: [...state.HeadDecos, {deco: action.deco, slots: action.slots}]})}
            return state;
        case CLEAR_DECOS_FROM_PIECE:
            if(action.piece = "Head")
            {return({...state, HeadDecos: []})}
            return state;
        default:
            return state;
    }}

