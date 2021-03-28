import {React, useState, useEffect} from "react"
import "./decorationDisplay.css"
import {connect} from "react-redux";
import {equipDeco, unequipDeco} from "../../Redux/Actions"
import axios from "axios"

const DecorationDisplay = (props) => {
    const [skill1, setSkill1] = useState([]);
    const [skill2, setSkill2] = useState([]);
    const [headValid, setHeadValid] = useState()
    const [torsoValid, setTorsoValid] = useState()
    const [armsValid, setArmsValid] = useState()
    const [waistValid, setWaistValid] = useState()
    const [legsValid, setLegsValid] = useState()
    const [headCount, setHeadCount] = useState(0)
    const [torsoCount, setTorsoCount] = useState(0)
    const [armsCount, setArmsCount] = useState(0)
    const [waistCount, setWaistCount] = useState(0)
    const [legsCount, setLegsCount] = useState(0)
    const [headSlots, setHeadSlots] = useState("")
    const [torsoSlots, setTorsoSlots] = useState("")
    const [armsSlots, setArmsSlots] = useState("")
    const [waistSlots, setWaistSlots] = useState("")
    const [legsSlots, setLegsSlots] = useState("")

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
        setHeadValid(false)
        setHeadCount(0)
        let scTotal = 0
        //console.log("HeadDeco Length" + props.HeadDecos.length)
        for(let i = 0; i < props.HeadDecos.length; i++){
            scTotal = scTotal + props.HeadDecos[i].slots
            console.log(scTotal)
            //console.log("sc" + slotCount + "props slots" + props.HeadDecos[i].slots + "" +(slotCount + props.HeadDecos[i].slots))
            // setSlotCount(scTotal)
        }
        //console.log(scTotal + "scTotal")
        setHeadCount(scTotal)
        axios.get(`/armor/search?name=${props.headState}&skill=%&slots=%&type=Head`)
        .then(response =>{
            if(response.data.data[0].slots >= (props.slots + scTotal)){
                setHeadValid(true)
                setHeadSlots(response.data.data[0].slots);
                //console.log("true")
            }
            else{
                setHeadSlots(response.data.data[0].slots);
                //console.log("armor slots",headSlots, "math", headCount + 0, "response", response.data.data[0].slots)
            }
        })
         //eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.headState, props.HeadDecos,])

    useEffect(()=>{
        setTorsoValid(false)
        setTorsoCount(0)
        let scTotal = 0
        for(let i = 0; i < props.TorsoDecos.length; i++){
            scTotal = scTotal + props.TorsoDecos[i].slots
            console.log(scTotal)
        }
        setTorsoCount(scTotal)
        axios.get(`/armor/search?name=${props.torsoState}&skill=%&slots=%&type=Torso`)
        .then(response =>{
            if(response.data.data[0].slots >= (props.slots + scTotal)){
                setTorsoValid(true)
                setTorsoSlots(response.data.data[0].slots);
            }
            else{
                setTorsoSlots(response.data.data[0].slots);
            }
        })
         //eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.torsoState, props.TorsoDecos,])

    useEffect(()=>{
        setArmsValid(false)
        setArmsCount(0)
        let scTotal = 0
        for(let i = 0; i < props.ArmsDecos.length; i++){
            scTotal = scTotal + props.ArmsDecos[i].slots
            console.log(scTotal)
        }
        setArmsCount(scTotal)
        axios.get(`/armor/search?name=${props.armsState}&skill=%&slots=%&type=Arms`)
        .then(response =>{
            if(response.data.data[0].slots >= (props.slots + scTotal)){
                setArmsValid(true)
                setArmsSlots(response.data.data[0].slots);
            }
            else{
                setArmsSlots(response.data.data[0].slots);
            }
        })
         //eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.armsState, props.ArmsDecos,])

    useEffect(()=>{
        setWaistValid(false)
        setWaistCount(0)
        let scTotal = 0
        for(let i = 0; i < props.WaistDecos.length; i++){
            scTotal = scTotal + props.WaistDecos[i].slots
            console.log(scTotal)
        }
        setWaistCount(scTotal)
        axios.get(`/armor/search?name=${props.waistState}&skill=%&slots=%&type=Waist`)
        .then(response =>{
            if(response.data.data[0].slots >= (props.slots + scTotal)){
                setWaistValid(true)
                setWaistSlots(response.data.data[0].slots);
            }
            else{
                setWaistSlots(response.data.data[0].slots);
            }
        })
         //eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.waistState, props.WaistDecos,])

    useEffect(()=>{
        setLegsValid(false)
        setLegsCount(0)
        let scTotal = 0
        for(let i = 0; i < props.LegsDecos.length; i++){
            scTotal = scTotal + props.LegsDecos[i].slots
            //console.log(scTotal)
        }
        setLegsCount(scTotal)
        axios.get(`/armor/search?name=${props.legsState}&skill=%&slots=%&type=Legs`)
        .then(response =>{
            if(response.data.data[0].slots >= (props.slots + scTotal)){
                setLegsValid(true)
                setLegsSlots(response.data.data[0].slots);
            }
            else{
                setLegsSlots(response.data.data[0].slots);
            }
        })
         //eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.legsState, props.LegsDecos,])


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
                {headValid === true && headCount + props.slots <= headSlots&& <button
                onClick ={() =>{props.equipDeco(props.name, props.slots, "Head")}}>Head</button>}
                {torsoValid === true && torsoCount + props.slots <= torsoSlots&& <button
                onClick ={() =>{props.equipDeco(props.name, props.slots, "Torso")}}>Torso</button>}
                {armsValid === true && armsCount + props.slots <= armsSlots&& <button
                onClick ={() =>{props.equipDeco(props.name, props.slots, "Arms")}}>Arms</button>}
                {waistValid === true && waistCount + props.slots <= waistSlots&& <button
                onClick ={() =>{props.equipDeco(props.name, props.slots, "Waist")}}>Waist</button>}
                {legsValid === true && legsCount + props.slots <= legsSlots&& <button
                onClick ={() =>{props.equipDeco(props.name, props.slots, "Legs")}}>Legs</button>}
                <button>Talisman</button>

            </div>
        </div>
        :
        <div className = "decorationDisplaySet" style = {{width: "100px;"}}>
            <div className = "armorInfoSet">
                <div className = "row">
                    <img className = "decorationPic" src={"/images/decoration.png"} alt = "Decoration"></img>
                    <button className = "equipButton" onClick={()=>{
                        console.log(props.name, props.type)
                        props.unequipDeco(props.name, props.type);
                        }}>Unequip</button>
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