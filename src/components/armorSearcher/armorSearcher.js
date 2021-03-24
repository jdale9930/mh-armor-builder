import {React, useState} from "react"
import "./armorSearcher.css"

const ArmorSearcher = () => {
    const [name, setName] = useState("")
    const [slots, setSlots] = useState("")
    const [skill, setSkill] = useState("")
    const [armorType, setType] = useState("")
    const [armorClass, setClass] = useState("")
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
                    Slots:
                    <select value = {slots} onChange ={(evt)=>{setSlots(evt.target.value)}}>
                        <option value = "0">0</option>
                        <option value = "1">1</option>
                        <option value = "2">2</option>
                        <option value = "3">3</option>
                    </select>
                    Type:
                    <select value = {slots} onChange ={(evt)=>{setSlots(evt.target.value)}}>
                        <option value = ""></option>
                        <option value = "Head">Head</option>
                        <option value = "Torso">Torso</option>
                        <option value = "Arms">Arms</option>
                        <option value = "Waist">Waist</option>
                        <option value = "Legs">Legs</option>
                    </select>
                </div>
                <button onClick = {()=>{
                    if(name != 0)
                    {
                        
                    }
                }}>Submit</button>
            </div>
            <iframe>

            </iframe>
        </div>
    )
}

export default ArmorSearcher