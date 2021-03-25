import {React, useState, useEffect} from "react"
import "./armorDisplay.css"
import {connect} from "react-redux";
import {equipArmor, unequipArmor, clearArmor} from "../../Redux/Actions"

const ArmorDisplay = (props) => {
    const [skill1, setSkill1] = useState([]);
    const [skill2, setSkill2] = useState([]);
    const [skill3, setSkill3] = useState([]);
    const [skill4, setSkill4] = useState([]);
    const [slotsDisplay, setSlotsDisplay] = useState("---")
    const [equipped, setEquipped] = useState()
    
    useEffect(()=>{
        if(props.none === false){
            let splitSkill1 = props.skill1.split(":");
            setSkill1(splitSkill1)
            let splitSkill2 = props.skill2.split(":");
            setSkill2(splitSkill2)
            let splitSkill3 = props.skill3.split(":");
            setSkill3(splitSkill3)
            let splitSkill4 = props.skill3.split(":");
            setSkill4(splitSkill4)
            let slotLine = "---"
            let i = 0
            for(i = 0; i < props.slots; i++){
                slotLine =slotLine.replace("-","0")
                setSlotsDisplay(slotLine)
            }
    }},[])

    useEffect(()=>{
        if(props.headState !== props.name && props.torsoState !== props.name &&
            props.armsState !== props.name && props.waistState !== props.name &&
            props.legsState !== props.name){
                setEquipped(true)
            }
        else{
            setEquipped(false)
        }
    },[props.armor])
    if(props.none === false)
    {return(
        <div className = "armorDisplayContainer">
            <div className = "armorInfoDisplay">
                <div>
                    <img src={"/images/" + props.type + ".png"}alt = {`${props.type}`}></img>
                </div>
                <div>
                    {props.name}
                </div>
                <div>
                    Defense: {props.defense}
                </div>
                <div>
                    Slots: {slotsDisplay}
                </div>
                
                {equipped !== false ? <button onClick ={()=>{
                    props.equipArmor(props.name, props.type);
                    console.log(props.headState)
                }}>Equip</button>:
                <button onClick = {()=>{
                    props.unequipArmor(props.type)
                }}>Unequip</button>}
            </div>
            <div className = "skillDisplay">
                {props.skill1 !== ":" && <div className = "skillRow">
                    <div className = "skillRow1">{skill1[0]}</div>
                    <div className = "skillRow2">{skill1[1]}</div>
                </div>}
                {props.skill2 !== ":" && <div className = "skillRow">
                    <div className = "skillRow1">{skill2[0]}</div>
                    <div className = "skillRow2">{skill2[1]}</div>
                </div>}
                {props.skill3 !== ":" && <div className = "skillRow">
                    <div className = "skillRow1">{skill3[0]}</div>
                    <div className = "skillRow2">{skill3[1]}</div>
                </div>}
                {props.skill4 !== ":" && <div className = "skillRow">
                    <div className = "skillRow1">{skill4[0]}</div>
                    <div className = "skillRow2">{skill4[1]}</div>
                </div>}

            </div>
            <div className = "skillDisplay">
                <div className = "skillRow">
                    <div className = "skillRow1">Fire Res:</div>
                    <div>{props.fireRes}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Water Res:</div>
                    <div>{props.waterRes}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Thunder Res:</div>
                    <div>{props.thunderRes}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Ice Res:</div>
                    <div>{props.iceRes}</div>
                </div>
                <div className = "skillRow"  style = {{borderBottom: "0px solid black"}}>
                    <div className = "skillRow1">Dragon Res:</div>
                    <div>{props.dragonRes}</div>
                </div>
            </div>
        </div>
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
    }
}

const mapDispatchToProps ={
    equipArmor,
    unequipArmor,
    clearArmor
}
export default connect(mapStateToProps, mapDispatchToProps)(ArmorDisplay);