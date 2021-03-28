import {CLEAR_ALL_DECOS} from "../Actions"
import {CLEAR_DECOS_FROM_PIECE} from "../Actions"
import {EQUIP_DECO} from "../Actions";
import {UNEQUIP_DECO} from "../Actions";

const initialState = {
    HeadDecos: [],
    TorsoDecos: [],
    ArmsDecos: [],
    WaistDecos: [],
    LegsDecos: [],
    Talisman: 0
}

export default function DecorationReducer(state = initialState, action){
    switch(action.type){
        case EQUIP_DECO:
            if(action.piece === "Head")
            {return({...state, HeadDecos: [...state.HeadDecos, {deco: action.deco, slots: action.slots}]})}
            if(action.piece === "Torso")
            {return({...state, TorsoDecos: [...state.TorsoDecos, {deco: action.deco, slots: action.slots}]})}
            if(action.piece === "Arms")
            {return({...state, ArmsDecos: [...state.ArmsDecos, {deco: action.deco, slots: action.slots}]})}
            if(action.piece === "Waist")
            {return({...state, WaistDecos: [...state.WaistDecos, {deco: action.deco, slots: action.slots}]})}
            if(action.piece === "Legs")
            {return({...state, LegsDecos: [...state.LegsDecos, {deco: action.deco, slots: action.slots}]})}
            return state;
        case UNEQUIP_DECO:
            if(action.piece === "Head")
            {
                let filteredDecos = [...state.HeadDecos]
                let idx = filteredDecos.findIndex((v)=>v.deco === action.deco)
                filteredDecos.splice(idx,1)
                console.log(filteredDecos)
                return({...state, HeadDecos:[...filteredDecos]})}
            if(action.piece === "Torso")
            {
                let filteredDecos = [...state.TorsoDecos]
                let idx = filteredDecos.findIndex((v)=>v.deco === action.deco)
                filteredDecos.splice(idx,1)
                console.log(filteredDecos)
                return({...state, TorsoDecos:[...filteredDecos]})}
            
            if(action.piece === "Arms")
            {
                let filteredDecos = [...state.ArmsDecos]
                let idx = filteredDecos.findIndex((v)=>v.deco === action.deco)
                filteredDecos.splice(idx,1)
                console.log(filteredDecos)
                return({...state, ArmsDecos:[...filteredDecos]})}
            
            if(action.piece === "Waist")
            {
                let filteredDecos = [...state.WaistDecos]
                let idx = filteredDecos.findIndex((v)=>v.deco === action.deco)
                filteredDecos.splice(idx,1)
                console.log(filteredDecos)
                return({...state, WaistDecos:[...filteredDecos]})}

            if(action.piece === "Legs")
            {
                let filteredDecos = [...state.LegsDecos]
                let idx = filteredDecos.findIndex((v)=>v.deco === action.deco)
                filteredDecos.splice(idx,1)
                console.log(filteredDecos)
                return({...state, LegsDecos:[...filteredDecos]})}
        case CLEAR_DECOS_FROM_PIECE:
            if(action.piece = "Head")
            {return({...state, HeadDecos: []})}
            if(action.piece = "Torso")
            {return({...state, TorsoDecos: []})}
            if(action.piece = "Arms")
            {return({...state, ArmsDecos: []})}
            if(action.piece = "Waist")
            {return({...state, WaistDecos: []})}
            if(action.piece = "Legs")
            {return({...state, LegsDecos: []})}
            return state;
        default:
            return state;
    }}

