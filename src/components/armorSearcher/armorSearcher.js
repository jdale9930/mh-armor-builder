import {React, useState} from "react"
import "./armorSearcher.css"
import axios from "axios"
import ArmorDisplay from "../armorDisplay/armorDisplay"
import skills from "../resources/skills"

const ArmorSearcher = () => {
    const [name, setName] = useState("")
    const [slots, setSlot] = useState("")
    const [skill, setSkill] = useState("")
    const [armorPiece, setPiece] = useState("")
    //const [armorClass, setClass] = useState("")
    const [searchResults, setSearchResults] = useState([])
    
    async function searchArmor(){
            let results = await axios.get(`/armor/search?name=${name}&skill=${skill}&slots=${slots}&piece=${armorPiece}`)
            setSearchResults(results.data.data)
    }

    return(
        <div>
            <div className = "armorSearchBoxDisplay">
                <div>
                    <div className = "row">
                        <div>
                            <div>Armor Name:</div>
                            <input type = "text" value = {name}
                            onChange = {(evt)=>{setName(evt.target.value)}}></input>
                        </div>
                        <div>
                            <div>Skill:</div>
                            <select value = {skill} onChange = {(evt)=>{setSkill(evt.target.value)}}>
                                <option value = ""></option>
                                {skills.map((v)=><option value = {v} key = {v.name}>{v}</option>)}
                            </select>
                        </div>
                    </div>

                <div className = "row">
                    <div style = {{width: "153px"}}>
                        <div>Slot:</div>
                        <div>
                            <input type = "radio" id = "slot10" name = "slot1" value = {0}
                            onChange = {(evt)=>{setSlot(evt.target.value)}}></input>
                            <label htmlFor ="slot10">0</label>
                            <input type = "radio" id = "slot11" name = "slot1" value = {1}
                            onChange = {(evt)=>{setSlot(evt.target.value)}}></input>
                            <label htmlFor ="slot11">1</label>
                            <input type = "radio" id = "slot12" name = "slot1" value = {2}
                            onChange = {(evt)=>{setSlot(evt.target.value)}}></input>
                            <label htmlFor ="slot12">2</label>
                            <input type = "radio" id = "slot13" name = "slot1" value = {3}
                            onChange = {(evt)=>{setSlot(evt.target.value)}}></input>
                            <label htmlFor ="slot13">3</label>
                        </div>
                    </div>
                    <div>
                    <div>Type:</div>
                    <select value = {armorPiece} style = {{width: "146px"}}onChange ={(evt)=>{setPiece(evt.target.value)}}>
                        <option value = ""></option>
                        <option value = "Head">Head</option>
                        <option value = "Torso">Torso</option>
                        <option value = "Arms">Arms</option>
                        <option value = "Waist">Waist</option>
                        <option value = "Legs">Legs</option>
                    </select> 
                    </div>
                </div>
                </div>
                <button onClick = {()=>{searchArmor()}} style = {{width: "180px", margin: "5px"}}>Search</button>
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