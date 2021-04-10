import {React, useState, useEffect} from "react"
import "./decorationDisplay.css"
import {connect} from "react-redux";
import {equipDeco, unequipDeco} from "../../Redux/Actions"
import axios from "axios"

const DecorationDisplay = (props) => {
    const [headValid, setHeadValid] = useState({valid: false, slot: 0})
    const [torsoValid, setTorsoValid] = useState({valid: false, slot: 0})
    const [armsValid, setArmsValid] = useState({valid: false, slot: 0})
    const [waistValid, setWaistValid] = useState({valid: false, slot: 0})
    const [legsValid, setLegsValid] = useState({valid: false, slot: 0})
    const [talismanValid, setTalismanValid] = useState({valid: false, slot: 0})


    useEffect(()=>{
        if(props.headState.Slots.slot3.Value >= props.slot &&
            props.HeadDecos.slot3.Decoration === "None"){
                setHeadValid({valid: true, slot: 3})
        }
        else if(props.headState.Slots.slot2.Value >= props.slot &&
            props.HeadDecos.slot2.Decoration === "None"){
                setHeadValid({valid: true, slot: 2})
        }
        else if(props.headState.Slots.slot1.Value >= props.slot &&
            props.HeadDecos.slot1.Decoration === "None"){
                setHeadValid({valid: true, slot: 1})
        }
        else{setHeadValid({valid: false, slot: 0})}
    },[props.headState, props.HeadDecos])

    useEffect(()=>{
        if(props.torsoState.Slots.slot3.Value >= props.slot &&
            props.TorsoDecos.slot3.Decoration === "None"){
                setTorsoValid({valid: true, slot: 3})
        }
        else if(props.torsoState.Slots.slot2.Value >= props.slot &&
            props.TorsoDecos.slot2.Decoration === "None"){
                setTorsoValid({valid: true, slot: 2})
        }
        else if(props.torsoState.Slots.slot1.Value >= props.slot &&
            props.TorsoDecos.slot1.Decoration === "None"){
                setTorsoValid({valid: true, slot: 1})
        }
        else{setTorsoValid({valid: false, slot: 0})}
    },[props.torsoState, props.TorsoDecos])

    useEffect(()=>{
        if(props.armsState.Slots.slot3.Value >= props.slot &&
            props.ArmsDecos.slot3.Decoration === "None"){
                setArmsValid({valid: true, slot: 3})
        }
        else if(props.armsState.Slots.slot2.Value >= props.slot &&
            props.ArmsDecos.slot2.Decoration === "None"){
                setArmsValid({valid: true, slot: 2})
        }
        else if(props.armsState.Slots.slot1.Value >= props.slot &&
            props.ArmsDecos.slot1.Decoration === "None"){
                setArmsValid({valid: true, slot: 1})
        }
        else{setArmsValid({valid: false, slot: 0})}
    },[props.armsState, props.ArmsDecos])

    useEffect(()=>{
        if(props.waistState.Slots.slot3.Value >= props.slot &&
            props.WaistDecos.slot3.Decoration === "None"){
                setWaistValid({valid: true, slot: 3})
        }
        else if(props.waistState.Slots.slot2.Value >= props.slot &&
            props.WaistDecos.slot2.Decoration === "None"){
                setWaistValid({valid: true, slot: 2})
        }
        else if(props.waistState.Slots.slot1.Value >= props.slot &&
            props.WaistDecos.slot1.Decoration === "None"){
                setWaistValid({valid: true, slot: 1})
        }
        else{setWaistValid({valid: false, slot: 0})}
    },[props.waistState, props.WaistDecos])

    useEffect(()=>{
        if(props.legsState.Slots.slot3.Value >= props.slot &&
            props.LegsDecos.slot3.Decoration === "None"){
                setLegsValid({valid: true, slot: 3})
        }
        else if(props.legsState.Slots.slot2.Value >= props.slot &&
            props.LegsDecos.slot2.Decoration === "None"){
                setLegsValid({valid: true, slot: 2})
        }
        else if(props.legsState.Slots.slot1.Value >= props.slot &&
            props.LegsDecos.slot1.Decoration === "None"){
                setLegsValid({valid: true, slot: 1})
        }
        else{setLegsValid(false)}
    },[props.legsState, props.LegsDecos])



    return(
        <>
        {props.location !== "setDisplay" ? 
        <>
        <div className = "decorationNameDisplay">
            <img className = "decorationPic" src={"/images/decoration.png"} alt = "Decoration"></img>
            <div className = "decoName">{props.name}</div>
            <div>Slot: {props.slot}</div>
        </div>
        <div className = "decorationDisplayContainer">
            <div className = "decoSkillDisplay">
                <div>Skills:</div>
                {props.skill1 !== ":" && <div className = "skillRow" style = {{borderTop :"1px solid black"}}>
                    <div className = "skillRow1">{props.skill1}</div>
                    <div className = "skillRow2">{props.skill1Value}</div>
                </div>}
            </div>

            <div className = "decoButtonDisplay">
                <div>Add Decoration to:</div>
                {headValid.valid === true ? <button className = "decoEquipButton"
                onClick ={() =>{props.equipDeco({Decoration: props.name, Skill: {Name: props.skill1, Value: props.skill1Value}}, "Head", headValid.slot)}}>Head</button>
                :<button className = "decoEquipButton" disabled>Head</button>}
                {torsoValid.valid === true ? <button className = "decoEquipButton"
                onClick ={() =>{props.equipDeco({Decoration: props.name, Skill: {Name: props.skill1, Value: props.skill1Value}}, "Torso", torsoValid.slot)}}>Torso</button>
                :<button className = "decoEquipButton" disabled>Torso</button>}
                {armsValid.valid === true ? <button className = "decoEquipButton"
                onClick ={() =>{props.equipDeco({Decoration: props.name, Skill: {Name: props.skill1, Value: props.skill1Value}}, "Arms", armsValid.slot)}}>Arms</button>
                :<button className = "decoEquipButton" disabled>Arms</button>}
                {waistValid.valid === true ? <button className = "decoEquipButton"
                onClick ={() =>{props.equipDeco({Decoration: props.name, Skill: {Name: props.skill1, Value: props.skill1Value}}, "Waist", waistValid.slot)}}>Waist</button>
                :<button className = "decoEquipButton" disabled>Waist</button>}
                {legsValid.valid === true ? <button className = "decoEquipButton"
                onClick ={() =>{props.equipDeco({Decoration: props.name, Skill: {Name: props.skill1, Value: props.skill1Value}}, "Legs", legsValid.slot)}}>Legs</button>
                :<button className = "decoEquipButton" disabled>Legs</button>}
                <button className = "decoEquipButton">Talisman</button>

            </div>
        </div>
        </>
        : props.name !== "None" ?
        <div className = "decorationDisplaySet">
            <div className = "armorInfoSet">
                <div className = "row">
                    <img className = "decorationPic" src={"/images/decoration.png"} alt = "Decoration"></img>
                    <button className = "equipButtonDeco" onClick={()=>{
                        console.log(props.name, props.piece, props.slot)
                        props.unequipDeco(props.piece, props.slot);
                        }}>Unequip</button>
                </div>
                <div>
                    {props.name}
                </div>
            
            <div className = "skillDisplaySet" style = {{borderTop: "1px solid black"}}>
                {props.skill1 !== ":" && <div className = "skillRow" style = {{width: "130px"}}>
                    <div className = "skillRow1Set">{props.skill1}</div>
                    <div className = "skillRow2">{props.skill1Value}</div>
                </div>}
            </div>
            </div>
        </div>
        :
        <div className = "decorationDisplaySetInactive">
            <div className = "armorInfoSet">
                <div className = "row">
                    <img className = "decorationPic" src={"/images/decoration.png"} alt = "Decoration"></img>
                </div>
                <div>
                    {props.name}
                </div>
        
            </div>
        </div>}
    </>)
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
        HeadDecos: state.deco.HeadDecos,
        TorsoDecos: state.deco.TorsoDecos,
        ArmsDecos: state.deco.ArmsDecos,
        WaistDecos: state.deco.WaistDecos,
        LegsDecos: state.deco.LegsDecos
    }
}

const mapDispatchToProps ={
    equipDeco,
    unequipDeco,
}
export default connect(mapStateToProps, mapDispatchToProps)(DecorationDisplay);