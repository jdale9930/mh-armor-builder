import {react, useState, useEffect} from "react"
import {connect} from "react-redux";
import axios from "axios"
import "./myArmorSets.css"
import ArmorDisplay from "../armorDisplay/armorDisplay"


const ArmorSetDisplay = (props) => {
    const [display, setDisplay] = useState("Info")
    const [collapsed, setCollapsed] = useState(false)
    const [head, setHead] = useState([])
    const [torso, setTorso] = useState([])
    const [arms, setArms] = useState([])
    const [waist, setWaist] = useState([])
    const [leg, setLegs] = useState([])
    const [talisman, setTalisman] = useState()
    const [skills, setSkills] = useState([
        {skill: props.skill1, value: props.skill1Value},
        {skill: props.skill2, value: props.skill2Value},
        {skill: props.skill3, value: props.skill3Value},
        {skill: props.skill4, value: props.skill4Value},
        {skill: props.skill5, value: props.skill5Value},
        {skill: props.skill6, value: props.skill6Value},
        {skill: props.skill7, value: props.skill7Value},
        {skill: props.skill8, value: props.skill8Value},
        {skill: props.skill9, value: props.skill9Value},
        {skill: props.skill10, value: props.skill10Value},
        {skill: props.skill11, value: props.skill11Value},
        {skill: props.skill12, value: props.skill12Value},
        {skill: props.skill13, value: props.skill13Value},
        {skill: props.skill14, value: props.skill14Value},
        {skill: props.skill15, value: props.skill15Value},
        {skill: props.skill16, value: props.skill16Value},
    ])
        const weaponNoSpace = props.weapon.replace(/\s+/g, '');
        skills.sort((a, b) =>(a.value < b.value) ? 1 :
        (a.value === b.value)? ((a.skill > b.skill) ? 1 : -1): -1)

     async function getArmor(){   
        let results = await axios.get(`/armor/search?name=${props.head}&skill=&slots=%&piece=`)
        setHead(results.data.data)
        results = await axios.get(`/armor/search?name=${props.torso}&skill=&slots=%&piece=`)
        setTorso(results.data.data)
        results = await axios.get(`/armor/search?name=${props.arms}&skill=&slots=%&piece=`)
        setArms(results.data.data)
        results = await axios.get(`/armor/search?name=${props.waist}&skill=&slots=%&piece=`)
        setWaist(results.data.data)
        results = await axios.get(`/armor/search?name=${props.legs}&skill=&slots=%&piece=`)
        setLegs(results.data.data)
     }    
    return(
    <>
        <div style = {{margin: "auto"}}>
            <div className = "armorsetNameDisplay">
                <img className = "displayIcon" src={"/images/" + weaponNoSpace + ".png"}alt = {`${props.piece}`}/>
                <div className = "armorsetName">{props.name}</div> 
                {collapsed === true ? <button className = "collapseButton" onClick = {()=>{setCollapsed(false)}}>Expand</button> :
                <button className = "collapseButton "onClick = {()=>{setCollapsed(true)}}>Collapse</button>}
            </div>
            <button style = {{width: "33%", marginLeft: "2px"}}onClick = {()=>{setDisplay("Info")}}>Info</button>
            <button style = {{width: "33%"}}onClick = {()=>{setDisplay("Armor"); getArmor()}}>Armor</button>
            <button style = {{width: "33%"}}>View in Armor Maker</button>
            {collapsed === false &&
            display === "Info" &&
            <div className = "armorsetDisplay">
                <div style = {{width: "200px"}}>
                    <b>Weapon: </b>
                    <div>{props.weapon}</div>
                    <b>Description:</b>
                    <div>{props.description}</div>
            
                <div style = {{display: "flex", marginTop: "8px"}}>
                    <div>
                    <b>Total Stats:</b>
                    <div style = {{border: "1px solid black", width: "190px"}}>
                        <div className = "skillRow">
                            <div className = "skillRow1">Defense:</div>
                            <div className = "skillRow2">{props.defense}</div>
                        </div>
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
                        <div className = "skillRow">
                            <div className = "skillRow1">Dragon Res:</div>
                            <div className = "skillRow2">{props.dragonRes}</div>
                        </div>
                    </div>
                    </div>
                <div style = {{marginLeft: "5px"}}>
                    <b>Total Skills:</b>
                    <div style = {{width: "300px", display: "flex", flexFlow: "row wrap"}}>
                    {skills.map((v, idx)=>{
                        if(v.value > 0){return(<div className = "skillRowDisplay">
                        <div className = "skillName">{v.skill}</div><div className = "skillValue">{v.value}</div>
                        </div>)}})}
                    </div>
                </div>
                </div>
                </div>
            </div>
            }
        </div>
        {collapsed === false && display === "Armor" &&
        <div>
                {head.length > 0 && 
                head.map((v)=>
                <ArmorDisplay
                key = {v.armor_id}
                none = {false}
                name = {v.name}
                piece = {v.piece}
                class = {v.class}
                slot1 = {v.slot1}
                slot2 = {v.slot2}
                slot3 = {v.slot3}
                skill1 = {v.skill1}
                skill1Value = {v.skill1Value}
                skill2 = {v.skill2}
                skill2Value = {v.skill2Value}
                skill3 = {v.skill3}
                skill3Value = {v.skill3Value}
                skill4 = {v.skill4}
                skill4Value = {v.skill4Value}
                defense = {v.defense}
                fireRes = {v.fireRes}
                waterRes = {v.waterRes}
                thunderRes = {v.thunderRes}
                iceRes = {v.iceRes}
                dragonRes = {v.dragonRes}
                rarity = {v.rarity}
                />)}
        </div>}
    </>
    )
}

function mapStateToProps(state){
    return{
        armor: state.armor,
        decos: state.decos,
        currentUser: state.user,
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
        LegsDecos: state.deco.LegsDecos,
        TalismanDecos: state.deco.TalismanDecos
    }
}

const mapDispatchToProps ={

}
export default connect(mapStateToProps, mapDispatchToProps)(ArmorSetDisplay);