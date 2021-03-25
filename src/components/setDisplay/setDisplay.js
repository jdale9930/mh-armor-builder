import {React, useEffect, useState} from "react"
import {connect} from "react-redux";
import {equipArmor, unequipArmor, clearArmor} from "../../Redux/Actions"
import ArmorDisplay from "../armorDisplay/armorDisplay"
import axios from "axios"
import "./setDisplay.css"

const SetDisplay = (props) => {
    const [headLocal, setHeadLocal] = useState({})
    const [torsoLocal, setTorsoLocal] = useState({})
    const [armsLocal, setArmsLocal] = useState({})
    const [waistLocal, setWaistLocal] = useState({})
    const [legsLocal, setLegsLocal] = useState({})

    useEffect(()=>{
        axios.get(`/armor/search?name=${props.headState}&skill=%&slots=%&type=Head`)
        .then(response => setHeadLocal(response.data.data[0]))
        .then(console.log(headLocal))
        .then(console.log(headLocal.skill1))
    },[props.headState])

    useEffect(()=>{
        axios.get(`/armor/search?name=${props.torsoState}&skill=%&slots=%&type=Torso`)
        .then(response => setTorsoLocal(response.data.data[0]))
        .then(console.log(headLocal))
        .then(console.log(headLocal.skill1))
    },[props.torsoState])

    // useEffect(()=>{
    //     axios.get(`/armor/search?name=${props.armsState}&skill=%&slots=%&type=Arms`)
    //     .then(response => setArmsLocal(response.data.data[0]))
    // },[props.armsState])

    // useEffect(()=>{
    //     axios.get(`/armor/search?name=${props.waistState}&skill=%&slots=%&type=Waist`)
    //     .then(response => setWaistLocal(response.data.data[0]))
    // },[props.waistState])

    // useEffect(()=>{
    //     axios.get(`/armor/search?name=${props.legsState}&skill=%&slots=%&type=Legs`)
    //     .then(response => setLegsLocal(response.data.data[0]))
    // },[props.legsState])
    

    return (
        <div>
            <div className = "armorDisplay">
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Head.png" alt = "Head"/>
                    {props.headState === "None" ? <ArmorDisplay none = {true}/>:<ArmorDisplay
                key = {headLocal.armor_id}
                none = {false}
                name = {headLocal.name}
                type = {headLocal.type}
                class = {headLocal.class}
                skill1 = {headLocal.skill1}
                skill2 = {headLocal.skill2}
                skill3 = {headLocal.skill3}
                skill4 = {headLocal.skill4}
                defense = {headLocal.defense}
                fireRes = {headLocal.fireRes}
                waterRes = {headLocal.waterRes}
                thunderRes = {headLocal.thunderRes}
                iceRes = {headLocal.iceRes}
                dragonRes = {headLocal.dragonRes}
                slots = {headLocal.slots}
                rarity = {headLocal.rarity}
                />}
                </div>
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Torso.png" alt = "Torso"/>
                    {props.torsoState === "None" ? <ArmorDisplay none = {true}/>:<ArmorDisplay
                key = {torsoLocal.armor_id}
                none = {false}
                name = {torsoLocal.name}
                type = {torsoLocal.type}
                class = {torsoLocal.class}
                skill1 = {torsoLocal.skill1}
                skill2 = {torsoLocal.skill2}
                skill3 = {torsoLocal.skill3}
                skill4 = {torsoLocal.skill4}
                defense = {torsoLocal.defense}
                fireRes = {torsoLocal.fireRes}
                waterRes = {torsoLocal.waterRes}
                thunderRes = {torsoLocal.thunderRes}
                iceRes = {torsoLocal.iceRes}
                dragonRes = {torsoLocal.dragonRes}
                slots = {torsoLocal.slots}
                rarity = {torsoLocal.rarity}
                />}
                </div>
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Arms.png" alt = "Helmet"/>
                    {props.armsState === "None" ? <ArmorDisplay none = {true}/>:<ArmorDisplay
                key = {headLocal.armor_id}
                none = {false}
                name = {headLocal.name}
                type = {headLocal.type}
                class = {headLocal.class}
                skill1 = {headLocal.skill1}
                skill2 = {headLocal.skill2}
                skill3 = {headLocal.skill3}
                skill4 = {headLocal.skill4}
                defense = {headLocal.defense}
                fireRes = {headLocal.fireRes}
                waterRes = {headLocal.waterRes}
                thunderRes = {headLocal.thunderRes}
                iceRes = {headLocal.iceRes}
                dragonRes = {headLocal.dragonRes}
                slots = {headLocal.slots}
                rarity = {headLocal.rarity}
                />}
                </div>
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Waist.png" alt = "Helmet"/>
                    {props.waistState === "None" ? <ArmorDisplay none = {true}/>:<ArmorDisplay
                key = {headLocal.armor_id}
                none = {false}
                name = {headLocal.name}
                type = {headLocal.type}
                class = {headLocal.class}
                skill1 = {headLocal.skill1}
                skill2 = {headLocal.skill2}
                skill3 = {headLocal.skill3}
                skill4 = {headLocal.skill4}
                defense = {headLocal.defense}
                fireRes = {headLocal.fireRes}
                waterRes = {headLocal.waterRes}
                thunderRes = {headLocal.thunderRes}
                iceRes = {headLocal.iceRes}
                dragonRes = {headLocal.dragonRes}
                slots = {headLocal.slots}
                rarity = {headLocal.rarity}
                />}
                </div>
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Head.png" alt = "Helmet"/>
                    {props.legsState === "None" ? <ArmorDisplay none = {true}/>:<ArmorDisplay
                key = {headLocal.armor_id}
                none = {false}
                name = {headLocal.name}
                type = {headLocal.type}
                class = {headLocal.class}
                skill1 = {headLocal.skill1}
                skill2 = {headLocal.skill2}
                skill3 = {headLocal.skill3}
                skill4 = {headLocal.skill4}
                defense = {headLocal.defense}
                fireRes = {headLocal.fireRes}
                waterRes = {headLocal.waterRes}
                thunderRes = {headLocal.thunderRes}
                iceRes = {headLocal.iceRes}
                dragonRes = {headLocal.dragonRes}
                slots = {headLocal.slots}
                rarity = {headLocal.rarity}
                />}
                </div>
            </div>
        </div>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(SetDisplay);