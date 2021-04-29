import {React, useState} from "react"
import axios from "axios"
import skills from "../resources/skills"

const DecorationMaker = () =>{
    const [error, setError] = useState("")
    const [name, setName] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill1Value, setSkill1Value] = useState(1)
    const [slot, setSlot] = useState(1)

    async function submit(data){
        setError("")
        try{
            await axios.post("/decoration/add", data)
            .then((response)=>{
                console.log(response.data.data)
                console.log(response.data.error)
            })
        }
        catch(err){
            setError("Something went wrong!")
        }
    }

    return(
        <div>
            <div>
                Decoration Name:
                <input type = "text" value = {name}
                onChange = {(evt)=>{setName(evt.target.value)}}></input>
            </div>

            <div>
                Skill 1
                <select value = {skill1} onChange = {(evt)=>{setSkill1(evt.target.value)}}>
                    <option value = ""></option>
                    {skills.map((v)=><option value = {v} key = {v.name}>{v}</option>)}
                </select>
                <input type ="text" value = {skill1Value} onChange ={(evt)=>{setSkill1Value(evt.target.value)}}></input>
                <button onClick ={()=>{setSkill1(""); setSkill1Value("")}}>Clear Skill 1</button>
            </div>
            <div>
                Slots:
                <select value = {slot} onChange = {(evt)=>{setSlot(evt.target.value)}}>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                </select>
            </div>

            <div>
                <button onClick = {()=>{submit({
                    name: name,
                    skill1: skill1,
                    skill1Value: skill1Value,
                    slot: slot,
                })
                }}>Submit</button>
            </div>
    
        </div>
    )
}

export default DecorationMaker