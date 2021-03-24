import {React, useState} from "react"
import axios from "axios"
import skills from "../resources/skills"

const DecorationMaker = () =>{
    const [error, setError] = useState("")
    const [name, setName] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill1Val, setSkill1Val] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill2Val, setSkill2Val] = useState("")
    const [slots, setSlots] = useState("1")

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
            console.log(error)
            // console.log(response.error)
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
                Slots:
                <select value = {slots} onChange = {(evt)=>{setSlots(evt.target.value)}}>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                </select>
            </div>

            <div>
                <button onClick = {()=>{submit({
                    name: name,
                    skill1: skill1 + ":" + skill1Val,
                    skill2: skill2 + ":" + skill2Val,
                    slots: slots,
                })
                }}>Submit</button>
            </div>
        </div>
    )
}

export default DecorationMaker