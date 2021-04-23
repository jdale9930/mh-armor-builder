import {CLEAR_ALL_DECOS} from "../Actions"
import {CLEAR_DECOS_FROM_PIECE} from "../Actions"
import {EQUIP_DECO} from "../Actions";
import {UNEQUIP_DECO} from "../Actions";

const initialState = {
    HeadDecos: {
        slot1: {Decoration: "None", Skill: {Name: "None", Value: 0}},
        slot2: {Decoration: "None", Skill: {Name: "None", Value: 0}},
        slot3: {Decoration: "None", Skill: {Name: "None", Value: 0}}
    },
    TorsoDecos: {
        slot1: {Decoration: "None", Skill: {Name: "None", Value: 0}},
        slot2: {Decoration: "None", Skill: {Name: "None", Value: 0}},
        slot3: {Decoration: "None", Skill: {Name: "None", Value: 0}}
    },
    ArmsDecos: {
        slot1: {Decoration: "None", Skill: {Name: "None", Value: 0}},
        slot2: {Decoration: "None", Skill: {Name: "None", Value: 0}},
        slot3: {Decoration: "None", Skill: {Name: "None", Value: 0}}
    },
    WaistDecos: {
        slot1: {Decoration: "None", Skill: {Name: "None", Value: 0}},
        slot2: {Decoration: "None", Skill: {Name: "None", Value: 0}},
        slot3: {Decoration: "None", Skill: {Name: "None", Value: 0}}
    },
    LegsDecos: {
        slot1: {Decoration: "None", Skill: {Name: "None", Value: 0}},
        slot2: {Decoration: "None", Skill: {Name: "None", Value: 0}},
        slot3: {Decoration: "None", Skill: {Name: "None", Value: 0}}
    },
    TalismanDecos: {
        slot1: {Decoration: "None", Skill: {Name: "None", Value: 0}},
        slot2: {Decoration: "None", Skill: {Name: "None", Value: 0}},
        slot3: {Decoration: "None", Skill: {Name: "None", Value: 0}}
    },
}

