import {CLEAR_ARMOR} from "../Actions"
import {EQUIP_ARMOR} from "../Actions";
import {UNEQUIP_ARMOR} from "../Actions";

const initialState = {
    Head: {
        Name: "None",
        Piece: "Head",
        ArmorSet: "None",
        Rarity: 0,
        Gender: "Male",
        Slots: {
            slot1: {Value: 0, isFilled: false}, 
            slot2: {Value: 0, isFilled: false}, 
            slot3: {Value: 0, isFilled: false}
        },
        Skills: {
            skill1: {Skill: "", Value: 0},
            skill2: {Skill: "", Value: 0},
            skill3: {Skill: "", Value: 0},
            skill4: {Skill: "", Value: 0}},
        Stats: {
            defense: 0,
            fireRes: 0,
            waterRes: 0,
            thunderRes: 0,
            iceRes: 0,
            dragonRes: 0
            },
        },
    Torso: {
        Name: "None",
        Piece: "Torso",
        ArmorSet: "None",
        Rarity: 0,
        Gender: "Male",
        Slots: {
            slot1: {value: 0, isFilled: false}, 
            slot2: {value: 0, isFilled: false}, 
            slot3: {value: 0, isFilled: false}
        },
        Skills: {
            skill1: {Skill: "", Value: 0},
            skill2: {Skill: "", Value: 0},
            skill3: {Skill: "", Value: 0},
            skill4: {Skill: "", Value: 0}},
        Stats: {
            defense: 0,
            fireRes: 0,
            waterRes: 0,
            thunderRes: 0,
            iceRes: 0,
            dragonRes: 0
        },
    },
    Arms: {
        Name: "None",
        Piece: "Arms",
        ArmorSet: "None",
        Rarity: 0,
        Gender: "Male",
        Slots: {
            slot1: {value: 0, isFilled: false}, 
            slot2: {value: 0, isFilled: false}, 
            slot3: {value: 0, isFilled: false}
        },
        Skills: {
            skill1: {Skill: "", Value: 0},
            skill2: {Skill: "", Value: 0},
            skill3: {Skill: "", Value: 0},
            skill4: {Skill: "", Value: 0}},
        Stats: {
            defense: 0,
            fireRes: 0,
            waterRes: 0,
            thunderRes: 0,
            iceRes: 0,
            dragonRes: 0
            },
        },
    
    Waist: {
        Name: "None",
        Piece: "Waist",
        ArmorSet: "None",
        Rarity: 0,
        Gender: "Male",
        Slots: {
            slot1: {value: 0, isFilled: false}, 
            slot2: {value: 0, isFilled: false}, 
            slot3: {value: 0, isFilled: false}
        },
        Skills: {
            skill1: {Skill: "", Value: 0},
            skill2: {Skill: "", Value: 0},
            skill3: {Skill: "", Value: 0},
            skill4: {Skill: "", Value: 0}},
        Stats: {
            defense: 0,
            fireRes: 0,
            waterRes: 0,
            thunderRes: 0,
            iceRes: 0,
            dragonRes: 0
        },
    },
    Legs: {
        Name: "None",
        Piece: "Legs",
        ArmorSet: "None",
        Rarity: 0,
        Gender: "Male",
        Slots: {
            slot1: {value: 0, isFilled: false}, 
            slot2: {value: 0, isFilled: false}, 
            slot3: {value: 0, isFilled: false}
        },
        Skills: {
            skill1: {Skill: "", Value: 0},
            skill2: {Skill: "", Value: 0},
            skill3: {Skill: "", Value: 0},
            skill4: {Skill: "", Value: 0}
        },
        Stats: {
            defense: 0,
            fireRes: 0,
            waterRes: 0,
            thunderRes: 0,
            iceRes: 0,
            dragonRes: 0
        },
    },
    Talisman: {
        Name: "None",
        Rarity: 0,
        Piece: "Talisman",
        Slots: {
            slot1: {value: 0, isFilled: false}, 
            slot2: {value: 0, isFilled: false}, 
            slot3: {value: 0, isFilled: false}
        },
        Skills: {
            skill1: {Skill: "", Value: 0},
            skill2: {Skill: "", Value: 0},
        },
    }      
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
                return({...state, Head: initialState.Head})}
            if(action.piece === "Torso"){
                return({...state, Torso: initialState.Torso})}
            if(action.piece === "Arms"){
                return({...state, Arms: initialState.Arms})}
            if(action.piece === "Waist"){
                return({...state, Waist: initialState.Waist})}
            if(action.piece === "Legs"){
                return({...state, Legs: initialState.Arms})}
            if(action.piece === "Talisman"){
                return({...state, Talisman: initialState.Talisman})}
            return state;
        case CLEAR_ARMOR:
            return({...state,
                Head: initialState.Head,
                Torso: initialState.Torso,
                Arms: initialState.Arms,
                Waist: initialState.Waist,
                Legs: initialState.Legs,
                Talisman: initialState.Talisman})        
        default:
            return state;
    }
}
