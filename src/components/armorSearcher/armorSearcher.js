import {React, useState} from "react"
import "./armorSearcher.css"
import axios from "axios"
import ArmorDisplay from "../armorDisplay/armorDisplay"

const ArmorSearcher = () => {
    const [name, setName] = useState("")
    const [slots, setSlots] = useState("")
    const [skill, setSkill] = useState("")
    const [armorType, setType] = useState("")
    const [armorClass, setClass] = useState("")
    const [searchResults, setSearchResults] = useState([])
    async function searchArmor(){
        
        if(name != 0)
        {
            let results = await axios.get(`/armor/byName/${name}`)
            console.log(results.data.data)
            setSearchResults(results.data.data)
        }
    }

    return(
        <div>
            <div className = "searchBox">
                <div>
                    Search by Name: 
                    <input type = "text" value = {name}
                    onChange = {(evt)=>{setName(evt.target.value)}}></input>
                </div>

                <div>
                    Search by Skill: 
                    <input type = "text" value = {skill}
                    onChange = {(evt)=>{setSkill(evt.target.value)}}></input>
                </div>

                <div>
                    Minimum Slots:
                    <select value = {slots} onChange ={(evt)=>{setSlots(evt.target.value)}}>
                        <option value = "0">0</option>
                        <option value = "1">1</option>
                        <option value = "2">2</option>
                        <option value = "3">3</option>
                    </select>
                    Type:
                    <select value = {slots} onChange ={(evt)=>{setType(evt.target.value)}}>
                        <option value = ""></option>
                        <option value = "Head">Head</option>
                        <option value = "Torso">Torso</option>
                        <option value = "Arms">Arms</option>
                        <option value = "Waist">Waist</option>
                        <option value = "Legs">Legs</option>
                    </select>
                </div>
                <button onClick = {()=>{searchArmor()}}>Submit</button>
            </div>
            <iframe>
                {searchResults.length > 0 && 
                searchResults.map((v)=>
                <ArmorDisplay
                key = {v.armor_id}
                name = {v.name}
                type = {v.type}
                class = {v.class}
                />)}
            </iframe>
        </div>
    )
}

export default ArmorSearcher