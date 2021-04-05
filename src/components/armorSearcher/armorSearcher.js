import {React, useState} from "react"
import "./armorSearcher.css"
import axios from "axios"
import ArmorDisplay from "../armorDisplay/armorDisplay"

const ArmorSearcher = () => {
    const [name, setName] = useState("")
    const [slots, setSlots] = useState("")
    const [skill, setSkill] = useState("")
    const [armorPiece, setPiece] = useState("")
    //const [armorClass, setClass] = useState("")
    const [searchResults, setSearchResults] = useState([])
    
    async function searchArmor(){
            let results = await axios.get(`/armor/search?name=${name}&skill=${skill}&slots=%&piece=${armorPiece}`)
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
                    <select value = {armorPiece} onChange ={(evt)=>{setPiece(evt.target.value)}}>
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
            </div>
        </div>
    )
}

export default ArmorSearcher