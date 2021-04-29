import {React, useState} from "react"
import axios from "axios"
import skills from "../resources/skills"

const SkillMaker = () =>{
    const [error, setError] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [levels, setLevels] = useState(1)
    const [level1Desc, setLevel1Desc] = useState("")
    const [level2Desc, setLevel2Desc] = useState("")
    const [level3Desc, setLevel3Desc] = useState("")
    const [level4Desc, setLevel4Desc] = useState("")
    const [level5Desc, setLevel5Desc] = useState("")
    const [level6Desc, setLevel6Desc] = useState("")
    const [level7Desc, setLevel7Desc] = useState("")


    async function submit(data){
        setError("")
        try{
            await axios.post("/skills/add", data)
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
                Skill Name:
                <input type = "text" value = {name}
                onChange = {(evt)=>{setName(evt.target.value)}}></input>
            </div>

            <div>
                Skill Description:
                <input type = "text" value = {description}
                onChange = {(evt)=>{setDescription(evt.target.value)}}></input>
            </div>

            <div>
                Levels:
                <input type = "text" value = {levels}
                onChange = {(evt)=>{setLevels(evt.target.value)}}></input>
            </div>

            <div>
                Level 1 Description:
                <input type = "text" value = {level1Desc}
                onChange = {(evt)=>{setLevel1Desc(evt.target.value)}}></input>
            </div>

            <div>
                Level 2 Description:
                <input type = "text" value = {level2Desc}
                onChange = {(evt)=>{setLevel2Desc(evt.target.value)}}></input>
            </div>

            <div>
                Level 3 Description:
                <input type = "text" value = {level3Desc}
                onChange = {(evt)=>{setLevel3Desc(evt.target.value)}}></input>
            </div>

            <div>
                Level 4 Description:
                <input type = "text" value = {level4Desc}
                onChange = {(evt)=>{setLevel4Desc(evt.target.value)}}></input>
            </div>

            <div>
                Level 5 Description:
                <input type = "text" value = {level5Desc}
                onChange = {(evt)=>{setLevel5Desc(evt.target.value)}}></input>
            </div>

            <div>
                Level 6 Description:
                <input type = "text" value = {level6Desc}
                onChange = {(evt)=>{setLevel6Desc(evt.target.value)}}></input>
            </div>

            <div>
                Level 7 Description:
                <input type = "text" value = {level7Desc}
                onChange = {(evt)=>{setLevel7Desc(evt.target.value)}}></input>
            </div>

            

            <div>
                <button onClick = {()=>{submit({
                    name: name,
                    description: description,
                    levels: levels,
                    level1Desc: level1Desc,
                    level2Desc: level2Desc,
                    level3Desc: level3Desc,
                    level4Desc: level4Desc,
                    level5Desc: level5Desc,
                    level6Desc: level6Desc,
                    level7Desc: level7Desc,

                })
                }}>Submit</button>
            </div>
    
        </div>
    )
}

export default SkillMaker