import {React, useState} from "react"
import axios from "axios"
import skills from "../resources/skills"

const ArmorMaker = () =>{
    const [error, setError] = useState("")
    const [name, setName] = useState("")
    const [armorPiece, setArmorPiece] = useState("Head")
    const [armorSet, setArmorSet] = useState("")
    const [gender, setGender] = useState("Male")
    const [skill1, setSkill1] = useState("")
    const [skill1Val, setSkill1Val] = useState(0)
    const [skill2, setSkill2] = useState("")
    const [skill2Val, setSkill2Val] = useState(0)
    const [skill3, setSkill3] = useState("")
    const [skill3Val, setSkill3Val] = useState(0)
    const [skill4, setSkill4] = useState("")
    const [skill4Val, setSkill4Val] = useState(0)
    const [defense, setDefense] = useState("0")
    const [fireRes, setFireRes] = useState("0")
    const [waterRes, setWaterRes] = useState("0")
    const [thunderRes, setThunderRes] = useState("0")
    const [iceRes, setIceRes] = useState("0")
    const [dragonRes, setDragonRes] = useState("0")
    const [slot1, setSlot1] = useState("0")
    const [slot2, setSlot2] = useState("0")
    const [slot3, setSlot3] = useState("0")
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
                Armor Piece:
                <select value = {armorPiece} onChange = {(evt)=>{setArmorPiece(evt.target.value)}}>
                    <option value = "Head">Head</option>
                    <option value = "Torso">Torso</option>
                    <option value = "Arms">Arms</option>
                    <option value = "Waist">Waist</option>
                    <option value = "Legs">Legs</option>
                </select>
            </div>

            <div>
                Armor Set:
                <input type = "text" value = {armorSet}
                onChange = {(evt)=>{setArmorSet(evt.target.value)}}></input>
            </div>

            <div>
                Armor Gender:
                <select value = {gender} onChange = {(evt)=>{setGender(evt.target.value)}}>
                    <option value = "Male">Male</option>
                    <option value = "Female">Female</option>
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
                </select>
            </div>

            <div>
                Slot1:
                <select value = {slot1} onChange = {(evt)=>{setSlot1(evt.target.value)}}>
                    <option value = "0">0</option>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                </select>
                Slot2:
                <select value = {slot2} onChange = {(evt)=>{setSlot2(evt.target.value)}}>
                    <option value = "0">0</option>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                </select>
                Slot3:
                <select value = {slot3} onChange = {(evt)=>{setSlot3(evt.target.value)}}>
                    <option value = "0">0</option>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                </select>
            </div>

            <div>
                Skill 1
                <select value = {skill1} onChange = {(evt)=>{setSkill1(evt.target.value)}}>
                    <option value = ""></option>
                    {skills.map((v)=><option value = {v} key = {v.name}>{v}</option>)}
                </select>
                <input type = "number" value = {skill1Val} style = {{width: "25px"}}
                    onChange = {(evt)=>{setSkill1Val(evt.target.value)}}></input>                
                    <button onClick ={()=>{setSkill1(""); setSkill1Val(0)}}>Clear Skill 1</button>
            </div>

            <div>
                Skill 2
                <select value = {skill2} onChange = {(evt)=>{setSkill2(evt.target.value)}}>
                    <option value = ""></option>
                    {skills.map((v)=><option value = {v} key = {v.name}>{v}</option>)}
                </select>
                <input type = "number" value = {skill2Val} style = {{width: "25px"}}
                    onChange = {(evt)=>{setSkill3Val(evt.target.value)}}></input>                
                    <button onClick ={()=>{setSkill2(""); setSkill2Val(0)}}>Clear Skill 2</button>
            </div>

            <div>
                Skill 3
                <select value = {skill3} onChange = {(evt)=>{setSkill3(evt.target.value)}}>
                    <option value = ""></option>
                    {skills.map((v)=><option value = {v} key = {v.name}>{v}</option>)}
                </select>
                <input type = "number" value = {skill3Val} style = {{width: "25px"}}
                    onChange = {(evt)=>{setSkill3Val(evt.target.value)}}></input>                
                    <button onClick ={()=>{setSkill3(""); setSkill3Val(0)}}>Clear Skill 3</button>
            </div>

            <div>
                Skill 4
                <select value = {skill4} onChange = {(evt)=>{setSkill4(evt.target.value)}}>
                    <option value = ""></option>
                    {skills.map((v)=><option value = {v} key = {v.name}>{v}</option>)}
                </select>
                    <input type = "number" value = {skill4Val} style = {{width: "25px"}}
                    onChange = {(evt)=>{setSkill4Val(evt.target.value)}}></input>                
                    <button onClick ={()=>{setSkill4(""); setSkill4Val(0)}}>Clear Skill 4</button>
            </div>

            <div>
                Defense:
                <input type = "number" value = {defense} style = {{width: "50px"}}
                    onChange = {(evt)=>{setDefense(evt.target.value)}}></input>
            </div>

            <div>
                Fire Res:
                <input type = "number" value = {fireRes} style = {{width: "25px"}}
                onChange = {(evt)=>{setFireRes(evt.target.value)}}></input>
            </div>

            <div>
                Water Res:
                <input type = "number" value = {waterRes} style = {{width: "25px"}}
                onChange = {(evt)=>{setWaterRes(evt.target.value)}}></input>
            </div>

            <div>
                Thunder Res:
                <input type = "number" value = {thunderRes} style = {{width: "25px"}}
                onChange = {(evt)=>{setThunderRes(evt.target.value)}}></input>
            </div>

            <div>
                Ice Res:
                <input type = "number" value = {iceRes} style = {{width: "25px"}}
                onChange = {(evt)=>{setIceRes(evt.target.value)}}></input>
            </div>

            <div>
                Dragon Res:
                <input type = "number" value = {dragonRes} style = {{width: "25px"}}
                onChange = {(evt)=>{setDragonRes(evt.target.value)}}></input>
            </div>

            <div>
                <button onClick = {()=>{submit({
                    name: name,
                    piece: armorPiece,
                    armorSet: armorSet,
                    gender: gender,
                    rarity: rarity,
                    slot1: slot1,
                    slot2: slot2,
                    slot3: slot3,
                    skill1: skill1 ,
                    skill1Value: skill1Val,
                    skill2: skill2,
                    skill2Value: skill2Val,
                    skill3: skill3,
                    skill3Value: skill3Val,
                    skill4: skill4,
                    skill4Value: skill4Val,
                    defense: defense,
                    fireRes: fireRes,
                    waterRes: waterRes,
                    thunderRes: thunderRes,
                    iceRes: iceRes,
                    dragonRes: dragonRes,
                })
                }}>Submit</button>
            </div>

        </div>

        
    )
}

export default ArmorMaker

