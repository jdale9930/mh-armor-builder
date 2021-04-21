import {React, useEffect, useState} from "react"
import "./talisman.css"
import axios from "axios"
import TalismanDisplay from "./talismanDisplay"
import {connect} from "react-redux";
import skills from "../resources/skills"




const TalismanSearcher = (props) =>{
    const [talismans, setTalismans] = useState([])
    const [name, setName] = useState("")
    const [skill, setSkill] = useState("")
    const [slots, setSlot] = useState("")

    useEffect(()=>{searchTalismans()},[])
    async function searchTalismans(){
        let results = await axios.get(`/talisman/search?id=${props.currentUser.id}&name=${name}&skill=${skill}&slots=${slots}`,{user_id: props.currentUser.id})
        setTalismans(results.data.data)
    }
return (
<div className = "talismanSearchMain">
    <div className = "talismanSearchDisplay">
        <div>
            <div>Name:</div>
            <input type = "text" value = {name} onChange = {(evt)=>{setName(evt.target.value)}}></input>
        </div>
        <div>
            <div>Skill:</div>
            <select value = {skill} onChange = {(evt)=>{setSkill(evt.target.value)}}>
            <option value = ""></option>
            {skills.map((v)=><option value = {v} key = {v.name}>{v}</option>)}
            </select>
        </div>
        <div>
            <div>Slot:</div>
            <input type = "radio" id = "slot10" name = "slot1" value = {0}
            onChange = {(evt)=>{setSlot(evt.target.value)}}></input>
            <label for ="slot10">0</label>
            <input type = "radio" id = "slot11" name = "slot1" value = {1}
            onChange = {(evt)=>{setSlot(evt.target.value)}}></input>
            <label for ="slot11">1</label>
            <input type = "radio" id = "slot12" name = "slot1" value = {2}
            onChange = {(evt)=>{setSlot(evt.target.value)}}></input>
            <label for ="slot12">2</label>
            <input type = "radio" id = "slot13" name = "slot1" value = {3}
            onChange = {(evt)=>{setSlot(evt.target.value)}}></input>
            <label for ="slot13">3</label>
        </div>
        <button onClick ={()=>{searchTalismans()}}>Search</button>
    </div>
    <div className = "SearchDisplay">
    {talismans.length > 0 && talismans.map((v)=><TalismanDisplay
        name = {v.name}
        location = {props.location}
        rarity = {v.rarity}
        skill1 = {v.skill1}
        skill1Value = {v.skill1Value}
        skill2 = {v.skill2}
        skill2Value = {v.skill2Value}
        slot1 = {v.slot1}
        slot2 = {v.slot2}
        slot3 = {v.slot3}
    />)}
    </div>
</div>)

}

function mapStateToProps(state){
    return{
        currentUser: state.user
    }
}

const mapDispatchToProps ={
    
}
export default connect(mapStateToProps, mapDispatchToProps)(TalismanSearcher);