export default function DecorationReducer(state = initialState, action){
    switch(action.type){
        case EQUIP_DECO:
            if(action.piece === "Head"){
                if(action.slot === 1){
                    return({...state, HeadDecos: {...state.HeadDecos, slot1: action.deco}})
                }
                if(action.slot === 2){
                    return({...state, HeadDecos: {...state.HeadDecos, slot2: action.deco}})
                }
                if(action.slot === 3){
                    return({...state, HeadDecos: {...state.HeadDecos, slot3: action.deco}})
                }
            }

            if(action.piece === "Torso"){
                if(action.slot === 1){
                    return({...state, TorsoDecos: {...state.TorsoDecos, slot1: action.deco}})
                }
                if(action.slot === 2){
                    return({...state, TorsoDecos: {...state.TorsoDecos, slot2: action.deco}})
                }
                if(action.slot === 3){
                    return({...state, TorsoDecos: {...state.TorsoDecos, slot3: action.deco}})
                }
            }

            if(action.piece === "Arms"){
                if(action.slot === 1){
                    return({...state, ArmsDecos: {...state.ArmsDecos, slot1: action.deco}})
                }
                if(action.slot === 2){
                    return({...state, ArmsDecos: {...state.ArmsDecos, slot2: action.deco}})
                }
                if(action.slot === 3){
                    return({...state, ArmsDecos: {...state.ArmsDecos, slot3: action.deco}})
                }
            }

            if(action.piece === "Waist"){
                if(action.slot === 1){
                    return({...state, WaistDecos: {...state.WaistDecos, slot1: action.deco}})
                }
                if(action.slot === 2){
                    return({...state, WaistDecos: {...state.WaistDecos, slot2: action.deco}})
                }
                if(action.slot === 3){
                    return({...state, WaistDecos: {...state.WaistDecos, slot3: action.deco}})
                }
            }

            if(action.piece === "Legs"){
                if(action.slot === 1){
                    return({...state, LegsDecos: {...state.LegsDecos, slot1: action.deco}})
                }
                if(action.slot === 2){
                    return({...state, LegsDecos: {...state.LegsDecos, slot2: action.deco}})
                }
                if(action.slot === 3){
                    return({...state, LegsDecos: {...state.LegsDecos, slot3: action.deco}})
                }
            }

            if(action.piece === "Talisman"){
                if(action.slot === 1){
                    return({...state, TalismanDecos: {...state.TalismanDecos, slot1: action.deco}})
                }
                if(action.slot === 2){
                    return({...state, TalismanDecos: {...state.TalismanDecos, slot2: action.deco}})
                }
                if(action.slot === 3){
                    return({...state, TalsimanDecos: {...state.TalismanDecos, slot3: action.deco}})
                }
            }
            return state;


        case UNEQUIP_DECO:
            if(action.piece === "Head"){
                console.log("Head")
                if(action.slot === "1"){
                    return({...state, HeadDecos: {...state.HeadDecos, slot1: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
                if(action.slot === "2"){
                    return({...state, HeadDecos: {...state.HeadDecos, slot2: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
                if(action.slot === "3"){
                    return({...state, HeadDecos: {...state.HeadDecos, slot3: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
            }
            if(action.piece === "Torso"){
                console.log(state.TorsoDecos)
                if(action.slot === "1"){
                    console.log("slot 1")
                    return({...state, TorsoDecos: {...state.TorsoDecos, slot1: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
                if(action.slot === "2"){
                    return({...state, TorsoDecos: {...state.TorsoDecos, slot2: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
                if(action.slot === "3"){
                    return({...state, TorsoDecos: {...state.TorsoDecos, slot3: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
            }
            if(action.piece === "Arms"){
                if(action.slot === "1"){
                    return({...state, ArmsDecos: {...state.ArmsDecos, slot1: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
                if(action.slot === "2"){
                    return({...state, ArmsDecos: {...state.ArmsDecos, slot2: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
                if(action.slot === "3"){
                    return({...state, ArmsDecos: {...state.ArmsDecos, slot3: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
            }
            if(action.piece === "Waist"){
                if(action.slot === "1"){
                    return({...state, WaistDecos: {...state.WaistDecos, slot1: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
                if(action.slot === "2"){
                    return({...state, WaistDecos: {...state.WaistDecos, slot2: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
                if(action.slot === "3"){
                    return({...state, WaistDecos: {...state.WaistDecos, slot3: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
            }
            if(action.piece === "Legs"){
                if(action.slot === "1"){
                    return({...state, LegsDecos: {...state.LegsDecos, slot1: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
                if(action.slot === "2"){
                    return({...state, LegsDecos: {...state.LegsDecos, slot2: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
                if(action.slot === "3"){
                    return({...state, LegsDecos: {...state.LegsDecos, slot3: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
            }
            if(action.piece === "Talisman"){
                if(action.slot === "1"){
                    return({...state, TalismanDecos: {...state.TalismanDecos, slot1: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
                if(action.slot === "2"){
                    return({...state, TalismanDecos: {...state.TalismanDecos, slot2: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
                if(action.slot === "3"){
                    return({...state, TalismanDecos: {...state.TalismanDecos, slot3: {Decoration: "None", Skill: {Name: "None", Value: 0}}}})
                }
            }
            return state;
        case CLEAR_DECOS_FROM_PIECE:
            if(action.piece === "Head")
            {return({...state, HeadDecos: initialState.HeadDecos})}
            if(action.piece === "Torso")
            {return({...state, TorsoDecos: initialState.TorsoDecos})}
            if(action.piece === "Arms")
            {return({...state, ArmsDecos: initialState.ArmsDecos})}
            if(action.piece === "Waist")
            {return({...state, WaistDecos: initialState.WaistDecos})}
            if(action.piece === "Legs")
            {return({...state, LegsDecos: initialState.LegsDecos})}
            if(action.piece === "Talisman")
            {return({...state, TalismanDecos: initialState.TalismanDecos})}
            return state;
        default:
            return state;
    }}

