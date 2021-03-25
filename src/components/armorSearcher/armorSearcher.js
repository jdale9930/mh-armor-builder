import {React, useState} from "react"
import "./armorSearcher.css"
import axios from "axios"
import ArmorDisplay from "../armorDisplay/armorDisplay"

const ArmorSearcher = () => {
    const [name, setName] = useState("")
    const [slots, setSlots] = useState("")
    const [skill, setSkill] = useState("")
    const [armorType, setType] = useState("")
    //const [armorClass, setClass] = useState("")
    const [searchResults, setSearchResults] = useState([])
    
    async function searchArmor(){
            let results = await axios.get(`/armor/search?name=${name}&skill=${skill}&slots=${slots}&type=${armorType}`)
            console.log(results)
            setSearchResults(results.data.data)
    }

    return(
        <div>
            <div className = "searchBox">
                <div>
                <div className = "row">
                    <div className = "searchSpacer">Search by Name:</div>
                    <input type = "text" value = {name}
                    onChange = {(evt)=>{setName(evt.target.value)}}></input>
                </div>

                <div className = "row">
                    <div className = "searchSpacer">Search by Skill: </div>
                    <input type = "text" value = {skill}
                    onChange = {(evt)=>{setSkill(evt.target.value)}}></input>
                </div>

                <div className = "row">
                    <div style = {{width: "120px"}}>Minimum Slots:</div>
                    <select value = {slots} onChange ={(evt)=>{setSlots(evt.target.value)}}>
                        <option value = "0">0</option>
                        <option value = "1">1</option>
                        <option value = "2">2</option>
                        <option value = "3">3</option>
                    </select>
                    <div style ={{width: "78px", marginLeft: "20px"}}>Type:</div>
                    <select value = {armorType} onChange ={(evt)=>{setType(evt.target.value)}}>
                        <option value = ""></option>
                        <option value = "Head">Head</option>
                        <option value = "Torso">Torso</option>
                        <option value = "Arms">Arms</option>
                        <option value = "Waist">Waist</option>
                        <option value = "Legs">Legs</option>
                    </select>
                </div>
                </div>
                <button className = "searchButton" onClick = {()=>{searchArmor()}}>Search</button>
            </div>
            <div className = "SearchDisplay">
                {searchResults.length > 0 && 
                searchResults.map((v)=>
                <ArmorDisplay
                key = {v.armor_id}
                name = {v.name}
                type = {v.type}
                class = {v.class}
                skill1 = {v.skill1}
                skill2 = {v.skill2}
                skill3 = {v.skill3}
                skill4 = {v.skill4}
                defense = {v.defense}
                fireRes = {v.fireRes}
                waterRes = {v.waterRes}
                thunderRes = {v.thunderRes}
                iceRes = {v.iceRes}
                dragonRes = {v.dragonRes}
                slots = {v.slots}
                rarity = {v.rarity}
                />)}
            </div>
        </div>
    )
}

export default ArmorSearcher