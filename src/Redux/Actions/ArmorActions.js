
export const EQUIP_ARMOR = "Equip armor";
export const UNEQUIP_ARMOR = "Unequip armor";
export const CLEAR_ARMOR = "Clear armor";


//
export function equipArmor(armor, piece){
    return{type: EQUIP_ARMOR, armor: armor, piece: piece}
}

export function unequipArmor(piece){
    return{type: UNEQUIP_ARMOR, piece: piece}
}

export function clearArmor(){
    return{type: CLEAR_ARMOR}
}