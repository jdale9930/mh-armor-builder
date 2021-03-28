import {CLEAR_ARMOR} from "../Actions"
import {EQUIP_ARMOR} from "../Actions";
import {UNEQUIP_ARMOR} from "../Actions";

const initialState = {
    Head: "None",
    Torso: "None",
    Arms: "None",
    Waist: "None",
    Legs: "None",
    Talisman: 0
}

export default function ArmorReducer(state = initialState, action){
    switch(action.type){
        case EQUIP_ARMOR:
            if(action.piece === "Head"){
                return({...state, Head: action.armor})}
            if(action.piece === "Torso"){
                return({...state, Torso: action.armor})}
            if(action.piece === "Arms"){
                return({...state, Arms: action.armor})}
            if(action.piece === "Waist"){
                return({...state, Waist: action.armor})}
            if(action.piece === "Legs"){
                return({...state, Legs: action.armor})}
            if(action.piece === "Talisman"){
                return({...state, Talisman: action.armor})}
            return state;
        case UNEQUIP_ARMOR:
            if(action.piece === "Head"){
                return({...state, Head: "None"})}
            if(action.piece === "Torso"){
                return({...state, Torso: "None"})}
            if(action.piece === "Arms"){
                return({...state, Arms: "None"})}
            if(action.piece === "Waist"){
                return({...state, Waist: "None"})}
            if(action.piece === "Legs"){
                return({...state, Legs: "None"})}
            if(action.piece === "Talisman"){
                return({...state, Talisman: "None"})}
            return state;
        case CLEAR_ARMOR:
            return({...state,
                Head: "None",
                Torso: "None",
                Arms: "None",
                Waist: "None",
                Legs: "None",
                Talisman: "None"})        
        default:
            return state;
    }
}
