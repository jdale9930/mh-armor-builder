import {React, useState, useEffect} from "react"
import "./armorDisplay.css"
import {connect} from "react-redux";
import {equipArmor, unequipArmor, clearArmor, clearDecosFromPiece} from "../../Redux/Actions"

const ArmorDisplay = (props) => {
    const [equipped, setEquipped] = useState()
    const [collapsed, setCollapsed] = useState(false)
    
    useEffect(()=>{
        if(props.headState.Name !== props.name && props.torsoState.Name !== props.name &&
            props.armsState.Name !== props.name && props.waistState.Name !== props.name &&
            props.legsState.Name !== props.name){
                setEquipped(true)
            }
        else{
            setEquipped(false)
        }
         //eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.armor])
    if(props.none === false)
    {return(
        <>
        <div>
            <div className = "armorNameDisplay">
                <img className = "displayIcon" src={"/images/" + props.piece + ".png"}alt = {`${props.piece}`}/>
                <div className = "armorName">{props.name}</div> 
                <div style = {{textAlign: "right"}}>Rarity: {props.rarity}</div>
                {collapsed === true ? <button className = "collapseButton" onClick = {()=>{setCollapsed(false)}}>Expand</button> :
                <button className = "collapseButton "onClick = {()=>{setCollapsed(true)}}>Collapse</button>}
            </div>
        {collapsed === false &&
        <div className = "armorDisplayContainer">
            <div className = "armorInfoDisplay">
                <div>
                    Defense: {props.defense}
                </div>
                <div>
                    Slots: {props.slot1}-{props.slot2}-{props.slot3}
                </div>
                <div className = "row" style = {{marginTop: "5px"}}>
                    {equipped !== false ? <button className = "equipButton" onClick ={()=>{
                    props.equipArmor(
                        {
                            Name: props.name,
                            Piece: props.piece,
                            ArmorSet: props.armorSet,
                            Rarity: props.rarity,
                            Gender: props.gender,
                            Slots: {
                                slot1: {Value: props.slot1, isFilled: false}, 
                                slot2: {Value: props.slot2, isFilled: false}, 
                                slot3: {Value: props.slot3, isFilled: false}
                            },
                            Skills: {
                                skill1: {Skill: props.skill1, Value: props.skill1Value},
                                skill2: {Skill: props.skill2, Value: props.skill2Value},
                                skill3: {Skill: props.skill3, Value: props.skill3Value},
                                skill4: {Skill: props.skill4, Value: props.skill4Value}},
                            Stats: {
                                defense: props.defense,
                                fireRes: props.fireRes,
                                waterRes: props.waterRes,
                                thunderRes: props.thunderRes,
                                iceRes: props.iceRes,
                                dragonRes: props.dragonRes
                                },
                            },
                        props.piece);
                    // console.log(props.headState)
                    }}>Equip</button>:
                    <button className = "equipButton" onClick = {()=>{
                    props.unequipArmor(props.piece);
                    props.clearDecosFromPiece(props.piece);
                    }}>Unequip</button>}
                </div>
                
            </div>
            <div className = "skillDisplay">
                {props.skill1 !== "" && <div className = "skillRow">
                    <div className = "skillRow1">{props.skill1}</div>
                    <div className = "skillRow2">{props.skill1Value}</div>
                </div>}
                {props.skill2 !== "" && <div className = "skillRow">
                    <div className = "skillRow1">{props.skill2}</div>
                    <div className = "skillRow2">{props.skill2Value}</div>
                </div>}
                {props.skill3 !== "" && <div className = "skillRow">
                    <div className = "skillRow1">{props.skill3}</div>
                    <div className = "skillRow2">{props.skill3Value}</div>
                </div>}
                {props.skill4 !== "" && <div className = "skillRow">
                    <div className = "skillRow1">{props.skill4}</div>
                    <div className = "skillRow2">{props.skill4Value}</div>
                </div>}

            </div>
            <div className = "skillDisplay">
                <div className = "skillRow">
                    <div className = "skillRow1">Fire Res:</div>
                    <div className = "skillRow2">{props.fireRes}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Water Res:</div>
                    <div className = "skillRow2">{props.waterRes}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Thunder Res:</div>
                    <div className = "skillRow2">{props.thunderRes}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Ice Res:</div>
                    <div className = "skillRow2">{props.iceRes}</div>
                </div>
                <div className = "skillRow"  style = {{borderBottom: "0px solid black"}}>
                    <div className = "skillRow1">Dragon Res:</div>
                    <div className = "skillRow2">{props.dragonRes}</div>
                </div>
            </div>
        </div>
        }
        </div>
        </>
    )}
    else{return(
        <div className = "armorDisplayContainer">
            <div className = "armorInfoDisplay">
            </div>
            <div className = "skillDisplay">
            </div>
            <div className = "skillDisplay">
            </div>
        </div>
    )}
}

function mapStateToProps(state){
    return{
        armor: state.armor,
        headState: state.armor.Head,
        torsoState: state.armor.Torso,
        armsState: state.armor.Arms,
        waistState: state.armor.Waist,
        legsState: state.armor.Legs,
        talismanState: state.armor.Talisman,
        HeadDecos: state.deco.HeadDecos
    }
}

const mapDispatchToProps ={
    equipArmor,
    unequipArmor,
    clearArmor,
    clearDecosFromPiece,
}
export default connect(mapStateToProps, mapDispatchToProps)(ArmorDisplay);