import {React, useState} from "react"
import axios from "axios"
import skills from "../resources/skills"

const ArmorMaker = () =>{
    const [name, setName] = useState("")
    const [armorClass, setClass] = useState("")
    const [armorType, setType] = useState("")
    const [gender, setGender] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [skill4, setSkill4] = useState("")
    const [fireRes, setFireRes] = useState(0)
    const [waterRes, setWaterRes] = useState(0)
    const [thunderRes, setThunderRes] = useState(0)
    const [iceRes, setIceRes] = useState(0)
    const [dragonRes, setDragonRes] = useState(0)
    const [slots, setSlots] = useState(0)
    const [rarity, setRarity] = useState(0)

    return(
        <div>
            <div>
                Armor Name:
                <input type = "text" value = {name}
                onChange = {(evt)=>{setName(evt.target.value)}}></input>
            </div>

            <div>
                Armor Class:
                <select value = {armorClass} onChange = {(evt)=>{setArmorClass(evt.target.value)}}>
                    <option value = "Blademaster"></option>
                    <option value = "Gunner"></option>
                </select>
            </div>
        </div>
    )
}

export default ArmorMaker

