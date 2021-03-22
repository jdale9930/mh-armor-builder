import {React, useState} from "react"
import axios from "axios"
import skills from "../resources/skills"

const ArmorMaker = () =>{
    const [error, setError] = useState("")
    const [name, setName] = useState("")
    const [armorClass, setClass] = useState("Blademaster")
    const [armorType, setType] = useState("Head")
    const [gender, setGender] = useState("Male")
    const [skill1, setSkill1] = useState("")
    const [skill1Val, setSkill1Val] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill2Val, setSkill2Val] = useState("")
    const [skill3, setSkill3] = useState("")
    const [skill3Val, setSkill3Val] = useState("")
    const [skill4, setSkill4] = useState("")
    const [skill4Val, setSkill4Val] = useState("")
    const [defense, setDefense] = useState("0")
    const [fireRes, setFireRes] = useState("0")
    const [waterRes, setWaterRes] = useState("0")
    const [thunderRes, setThunderRes] = useState("0")
    const [iceRes, setIceRes] = useState("0")
    const [dragonRes, setDragonRes] = useState("0")
    const [slots, setSlots] = useState("0")
    const [rarity, setRarity] = useState("0")

    async function submit(data){
        setError("")
        try{
            await axios.post("/armor/add", data)
            .then((response)=>{
                console.log(response.data.data)
                console.log(response.data.error)
            })
        }
        catch(err){
            setError("Something went wrong!")
            console.log(error)
            // console.log(response.error)
        }
    }
    return(
        <div>
            <div>
                Armor Name:
                <input type = "text" value = {name}
                onChange = {(evt)=>{setName(evt.target.value)}}></input>
            </div>

            <div>
                Armor Class:
                <select value = {armorClass} onChange = {(evt)=>{setClass(evt.target.value)}}>
                    <option value = "Blademaster">Blademaster</option>
                    <option value = "Gunner">Gunner</option>
                </select>
            </div>

            <div>
                Armor Type:
                <select value = {armorType} onChange = {(evt)=>{setType(evt.target.value)}}>
                    <option value = "Head">Head</option>
                    <option value = "Torso">Torso</option>
                    <option value = "Arms">Arms</option>
                    <option value = "Waist">Waist</option>
                    <option value = "Legs">Legs</option>
                </select>
            </div>

            <div>
                Armor Gender:
                <select value = {gender} onChange = {(evt)=>{setGender(evt.target.value)}}>
                    <option value = "Male">Male</option>
                    <option value = "Female">Female</option>
                </select>
            </div>

            <div>
                Skill 1
                <select value = {skill1} onChange = {(evt)=>{setSkill1(evt.target.value)}}>
                    <option value = ""></option>
                    {skills.map((v)=><option value = {v}>{v}</option>)}
                </select>
                <input type ="text" value = {skill1Val} onChange ={(evt)=>{setSkill1Val(evt.target.value)}}></input>
                <button onClick ={()=>{setSkill1(""); setSkill1Val("")}}>Clear Skill 1</button>
            </div>

            <div>
                Skill 2
                <select value = {skill2} onChange = {(evt)=>{setSkill2(evt.target.value)}}>
                    <option value = ""></option>
                    {skills.map((v)=><option value = {v}>{v}</option>)}
                </select>
                <input type ="text" value = {skill2Val} onChange ={(evt)=>{setSkill2Val(evt.target.value)}}></input>
                <button onClick ={()=>{setSkill2(""); setSkill2Val("")}}>Clear Skill 2</button>
            </div>

            <div>
                Skill 3
                <select value = {skill3} onChange = {(evt)=>{setSkill3(evt.target.value)}}>
                    <option value = ""></option>
                    {skills.map((v)=><option value = {v}>{v}</option>)}
                </select>
                <input type ="text" value = {skill3Val} onChange ={(evt)=>{setSkill3Val(evt.target.value)}}></input>
                <button onClick ={()=>{setSkill3(""); setSkill3Val("")}}>Clear Skill 3</button>
            </div>

            <div>
                Skill 4
                <select value = {skill4} onChange = {(evt)=>{setSkill4(evt.target.value)}}>
                    <option value = ""></option>
                    {skills.map((v)=><option value = {v}>{v}</option>)}
                </select>
                <input type ="text" value = {skill4Val} onChange ={(evt)=>{setSkill4Val(evt.target.value)}}></input>
                <button onClick ={()=>{setSkill4(""); setSkill4Val("")}}>Clear Skill 4</button>
            </div>

            <div>
                Defense:
                <input type = "text" value = {defense} placeholder = "0"
                onChange = {(evt)=>{setDefense(evt.target.value)}}></input>
            </div>

            <div>
                Fire Res:
                <input type = "text" value = {fireRes} placeholder = "0"
                onChange = {(evt)=>{setFireRes(evt.target.value)}}></input>
            </div>

            <div>
                Water Res:
                <input type = "text" value = {waterRes} placeholder = "0"
                onChange = {(evt)=>{setWaterRes(evt.target.value)}}></input>
            </div>

            <div>
                Thunder Res:
                <input type = "text" value = {thunderRes} placeholder = "0"
                onChange = {(evt)=>{setThunderRes(evt.target.value)}}></input>
            </div>

            <div>
                Ice Res:
                <input type = "text" value = {iceRes} placeholder = "0"
                onChange = {(evt)=>{setIceRes(evt.target.value)}}></input>
            </div>

            <div>
                Dragon Res:
                <input type = "text" value = {dragonRes} placeholder = "0"
                onChange = {(evt)=>{setDragonRes(evt.target.value)}}></input>
            </div>

            <div>
                Slots:
                <select value = {slots} onChange = {(evt)=>{setSlots(evt.target.value)}}>
                    <option value = "0">0</option>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                </select>
            </div>

            <div>
                Rarity:
                <select value = {rarity} onChange = {(evt)=>{setRarity(evt.target.value)}}>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4</option>
                    <option value = "5">5</option>
                    <option value = "6">6</option>
                    <option value = "7">7</option>
                    <option value = "8">8</option>
                    <option value = "9">9</option>
                    <option value = "10">10</option>
                    <option value = "X">X</option>
                </select>
            </div>

            <div>
                <button onClick = {()=>{submit({
                    name: name,
                    class: armorClass,
                    type: armorType,
                    gender: gender,
                    skill1: skill1 + ":" + skill1Val,
                    skill2: skill2 + ":" + skill2Val,
                    skill3: skill3 + ":" + skill3Val,
                    skill4: skill4 + ":" + skill4Val,
                    defense: defense,
                    fireRes: fireRes,
                    waterRes: waterRes,
                    thunderRes: thunderRes,
                    iceRes: iceRes,
                    dragonRes: dragonRes,
                    slots: slots,
                    rarity: rarity
                })
                }}>Submit</button>
            </div>

        </div>

        
    )
}

export default ArmorMaker

