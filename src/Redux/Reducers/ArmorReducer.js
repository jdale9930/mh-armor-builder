// import {EQUIP_HEAD} from "../Actions";
// import {UNEQUIP_HEAD} from "../Actions";
// import {EQUIP_TORSO} from "../Actions";
// import {UNEQUIP_TORSO} from "../Actions";
// import {EQUIP_ARMS} from "../Actions";
// import {UNEQUIP_ARMS} from "../Actions";
// import {EQUIP_WAIST} from "../Actions";
// import {UNEQUIP_WAIST} from "../Actions";
// import {EQUIP_LEGS} from "../Actions";
// import {UNEQUIP_LEGS} from "../Actions";
// import {EQUIP_TALISMAN} from "../Actions";
// import {UNEQUIP_TALISMAN} from "../Actions";
import {CLEAR_ARMOR} from "../Actions"
import {EQUIP_ARMOR} from "../Actions";
import {UNEQUIP_ARMOR} from "../Actions";

const initialState = {
    head: "None",
    torso: "None",
    arms: "None",
    waist: "None",
    legs: "None",
    talisman: 0
}

export default function ArmorReducer(state = initialState, action){
    switch(action.type){
        case EQUIP_ARMOR:
            if(action.piece === "head"){
                return({...state, head: action.armor})}
            if(action.piece === "torso"){
                return({...state, torso: action.torso})}
            if(action.piece === "arms"){
                return({...state, arms: action.arms})}
            if(action.piece === "waist"){
                return({...state, waist: action.waist})}
            if(action.piece === "legs"){
                return({...state, legs: action.legs})}
            if(action.piece === "talisman"){
                return({...state, talisman: action.talisman})}
            return state;
        case UNEQUIP_ARMOR:
            if(action.piece === "head"){
                return({...state, head: "None"})}
            if(action.piece === "torso"){
                return({...state, torso: "None"})}
            if(action.piece === "arms"){
                return({...state, arms: "None"})}
            if(action.piece === "waist"){
                return({...state, waist: "None"})}
            if(action.piece === "legs"){
                return({...state, legs: "None"})}
            if(action.piece === "talisman"){
                return({...state, talisman: "None"})}
            return state;
        case CLEAR_ARMOR:
            return({...state,
                head: "None",
                torso: "None", arms:
                "None", waist: "None",
                legs: "None",
                talisman: "None"})        
        default:
            return state;
    }
}
