export const EQUIP_HEAD = "Equip head";
export const UNEQUIP_HEAD = "Unequip head";
export const EQUIP_TORSO = "Equip torso";
export const UNEQUIP_TORSO = "Unequip torso";
export const EQUIP_ARMS = "Equip arms";
export const UNEQUIP_ARMS = "Unequip arms";
export const EQUIP_WAIST = "Equip waist";
export const UNEQUIP_WAIST = "Unquip waist";
export const EQUIP_LEGS = "Equip legs";
export const UNEQUIP_LEGS = "Unequip legs";
export const EQUIP_TALISMAN = "Equip talisman";
export const UNEQUIP_TALISMAN = "Unequip talisman";
export const CLEAR_ARMOR = "Clear armor";

export function equipArmor(armor, piece){
    return{type: EQUIP_HEAD, armor: armor, piece: piece}
}

export function unequipArmor(piece){
    return{type: UNEQUIP_HEAD, piece: piece}
}

// export function equipTorso(torso){
//     return{type: EQUIP_TORSO, torso: torso}
// }

// export function unequipTorso(){
//     return{type: UNEQUIP_TORSO}
// }

// export function equipArms(arms){
//     return{type: EQUIP_ARMS, arms: arms}
// }

// export function unequipArms(){
//     return{type: UNEQUIP_ARMS}
// }

// export function equipWaist(waist){
//     return{type: EQUIP_WAIST, waist: waist}
// }

// export function unequipWaist(){
//     return{type: UNEQUIP_WAIST}
// }

// export function equipLegs(legs){
//     return{type: EQUIP_LEGS, legs: legs}
// }

// export function unequipLegs(){
//     return{type: UNEQUIP_LEGS}
// }

// export function equipTalisman(talisman){
//     return{type: EQUIP_TALISMAN, talisman: talisman}
// }

// export function unequipTalisman(){
//     return{type: UNEQUIP_TALISMAN}
// }

export function clearArmor(){
    return{type: CLEAR_ARMOR}
}