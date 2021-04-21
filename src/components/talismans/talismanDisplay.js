import {react, useEffect, useState} from "react"
import {connect} from "react-redux";
import "./talisman.css"
import {equipArmor, unequipArmor, clearArmor, clearDecosFromPiece} from "../../Redux/Actions"


const TalismanDisplay = (props) =>{
    const [equipped, setEquipped] = useState(false)
    const [collapsed, setCollapsed] = useState(false)

    useEffect(()=>{
        props.talisman.name === props.name ? setEquipped(true) : setEquipped(false)
    },[props.talisman])

return(
    <div>
        <div className = "talismanNameDisplay">
        <img className = "displayIcon" src="/images/Talisman_Icon_White.png" alt = "talisman"/>
                <div className = "armorName">{props.name}</div> 
                <div style = {{textAlign: "right"}}>Rarity: {props.rarity}</div>
                {collapsed === true ? <button className = "collapseButton" onClick = {()=>{setCollapsed(false)}}>Expand</button> :
                <button className = "collapseButton "onClick = {()=>{setCollapsed(true)}}>Collapse</button>}
        </div>
        {collapsed === false &&
        <div className = "talismanDisplay">
            {/* <img src = "/images/Talisman_Icon_White.png"></img> */}
            <div className = "talismanSkillDisplay">
                <div>Skills:</div>
                {props.skill1 !== "" && <div className = "skillRow" style = {{borderTop :"1px solid black"}}>
                    <div className = "skillRow1">{props.skill1}</div>
                    <div className = "skillRow2">{props.skill1Value}</div>
                </div>}
                {props.skill2 !== "" && <div className = "skillRow" style = {{borderTop :"1px solid black"}}>
                    <div className = "skillRow1">{props.skill2}</div>
                    <div className = "skillRow2">{props.skill2Value}</div>
                </div>}
            </div>
            <div className = "talismanSkillDisplay" style = {{width: "317px"}}>
                <div>Slots:</div>
                {props.slot1}-{props.slot2}-{props.slot3}
                {props.location === "BuilderSearch" &&
                props.talisman.Name !== props.name &&
                    <button onClick = {()=>{props.equipArmor(
                        {
                            Name: props.name,
                            Rarity: props.rarity,
                            Piece: "Talisman",
                            Slots: {
                                slot1: {value: props.slot1, isFilled: false}, 
                                slot2: {value: props.slot2, isFilled: false}, 
                                slot3: {value: props.slot3, isFilled: false}
                            },
                            Skills: {
                                skill1: {Skill: props.skill1, Value: props.skill1Value},
                                skill2: {Skill: props.skill2, Value: props.skill2Value},
                            },
                        }, "Talisman"   
                    )}}>Equip</button>}
                    {props.talisman.Name === props.name && props.location === "BuilderSearch" &&
                <button onClick = {()=>{props.unequipArmor("Talisman");
                props.clearDecosFromPiece("Talisman")}}>Unequip</button>}

                {props.talisman.Name === props.name && props.location === "Builder" &&
                <button onClick = {()=>{props.unequipArmor("Talisman");
                props.clearDecosFromPiece("Talisman")}}>Unequip</button>}
            </div>
        </div>}
        </div>
)
}

function mapStateToProps(state){
    return{
        talisman: state.armor.Talisman,
        currentUser: state.user
    }
}

const mapDispatchToProps ={
    equipArmor,
    unequipArmor,
    clearArmor,
    clearDecosFromPiece,
}
export default connect(mapStateToProps, mapDispatchToProps)(TalismanDisplay);