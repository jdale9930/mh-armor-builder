export const EQUIP_DECO = "Equip deco"
export const UNEQUIP_DECO = "Unequip deco"
export const CLEAR_ALL_DECOS = "Clear decos"
export const CLEAR_DECOS_FROM_PIECE = "Clear decos from piece"

export function equipDeco(deco, slots, piece){
    console.log(deco)
    return{type: EQUIP_DECO, deco: deco, slots: slots, piece: piece}
}

export function unequipDeco(deco, decoSlots, piece, pieceSlots){
    return{type: UNEQUIP_DECO, deco: {deco, decoSlots}, piece: {piece, pieceSlots}}
}

export function clearDecosFromPiece(piece){
    return{type: CLEAR_DECOS_FROM_PIECE, piece: piece}
}
export function clearDecos(){
    return{type: CLEAR_ALL_DECOS}
}