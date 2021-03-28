import {React, useState, useEffect} from "react"
import "./decorationDisplay.css"
import {connect} from "react-redux";
import {equipDeco, unequipDeco} from "../../Redux/Actions"
import axios from "axios"

const DecorationDisplay = (props) => {
    const [skill1, setSkill1] = useState([]);
    const [skill2, setSkill2] = useState([]);
    const [decoValid, setDecoValid] = useState()
    const [slotCount, setSlotCount] = useState(0)
    const [armorSlots, setArmorSlots] = useState("")

    const [slotsDisplay, setSlotsDisplay] = useState("0--")
    useEffect(()=>{
            let splitSkill1 = props.skill1.split(":");
            setSkill1(splitSkill1)
            let splitSkill2 = props.skill2.split(":");
            setSkill2(splitSkill2)
            let slotLine = "0--"
            let i = 1
            for(i = 1; i < props.slots; i++){
                slotLine =slotLine.replace("-","0")
                setSlotsDisplay(slotLine)
            }
             //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        setDecoValid(false)
        setSlotCount(0)
        let scTotal = 0
        console.log("HeadDeco Length" + props.HeadDecos.length)
        for(let i = 0; i < props.HeadDecos.length; i++){
            scTotal = scTotal + props.HeadDecos[i].slots
            console.log(scTotal)
            //console.log("sc" + slotCount + "props slots" + props.HeadDecos[i].slots + "" +(slotCount + props.HeadDecos[i].slots))
            // setSlotCount(scTotal)
        }
        setSlotCount(scTotal)
        console.log(slotCount, props.name)
        axios.get(`/armor/search?name=${props.headState}&skill=%&slots=%&type=Head`)
        .then(response =>{
            console.log(slotCount)
            if(response.data.data[0].slots >= (props.slots + slotCount)){
                setDecoValid(true)
                setArmorSlots(response.data.data[0].slots);
            }
            else{
                setArmorSlots(response.data.data[0].slots);
                //console.log("armor slots",armorSlots, "math", slotCount + props.slots, "response", response.data.data[0].slots)
            }
        })
         //eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.headState, props.HeadDecos,])
    return(
        <>
        {props.location !== "setDisplay" ? 
        <div className = "armorDisplayContainer">
            <div className = "armorInfoDisplay">
                <div>
                    <img className = "decorationPic" src={"/images/decoration.png"} alt = "Decoration"></img>
                </div>
                <div>
                    {props.name}
                </div>
                <div>
                    Slots: {slotsDisplay}
                </div>
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
            </div>

            <div className = "skillDisplay">
                <div>Add Decoration to:</div>
                {decoValid === true && slotCount + props.slots <= armorSlots&& <button
                onClick ={() =>{props.equipDeco(props.name, props.slots, "Head")}}>Head</button>}
                <button onClick = {()=>{console.log(props.HeadDecos)}}>HeadDecos</button>
                <button onClick = {()=>{console.log(decoValid)}}>DecoValid</button>
                <button onClick = {()=>{console.log(armorSlots)}}>ArmorSlots</button>
                <button>Legs</button>
                <button>Talisman</button>

            </div>
        </div>
        :
        <div className = "decorationDisplaySet" style = {{width: "100px;"}}>
            <div className = "armorInfoSet">
                <div className = "row">
                    <img className = "decorationPic" src={"/images/decoration.png"} alt = "Decoration"></img>
                    <button className = "equipButton">Unequip</button>
                </div>
                <div>
                    {props.name}
                </div>
                <div>
                    Slots: {slotsDisplay}
                </div>
            
            <div className = "skillDisplaySet" style = {{borderTop: "1px solid black"}}>
                {props.skill1 !== ":" && <div className = "skillRow">
                    <div className = "skillRow1Set">{skill1[0]}</div>
                    <div className = "skillRow2">{skill1[1]}</div>
                </div>}
                {props.skill2 !== ":" && <div className = "skillRow">
                    <div className = "skillRow1Set">{skill2[0]}</div>
                    <div className = "skillRow2">{skill2[1]}</div>
                </div>}
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
        HeadDecos: state.deco.HeadDecos
    }
}

const mapDispatchToProps ={
    equipDeco,
    unequipDeco,
}
export default connect(mapStateToProps, mapDispatchToProps)(DecorationDisplay);